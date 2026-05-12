import type { App, AppPreview } from "@model/app";

import { firestore } from "./client";

import { collection, getDocs, where, query, type DocumentData, type QueryDocumentSnapshot, type DocumentReference } from "firebase/firestore";

const convertFirestoreToApp = (document: QueryDocumentSnapshot<DocumentData, DocumentData>): App => {
    const id = document.id;
    const { page, name, description, apple_link, web_link, github_link, image, image_path, tools } = document.data();
    return { id, page, name, description, apple_link, web_link, github_link, image, image_path, tools }
}

export const fetchApps = async(): Promise<App[]> => {
    const snapshot = await getDocs(collection(firestore, "apps"));
    return snapshot.docs.map((doc) => convertFirestoreToApp(doc));
}

export const getAppFromPath = async(path: string): Promise<App | undefined> => {
    const snapshot = await getDocs(query(collection(firestore, "apps"), where("page", "==", path)));
    const appDoc = snapshot.docs.find((doc) => doc.get("page") === path);
    return appDoc ? convertFirestoreToApp(appDoc) : undefined;
}

export const getAppSnapshotFromPath = async(path: string): Promise<QueryDocumentSnapshot<DocumentData, DocumentData> | undefined> => {
    const snapshot = await getDocs(query(collection(firestore, "apps"), where("page", "==", path)));
    const appDoc = snapshot.docs.find((doc) => doc.get("page") === path);
    return appDoc ? appDoc : undefined;
}

// MARK: - Previews
const convertFirestoreToPreview = (document: QueryDocumentSnapshot<DocumentData, DocumentData>): AppPreview => {
    const id = document.id;
    const { width, image, image_path, app } = document.data();
    return { id, width, image, image_path, app }
}

export const fetchPreviews = async(): Promise<AppPreview[]> => {
    const snapshot = await getDocs(collection(firestore, "previews"));
    return snapshot.docs.map((doc) => convertFirestoreToPreview(doc));
}

export const getPreviewsFromApp = async(app: DocumentReference): Promise<AppPreview[]> => {
    const snapshot = await getDocs(query(collection(firestore, "previews"), where("app", "==", app)));
    const previews = snapshot.docs.map((doc) => convertFirestoreToPreview(doc));
    return previews;
}
