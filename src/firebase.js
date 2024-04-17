
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCIbSwL7Hky1Azgg9gmTJpoFlOPxRpQkU8",
    authDomain: "linkedin-clone-704f9.firebaseapp.com",
    projectId: "linkedin-clone-704f9",
    storageBucket: "linkedin-clone-704f9.appspot.com",
    messagingSenderId: "477148487400",
    appId: "1:477148487400:web:904e30b916c484065bf35d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);