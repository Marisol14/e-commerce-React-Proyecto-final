// AddItemButton.jsx
import React from 'react'
import './AddItemButton.css'

function AddItemButton({ onAdd }) {
  return (
    <button className="add-item-button" onClick={onAdd}>
      Agregar al Carrito
    </button>
  )
}

export default AddItemButton
