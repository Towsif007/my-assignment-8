import React, { useEffect, useState } from 'react';
import Billionare from '../Billionare/Billionare';
import Total from '../Total/Total';

import './Cart.css'

const Cart = () => {
    const [billioniares, setBillioniares] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( ()=> {
        fetch('./billioniare.json')
        .then(res => res.json())
        .then(data => setBillioniares(data))
    } ,[])


    // Handle Add Cart

    const handleAddToCart = (billioniare) => {
        const newCart = [...cart,billioniare];
        setCart(newCart)
    }


    // Showing All Type of Data 
    return (
        <div className="cart-container">
            <div className="billionare-container">                
            {
                billioniares.map(billioniare => <Billionare 
                key={billioniare.id}
                billioniare={billioniare}
                handleAddToCart={handleAddToCart}
                >
                </Billionare>)
            }                
            </div>
        
            <div className="added-place">
                <Total cart={cart}></Total>
            </div>
        </div>
    );
};

export default Cart;



