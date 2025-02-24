// ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../data/products'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((p) => p.id === parseInt(id)))
      }, 500)
    })

    getProduct
      .then((res) => setProduct(res))
      .catch((err) => console.log(err))
  }, [id])

  if (!product) {
    return <p style={{ textAlign: 'center' }}>Cargando producto...</p>
  }

  return (
    <div className="item-detail-container">
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
