import type { User } from "firebase/auth";
import { writable } from "svelte/store";
import type { Listing } from "./firebase";

export const authStore = writable<User>();

export const basketStore = writable<Listing[]>([]);
