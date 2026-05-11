import type { App, AppPreview } from "@model/app";

import { firestore } from "./client";

import { collection, getDocs, type DocumentData, type QueryDocumentSnapshot } from "firebase/firestore";

const convertFirestoreToApp = (document: QueryDocumentSnapshot<DocumentData, DocumentData>): App => {
    const id = document.id;
    const { page, name, description, apple_link, web_link, github_link, image, image_path, tools } = document.data();
    return { id, page, name, description, apple_link, web_link, github_link, image, image_path, tools }
}

export const fetchApps = async(): Promise<App[]> => {
    const snapshot = await getDocs(collection(firestore, "apps"));
    return snapshot.docs.map((doc) => convertFirestoreToApp(doc));
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
