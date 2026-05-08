import type { App } from "@model/app";

import { firestore } from "./client";

import { collection, getDocs, type DocumentData, type QueryDocumentSnapshot } from "firebase/firestore";

const convertFirestoreToApp = (document: QueryDocumentSnapshot<DocumentData, DocumentData>): App => {
    const id = document.id;
    const { page, name, description, apple_link, web_link, github_link, image, tools } = document.data();
    return { id, page, name, description, apple_link, web_link, github_link, image, tools }
}

export const fetchApps = async(): Promise<App[]> => {
    const snapshot = await getDocs(collection(firestore, "apps"));
    return snapshot.docs.map((doc) => convertFirestoreToApp(doc));
}
