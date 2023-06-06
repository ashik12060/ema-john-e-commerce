import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
const Shop = () => {

    //decalring states
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            }
            );
    }, [])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);

                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }

            }
            setCart(storedCart);
        }

    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key);

    }
    const hanldeSearch = event =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product =>product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
        }
    return (

        <>
            <div className="search-container">
                    <input 
                        type="text" 
                        placeholder='search product' 
                        onChange={hanldeSearch}

                    />
            </div>
            <div className="shop-container">

                <div className="cart-container">

                    {
                        displayProducts.map(product =>
                            <Product
                                key={product.key}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                    }
                </div>

                <div className="order-container">
                    <h2>Order Summary</h2>
                    <Cart cart={cart}>
                    <Link to={'/review'}>
                <button className="btn-primary">Review Order</button>
            </Link>

                    </Cart>
                </div>

            </div>
        </>
    );
};

export default Shop; <h1>This is shop</h1>