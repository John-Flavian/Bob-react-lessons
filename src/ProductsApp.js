import React from 'react'
import ProductsData from './Components/ProductsData'
import Product from './Components/Product'
import './App.css'

function ProductsApp() {

const ProductsComponents = ProductsData.map((item) => {
    return (
<Product product={item} key={item.id} />

            )})

console.log(ProductsComponents)

    return ( <div className="products-container">        
        {ProductsComponents}
            </div>
    )
}

export default ProductsApp