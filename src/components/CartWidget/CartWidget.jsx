// CartWidget.jsx
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './CartWidget.css'

function CartWidget() {
  const { cartTotalItems } = useContext(CartContext)

  return (
    <div className="cart-widget">
      {}
      <span className="material-icons">shopping_cart</span>

      {cartTotalItems() > 0 && (
        <span className="cart-count">{cartTotalItems()}</span>
      )}
    </div>
  )
}

export default CartWidget
