import type { App, AppSection, AppTool } from "@model/app";

import { firestore } from "./server";

import type { DocumentData, QueryDocumentSnapshot } from "firebase-admin/firestore";

// MARK: - App
const convertFirestoreToApp = (document: QueryDocumentSnapshot<DocumentData, DocumentData>): App => {
    const id = document.id;
    const { page, name, description, apple_link, web_link, github_link, image, image_path, tools } = document.data();
    return { id, page, name, description, apple_link, web_link, github_link, image, image_path, tools }
}

export const fetchApps = async(): Promise<App[]> => {
    const snapshot = await firestore.collection("apps").get();
    return snapshot.docs.map((doc) => convertFirestoreToApp(doc));
}

export const getAppFromPage = async(page: string): Promise<App | undefined> => {
    const snapshot = await firestore.collection("apps").where("page", "==", page).get();
    return snapshot.docs.map((doc) => convertFirestoreToApp(doc))[0];
}

// MARK: - Tools
const convertFirestoreToTools = (document: QueryDocumentSnapshot<DocumentData, DocumentData>): AppTool => {
    const id = document.id;
    const { name, link, icon } = document.data();
    return { id, name, link, icon }
}

export const fetchTools = async(): Promise<AppTool[]> => {
    const snapshot = await firestore.collection("tools").get();
    return snapshot.docs.map((doc) => convertFirestoreToTools(doc));
}

// MARK: - App Sections
const convertFirestoreToSection = (document: QueryDocumentSnapshot<DocumentData, DocumentData>): AppSection => {
    const id = document.id;
    const { title, description, platform, features, feature_type, app } = document.data();
    return { id, title, description, platform, features, feature_type, app }
}

export const fetchSections = async(id: string): Promise<AppSection[]> => {
    const snapshot = await firestore.collection("sections").where("app", "==", firestore.doc(`apps/${id}`)).get();
    return snapshot.docs.map((doc) => convertFirestoreToSection(doc));
}