import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
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
    labels: string,
    product_description: string;
    product_name: string;
    seller_ID: string;
}

export async function getUsersListings(uid: string) {
    try {
        const q = query(collection(db, "Listings"), where("seller_ID", "==", uid));
        const snapshot = await getDocs(q);
        const listings: Listing[] = [];
        snapshot.forEach((doc) => {
            const newListing = doc.data() as Listing;
            listings.push(newListing);
        });

        return listings;
    } catch(e) {
        console.error("Error fetching user's listings:", e);
    }
}

export async function getListing(id: string) {
    try {
        // const snap = await collection(db, "Listings").doc(id).get();
    } catch(e) {
        console.error("Error fetching listing:", e);
    }
}
