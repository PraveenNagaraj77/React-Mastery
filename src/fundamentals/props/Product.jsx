import React from 'react'

const Product = ({productName,price}) => {
  return (
    <div>
        <h1>Product</h1>
        <h3>{productName}</h3>
        <h3>{price}</h3>
    </div>
  )
}

export default Product