import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCYkr0F71gCFIbS5v8VH2_dnvUHjWdyPmQ",
    authDomain: "blog-app-f419e.firebaseapp.com",
    projectId: "blog-app-f419e",
    storageBucket: "blog-app-f419e.appspot.com",
    messagingSenderId: "409258178812",
    appId: "1:409258178812:web:32f81ed4c9c551da75bf79"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)