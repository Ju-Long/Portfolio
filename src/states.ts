import type { App } from "@model/app";
import type { GenieTransition } from "@model/GeineTransition";

import { atom } from "nanostores";

export const selected_app = atom<string | undefined>(undefined);

export const apps = atom<App[]>([]);

export const app_memory = atom<string[]>([]);

export const transition_screen = atom<GenieTransition | undefined>(undefined); 