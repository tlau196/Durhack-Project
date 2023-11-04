import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import { authStore } from "./stores";

const firebaseConfig = {
    apiKey: "AIzaSyBXOjJy_EpIafw6mntPfHjMq9iKPknx_4g",
    authDomain: "durhack-project-45a1b.firebaseapp.com",
    projectId: "durhack-project-45a1b",
    storageBucket: "durhack-project-45a1b.appspot.com",
    messagingSenderId: "912269921938",
    appId: "1:912269921938:web:017b70dda6b2c8eb06e04b",
    measurementId: "G-MWCQ2PH5CM"
}

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);


firebaseAuth.onAuthStateChanged(user => {
    if (user) {
        authStore.set(user);
    }
});

const googleProvider = new GoogleAuthProvider();

export function signInWithGoogle() {
    return signInWithPopup(firebaseAuth, googleProvider).catch((e) => {
        console.error('Sign in with google error:', e);
    });
} 

export interface Listing {
    id?: string;
    labels: string,
    product_description: string;
    product_name: string;
    seller_ID: string;
    price: number;
}

export async function getUsersListings(uid: string) {
    try {
        const q = query(collection(db, "Listings"), where("seller_ID", "==", uid));
        const snapshot = await getDocs(q);
        const listings: Listing[] = [];
        snapshot.forEach((doc) => {
            const newListing = doc.data() as Listing;
            newListing.id = doc.id;
            listings.push(newListing);
        });

        return listings;
    } catch(e) {
        console.error("Error fetching user's listings:", e);
    }
}

export async function getListing(id: string) {
    try {
        const docRef = doc(db, "Listings", id);
        const docSnap = await getDoc(docRef);
        const listing = docSnap.data() as Listing;
        return listing;
    } catch(e) {
        console.error("Error fetching listing:", e);
    }
}

export async function createNewListing(name: string, description: string, price: number, uid: string) {
    try {
        await addDoc(collection(db, "Listings"), {
            product_name: name,
            product_description: description,
            seller_ID: uid,
            labels: "",
            price: price
        });
    } catch(e) {
        console.error("Error creating new listing:", e);
    }
}

export interface Purchase {
    id: string;
    buyer_ID: string;
    listing_ID: string;
}

export async function makePurchase(listingID: string, uid: string) {
    try {
        const listing = await getListing(listingID);
        if (!listing) {
            throw new Error("Listing not found");
        }
        const purchase: Purchase = {
            id: "",
            buyer_ID: uid,
            listing_ID: listingID,
        };
        const docRef = await addDoc(collection(db, "Purchases"), purchase);
        purchase.id = docRef.id;
        return purchase;
    } catch(e) {
        console.error("Error making purchase:", e);
    }
}
