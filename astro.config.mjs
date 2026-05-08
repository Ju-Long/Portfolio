// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	site: "https://babasama.com",
	security: {
		checkOrigin: true,
		allowedDomains: [
			{
				hostname: 'babasama.com',
				protocol: 'https'
			},
			{
				hostname: 'localhost',
				protocol: 'http',
				port: "4321"
			},
		]
	},
	vite: {
		plugins: [tailwindcss()]
	},
	integrations: [sitemap()],
	output: "server",
	adapter: node({
		mode: 'middleware'
	})
});