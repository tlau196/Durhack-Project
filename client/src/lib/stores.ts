import type { User } from "firebase/auth";
import { writable } from "svelte/store";
import type { Listing, Order } from "./firebase";

export const authStore = writable<User | null>();

export const basketStore = writable<Listing[]>([]);

if (typeof localStorage !== "undefined") {
    basketStore.set(JSON.parse(localStorage.getItem("basket") || "[]"));
    
    basketStore.subscribe((basket) => {
        localStorage.setItem("basket", JSON.stringify(basket));
    });
}


export const orderStore = writable<Order[]>([]);
