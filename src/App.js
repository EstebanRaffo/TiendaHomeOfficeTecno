import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView'
import BuyOrder from './components/BuyOrder/BuyOrder'
import Checkout from './components/Checkout/Checkout';
import {CartContextProvider} from './context/cartContext'


export default function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/category/:categoryId' element={<HomePage/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartView/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/order-confirmation/:orderId' element={<BuyOrder/>}></Route>
          <Route path='*' element={<h4>Error 404: Page not found</h4>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
}