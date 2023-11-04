const firebase = require('firebase-admin/app');
const firestore = require('firebase-admin/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBXOjJy_EpIafw6mntPfHjMq9iKPknx_4g",
    authDomain: "durhack-project-45a1b.firebaseapp.com",
    projectId: "durhack-project-45a1b",
    storageBucket: "durhack-project-45a1b.appspot.com",
    messagingSenderId: "912269921938",
    appId: "1:912269921938:web:017b70dda6b2c8eb06e04b",
    measurementId: "G-MWCQ2PH5CM"
}

const express = require('express');
const expressApp = express();
expressApp.use(express.json());

const path = require('path');

const app = firebase.initializeApp(firebaseConfig);

//declaring port and hostname

hostname = '127.0.0.1'
port = 5000

expressApp.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}.`);
    console.log(firestore.getFirestore(app))
});


expressApp.get("/test", (req, res) => {
    res.send("test");
});
