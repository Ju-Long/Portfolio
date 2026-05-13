import * as THREE from 'three';
import gsap from 'gsap';

export class GenieTransition {
    private scene: THREE.Scene;
    private camera: THREE.OrthographicCamera;
    private renderer: THREE.WebGLRenderer;
    private mesh: THREE.Mesh;
    private material: THREE.ShaderMaterial;
    private animationFrameId: number = 0;

    destroy() {
        cancelAnimationFrame(this.animationFrameId);
        this.renderer.dispose();
        this.material.dispose();
        if (this.material.uniforms.uTexture.value) {
            this.material.uniforms.uTexture.value.dispose();
        }
        this.renderer.domElement.remove();
    }

    constructor(container: HTMLElement, imageUrl: string) {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 0.1, 1000);
        this.camera.position.z = 1;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(this.renderer.domElement);

        this.material = new THREE.ShaderMaterial({
            uniforms: {
                uTexture: { value: null },
                uProgress: { value: 0.0 },
                uResolution: { value: new THREE.Vector2(width, height) },
                uInitialSize: { value: 80.0 }
            },
            vertexShader: `
                uniform float uProgress;
                uniform vec2 uResolution;
                uniform float uInitialSize;
                varying vec2 vUv;

                void main() {
                    vUv = uv;
                    vec3 pos = position;

                    // 1. HEIGHT EXPANSION (Phase 0.0 -> 0.6)
                    float hFactor = smoothstep(0.0, 0.6, uProgress);
                    float currentHeight = mix(uInitialSize, uResolution.y, hFactor);
                    
                    pos.y = pos.y * (currentHeight / uResolution.y);
                    pos.y += (uResolution.y - currentHeight) / -2.0;

                    // 2. WIDTH & MESH LOGIC
                    float startWidthFactor = uInitialSize / uResolution.x;
                    
                    // Progress thresholds for the top/bottom expansion
                    float topExpand = smoothstep(0.3, 0.8, uProgress);    // Reaches 70% 
                    float finalSnap = smoothstep(0.85, 1.0, uProgress);  // Final expansion to 100%
                    
                    // Width logic: Top half vs Bottom half split at uv.y = 0.5
                    float targetWidth;
                    if (uv.y > 0.5) {
                        float distFromCenter = (uv.y - 0.5) * 2.0;
                        float centerWidth = mix(startWidthFactor, 0.1, topExpand);
                        centerWidth = mix(centerWidth, 0.7, topExpand);

                        float bottomPinch = mix(startWidthFactor, 1.0, finalSnap);
                        targetWidth = mix(centerWidth, bottomPinch, pow(distFromCenter, 2.5));
                        targetWidth = mix(targetWidth, 1.0, finalSnap);
                    } else {
                        // BOTTOM HALF: Extreme bending
                        // Normalize lower half y to 0.0 (center) and 1.0 (bottom)
                        float distFromCenter = (0.5 - uv.y) * 2.0;
                        
                        // Width at the center must match the top half's current width
                        float centerWidth = mix(startWidthFactor, 0.7, topExpand);
                        centerWidth = mix(centerWidth, 1.0, finalSnap);
                        
                        // Pinch at the very bottom
                        float bottomPinch = mix(startWidthFactor, 1.0, finalSnap);
                        
                        // Extreme parabolic curve for the lower half
                        targetWidth = mix(centerWidth, bottomPinch, pow(distFromCenter, 2.5));
                    }
                    
                    pos.x *= targetWidth;

                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D uTexture;
                uniform float uProgress;
                varying vec2 vUv;
                void main() {
                    // Hide image completely when uProgress is 0
                    float alpha = step(0.001, uProgress); 
                    vec4 color = texture2D(uTexture, vUv);
                    gl_FragColor = vec4(color.rgb, color.a * alpha);
                }
            `,
            transparent: true
        });

        this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height, 128, 128), this.material);
        this.scene.add(this.mesh);
        this.animate();

        const loadTexture = async (url: string, maxRetries: number = 3): Promise<THREE.Texture> => {
            const loader = new THREE.TextureLoader();
            for (let attempt = 1; attempt <= maxRetries; attempt++) {
                try {
                    return await loader.loadAsync(url);
                } catch (error) {
                    console.warn(`Texture load attempt ${attempt}/${maxRetries} failed for: ${url}`, error);
                    if (attempt < maxRetries) {
                        await new Promise(resolve => setTimeout(resolve, 1000));
                    }
                }
            }
            throw new Error(`Failed to load texture after ${maxRetries} attempts: ${url}`);
        };

        loadTexture(imageUrl).then((texture) => {
            this.material.uniforms.uTexture.value = texture;
        }).catch((error) => {
            console.error(error);
        });
    }

    public open() {
        gsap.to(this.material.uniforms.uProgress, {
            value: 1.0,
            duration: 1.6,
            ease: "expo.inOut"
        });
    }

    public close() {
        gsap.to(this.material.uniforms.uProgress, {
            value: 0.0,
            duration: 1.2,
            ease: "power4.inOut"
        });
    }

    private animate = () => {
        this.animationFrameId = requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
    };
}