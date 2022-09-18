import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';
const Product = (props) => {
    const { img, name, price, seller, stock,star } = props.product;
   
    const element = <FontAwesomeIcon icon={faShoppingCart} />



    return (
        <div className="product">
            <div>
                <img className="img-container" src={img} alt="" />
            </div>
            <div>
                <h2 className="product-name">Name: {name}</h2>
                <p><small>by: {seller}</small></p>
                <h3>Price: ${price}</h3>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                  initialRating={star}

                    emptySymbol="far fa-star fa-2x icon-color"
                    fullSymbol="fas fa-star fa-2x icon-color"
                ></Rating>
                <br /> <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}

                    className="btn-primary">{element} add to cart</button>

            </div>
        </div>
    );
};

export default Product;