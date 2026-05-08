import type { App } from "@model/app";

import { atom } from "nanostores";

export const selected_app = atom<string | undefined>(undefined);

export const apps = atom<App[]>([]);

export const app_memory = atom<string[]>([]);