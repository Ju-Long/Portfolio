import { cert, getApps, initializeApp, type App, type ServiceAccount } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const startApp = (): App => {
    console.log("env", import.meta.env.ENV, import.meta.env.FIREBASE_PROJECT_ID);
    if (import.meta.env.ENV === "DEV") {
        console.log("using dev account")
        const service_account: ServiceAccount = {
            projectId: import.meta.env.FIREBASE_PROJECT_ID,
            privateKey: import.meta.env.FIREBASE_PRIVATE_KEY,
            clientEmail: import.meta.env.FIREBASE_CLIENT_EMAIL,
        }
        
        return initializeApp({ 
            credential: cert(service_account)
        })
    } 
    return initializeApp();
}

const apps = getApps();
export const app = apps.length === 0 ? startApp() : apps[0];
export const firestore = getFirestore(app);