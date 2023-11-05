import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
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
export const storage = getStorage(firebaseApp);


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
    labels: string[],
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

export async function createNewListing(name: string, description: string, price: number, uid: string, image: File, labels: string) {
    try {
        
        const newListing = await addDoc(collection(db, "Listings"), {
            product_name: name,
            product_description: description,
            seller_ID: uid,
            labels: [labels],
            price: price
        });
        // upload image
        const imageRef = ref(storage, `Images/${newListing.id}.jpg`);
        await uploadBytes(imageRef, image);
    } catch(e) {
        console.error("Error creating new listing:", e);
    }
}

export interface Order {
    id?: string;
    created_at: string;
    fulfilled: boolean;
    listing_ID: string;
    user_ID: string;
}

export async function createOrder(listingID: string, uid: string) {
    try {
        const listing = await getListing(listingID);
        if (!listing) {
            throw new Error("Listing not found");
        }

        const order: Order = {
            created_at: new Date().toISOString(),
            fulfilled: false,
            listing_ID: listingID,
            user_ID: uid
        };

        await addDoc(collection(db, "Orders"), order);
    } catch(e) {
        console.error("Error making purchase:", e);
    }
}

export async function getUsersOrders(uid: string) {
    try {
        const q = query(collection(db, "Orders"), where("user_ID", "==", uid));
        const snapshot = await getDocs(q);
        const orders: Order[] = [];
        snapshot.forEach((doc) => {
            const newOrder = doc.data() as Order;
            newOrder.id = doc.id;
            orders.push(newOrder);
        });

        return orders;
    } catch(e) {
        console.error("Error fetching user's orders:", e);
    }
}

export interface Account {
    balance: number;
}

export async function getAccountData(uid: string) {
    try {
        const docRef = doc(db, "Accounts", uid);
        const docSnap = await getDoc(docRef);
        const account = docSnap.data() as Account;
        return account;
    } catch(e) {
        console.error("Error fetching account data:", e);
    }
}

export async function createAccountData(uid: string) {
    try {
        const account = {
            balance: 0,
        };

        await setDoc(doc(db, "Accounts", uid), account);
    } catch(e) {
        console.error("Error creating account:", e);
    }
}

export async function increaseBalance(uid: string, increase: number) {
    try {
        const account = await getAccountData(uid);
        if (account) {
            account.balance += increase;
            await setDoc(doc(db, "Accounts", uid), account);
        }

    } catch(e) {
        console.error("Error updating balance:", e);
    }
}
