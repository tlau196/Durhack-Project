import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
