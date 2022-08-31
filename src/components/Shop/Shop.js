import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {

    //decalring states
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);

    }
    return (
        <div className="shop-container">

            <div className="cart-container">
                <h2>This is product:{products.length}</h2>
                {
                    products.map(product =>
                        <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>

            <div className="order-container">
                <h2>Order Summary</h2>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop; <h1>This is shop</h1>