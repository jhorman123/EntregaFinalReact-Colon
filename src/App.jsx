import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error from './components/Error.jsx'
import Contactanos from './components/Contactanos.jsx'
import Nosotros from './components/Nosotros.jsx'
import Home from './components/Home.jsx'
import { CartProvider } from '../src/Context/CartContext.jsx'
import Carrito from './components/Carrito.jsx'
import Checkout from './components/Checkout.jsx'


function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/productos' element={<ItemListContainer />}/>
          <Route path='/productos/:categoria' element={<ItemListContainer />}/>
          <Route path='/contactanos' element={<Contactanos />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/carrito' element={<Carrito />}/>
          <Route path='/checkout' element={<Checkout />}/>
          
          <Route path='*' element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    </> 
  )
}

export default App
