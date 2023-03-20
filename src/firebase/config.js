import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3k-TQxg6FWOTGYFE8pzguwmkvZAf1Zx8",
  authDomain: "mini-blog-d887b.firebaseapp.com",
  projectId: "mini-blog-d887b",
  storageBucket: "mini-blog-d887b.appspot.com",
  messagingSenderId: "690890946606",
  appId: "1:690890946606:web:3888775dc7c217d92c47bf",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
