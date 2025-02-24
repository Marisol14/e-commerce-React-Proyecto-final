// Cart.jsx
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

function Cart() {
  const { cart, removeItem, clearCart, cartTotalPrice } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <p>Cantidad: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <h3>Total: ${cartTotalPrice()}</h3>
      <div className="cart-actions">
        <button onClick={clearCart}>Vaciar Carrito</button>
        <Link to="/checkout" className="checkout-link">Finalizar Compra</Link>
      </div>
    </div>
  )
}

export default Cart
