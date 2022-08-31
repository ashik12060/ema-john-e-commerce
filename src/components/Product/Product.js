import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
const Product = (props) => {
    const { img, name, price, seller, stock } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />



    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className="product-name">Name: {name}</h2>
                <p><small>by: {seller}</small></p>
                <h3>Price: ${price}</h3>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}

                    className="btn-primary">{element} add to cart</button>

            </div>
        </div>
    );
};

export default Product;