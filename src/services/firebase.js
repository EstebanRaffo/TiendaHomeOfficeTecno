// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import products from "../data/data";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4oMrRB8ah7Un3xKMYXXXHO_PW-pDrF4E",
  authDomain: "tienda-tecnohomehoffice.firebaseapp.com",
  projectId: "tienda-tecnohomehoffice",
  storageBucket: "tienda-tecnohomehoffice.appspot.com",
  messagingSenderId: "1005442903147",
  appId: "1:1005442903147:web:a833525185b779ffe0d52e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db)

export async function exportData() {
    const productsCollectionRef = collection(db, "products");
  
    for (let item of products) {
      item.index = item.id;
      delete item.id;
      const res = await addDoc(productsCollectionRef, item);
      console.log("Documento creado:", res.id);
    }
  }