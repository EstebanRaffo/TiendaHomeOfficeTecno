// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, writeBatch, doc, query, orderBy, getDoc, getDocs, where } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import products from "../data/data";
import swal from 'sweetalert'


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId
// };

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


// ################################################### EXPORTAR DATOS #########################################################
export async function exportData() {
    const productsCollectionRef = collection(db, "products");
  
    for (let item of products) {
      item.index = item.id;
      delete item.id;
      const res = await addDoc(productsCollectionRef, item);
      console.log("Documento creado:", res.id);
    }
}

export async function exportDataWithBatch() {
    const batch = writeBatch(db);
  
    const collectionRef = collection(db, "products");
  
    for (let item of products) {
      item.index = item.id;
      delete item.id;
  
      const docRef = doc(collectionRef);
      batch.set(docRef, item);
    }
  
    await batch.commit();
    console.log("Items Exportados");
}

// ##############################################################################################################################


/* Promise disfrazada de function */
export async function getData() {
  const productsCollectionRef = collection(db, "products");

  const q = query(productsCollectionRef, orderBy("index"));
  const productsSnapshot = await getDocs(q);
  const arrayDocs = productsSnapshot.docs;

  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}
  
/* Promise disfrazada de function */
export async function getItemData(idUrl) {
  const docRef = doc(db, "products", idUrl);
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
}

export async function getDataByCategory(idCategory) {
  /* const q = query(collection(db, "cities"), where("capital", "==", true)); */
  const productsCollectionRef = collection(db, "products");
  const q = query(productsCollectionRef, where("category", "==", idCategory));
  const productsSnapshot = await getDocs(q);
  const arrayDocs = productsSnapshot.docs;
  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}
  
export async function createOrder(data) {
  const ordersCollectionRef = collection(db, "orders");

  const response = await addDoc(ordersCollectionRef, data);
  return response.id;

  /*  addDoc(ordersCollectionRef, data).then((respuesta) => {
    console.log(respuesta);
    console.log("Orden creada", respuesta.id);
  }); */
}
  
export async function createOrderWithStockUpdate(data) {
  const ordersCollectionRef = collection(db, "orders");
  const batch = writeBatch(db);
  const { items } = data;

  for (let itemInCart of items) {
    const refDoc = doc(db, "products", itemInCart.id);
    const docSnap = await getDoc(refDoc);

    const { stock } = docSnap.data();

    const stockToUpdate = stock - itemInCart.count;
    if (stockToUpdate < 0) {
      swal("Encontramos un problema", `No hay stock suficiente del producto: ${itemInCart.title}`, "error")
      throw new Error(`No hay stock suficiente del producto: ${itemInCart.title}`);
    } else {
      const docRef = doc(db, "products", itemInCart.id);
      batch.update(docRef, { stock: stockToUpdate });
    }
  }

  await batch.commit();
  const response = await addDoc(ordersCollectionRef, data);

  return response.id;
}