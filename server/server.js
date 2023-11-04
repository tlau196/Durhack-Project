import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, getDocs , collection} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import express from 'express';
import path from 'path';
//const firestore = require('firebase-admin/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBXOjJy_EpIafw6mntPfHjMq9iKPknx_4g",
    authDomain: "durhack-project-45a1b.firebaseapp.com",
    projectId: "durhack-project-45a1b",
    storageBucket: "durhack-project-45a1b.appspot.com",
    messagingSenderId: "912269921938",
    appId: "1:912269921938:web:017b70dda6b2c8eb06e04b",
    measurementId: "G-MWCQ2PH5CM"
}

const expressApp = express();
expressApp.use(express.json());

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


//declaring port and hostname

let hostname = '127.0.0.1'
let port = 5000

function to_hex(num){
    return num.toString(16);
};

expressApp.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}.`);
});


expressApp.get("/prod/all/:ID", async (req, res) => {
    const docRef = doc(db, "Listings", req.params.ID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        res.send(docSnap.data());
    } else {
        res.status(404);
    };
});

expressApp.get("/prod/allprod", async (req, res) => {
    const prodRef = collection(db, 'Listings');
    const docsSnap = await getDocs(prodRef);
    let message = []
    docsSnap.forEach(doc => {
       message.push((doc.id, doc.data()));
    });
    res.send(message);
});

expressApp.get("/prod/image/:ID", async (req, res) => {
    const docRef = doc(db, "Listings", req.params.ID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        res.send("/../images/" + req.params.ID + ".jpg")  
    } else {
        res.status(404);
    };
    
})
