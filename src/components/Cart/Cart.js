import React, { useEffect, useState } from 'react';
import Billionare from '../Billionare/Billionare';

import './Cart.css'

const Cart = () => {
    const [billioniares, setBillioniares] = useState([])

    useEffect( ()=> {
        fetch('./billioniare.json')
        .then(res => res.json())
        .then(data => setBillioniares(data))
    } ,[])

    return (
        <div className="cart-container">
            <div className="billionare-container">                
            {
                billioniares.map(billioniare => <Billionare 
                key={billioniare.id}
                billioniare={billioniare}>
                </Billionare>)
            }                
            </div>
            <div className="billionaiares-place">
                <h2>Billionaires Added: </h2>
                <h2>Total Networth: $</h2>
            </div>
        </div>
    );
};

export default Cart;



