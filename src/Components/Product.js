import React from 'react'

function Product(props) {
    return (
        <div className="product">
            <h2>{props.name}</h2>
            <p> <b>Price:</b> ${props.price} </p>
            <p> <b>About:</b> {props.description} </p>
        </div>
    )
}

export default Product