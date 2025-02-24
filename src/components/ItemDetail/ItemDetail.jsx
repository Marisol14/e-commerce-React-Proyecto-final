// ItemDetail.jsx
import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector'
import AddItemButton from '../AddItemButton/AddItemButton'
import './ItemDetail.css'

function ItemDetail({ product }) {
  const { addItem } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addItem(product, quantity)
  }

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.title} />
      <div className="item-detail-info">
        <h2>{product.title}</h2>
        <p className="item-detail-price">${product.price}</p>
        <p className="item-detail-description">{product.description}</p>

        <ItemQuantitySelector
          stock={product.stock}
          quantity={quantity}
          setQuantity={setQuantity}
        />

        <AddItemButton onAdd={handleAddToCart} />
      </div>
    </div>
  )
}

export default ItemDetail
