// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Context
import CartContextProvider from './context/CartContext'

// Components
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <CartContextProvider>
      {}
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="*"
            element={<h2 style={{ textAlign: 'center' }}>404 - Página no encontrada</h2>}
          />
        </Routes>
      </main>

      <Footer />
    </CartContextProvider>
  )
}

export default App
