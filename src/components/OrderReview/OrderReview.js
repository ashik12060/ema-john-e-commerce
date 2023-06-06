import React from 'react';
import useProducts from '../../hook/useProduct';
import useCart from '../../hook/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart,setCart] = useCart(products);

    const navigate  = useNavigate();

    const handlePlaceOrder = () => {
        navigate('/placeorder')

    }
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    return (

        <div className="shop-container">
           
            <div className="product-container">
            {
                cart.map(product=>
                <ReviewItem 
                key={product.key}
                product={product}
                handleRemove = {handleRemove}
                >
                

                </ReviewItem>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className='btn-primary'>Place Order </button>
                </Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;