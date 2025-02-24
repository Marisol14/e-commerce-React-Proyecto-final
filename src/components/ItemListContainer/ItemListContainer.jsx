// ItemListContainer.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../data/products'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

function ItemListContainer() {
  const [items, setItems] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products)
      }, 500)
    })

    getProducts
      .then((res) => {
        if (categoryId) {
          setItems(res.filter((prod) => prod.category === categoryId))
        } else {
          setItems(res)
        }
      })
      .catch((err) => console.log(err))
  }, [categoryId])

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Bienvenido a Bamboo Store'}</h2>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer
