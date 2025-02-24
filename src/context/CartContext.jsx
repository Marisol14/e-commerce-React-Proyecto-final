// CartContext.jsx
import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    const existingItemIndex = cart.findIndex(prod => prod.id === item.id)
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingItemIndex].quantity += quantity
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...item, quantity }])
    }
  }

  const removeItem = (itemId) => {
    setCart(cart.filter(prod => prod.id !== itemId))
  }

  const clearCart = () => {
    setCart([])
  }

  const cartTotalItems = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0)
  }

  const cartTotalPrice = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clearCart,
      cartTotalItems,
      cartTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}
