import { getListing } from "$lib/firebase.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const { slug } = params;

    const listing = await getListing(slug);
    const imageUrl = await fetch(`durhack-express.onrender.com/prod/image/${slug}`);
    const image = await imageUrl.text();
    return { id: slug, ...listing, imageUrl: image };
}
