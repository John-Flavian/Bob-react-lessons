import React from 'react'
import ProductsData from './Components/ProductsData'
import Product from './Components/Product'
import './App.css'

function ProductsApp() {

const ProductsComponents = ProductsData.map((item) => {
    return (
<Product name={item.name} description={item.description} price={item.price} key={item.id} />

            )})

console.log(ProductsComponents)
    return ( <div className="products-container">        
        {ProductsComponents}
            </div>
    )
}

export default ProductsApp