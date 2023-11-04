import { getListing } from "$lib/firebase.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const { slug } = params;

    const listing = await getListing(slug);
    return { listing };
}
