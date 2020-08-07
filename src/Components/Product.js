import React from 'react'

function Product(props) {
return (
    <div className="product">
        <h2>{props.product.name}</h2>
        <p>
            <b>Price:</b>
{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD"} )} </p>
        <p> <b>About:</b> {props.product.description} </p>
    </div>
    )
}

export default Product