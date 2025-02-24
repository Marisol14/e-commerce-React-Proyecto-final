// Checkout.jsx
import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './Checkout.css'

function Checkout() {
  const { cart, cartTotalPrice, clearCart } = useContext(CartContext)
  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [orderId, setOrderId] = useState(null)

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Normalmente enviarías la orden a Firebase o tu backend
    const generatedOrderId = 'ABC123XYZ'
    setOrderId(generatedOrderId)
    clearCart()
  }

  if (orderId) {
    return (
      <div className="checkout-success">
        <h2>¡Compra Exitosa!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      <div className="checkout-content">
        <div className="checkout-form">
          <h3>Completa tus datos</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={buyer.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={buyer.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Teléfono:</label>
              <input
                type="tel"
                name="phone"
                value={buyer.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Confirmar Compra</button>
          </form>
        </div>

        <div className="checkout-brief">
          <h3>Resumen de la compra</h3>
          {cart.map(item => (
            <div key={item.id} className="checkout-item">
              <p>{item.title} x {item.quantity}</p>
              <p>${item.price * item.quantity}</p>
            </div>
          ))}
          <hr />
          <h4>Total: ${cartTotalPrice()}</h4>
        </div>
      </div>
    </div>
  )
}

export default Checkout
