// ItemQuantitySelector.jsx
import React from 'react'
import './ItemQuantitySelector.css'

function ItemQuantitySelector({ stock, quantity, setQuantity }) {
  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="quantity-selector">
      <button onClick={handleDecrement} disabled={quantity <= 1}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement} disabled={quantity >= stock}>+</button>
      <p>Stock disponible: {stock}</p>
    </div>
  )
}

export default ItemQuantitySelector
