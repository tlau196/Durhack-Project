import type { User } from "firebase/auth";
import { writable } from "svelte/store";
import type { Listing, Order } from "./firebase";

export const authStore = writable<User | null>();

export const basketStore = writable<Listing[]>([]);

export const orderStore = writable<Order[]>([]);
