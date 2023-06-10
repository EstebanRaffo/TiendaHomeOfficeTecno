import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView'
import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartContextProvider} from './context/cartContext'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/category/:categoryId' element={<HomePage/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartView/>} />
          <Route path='*' element={<h4>Error 404: Page not found</h4>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
