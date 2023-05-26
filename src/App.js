import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/category/:categoryId' element={<HomePage/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        {/* <Route path='/cart' element={} /> */}
        <Route path='*' element={<h4>Error 404: Page not found</h4>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
