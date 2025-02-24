// Item.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

function Item({ product }) {
  return (
    <div className="item-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="item-price">${product.price}</p>
      <Link to={`/item/${product.id}`} className="item-detail-btn">
        Ver Detalle
      </Link>
    </div>
  )
}

export default Item
