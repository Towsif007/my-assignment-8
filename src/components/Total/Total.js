import React from 'react';
import "./Total.css"

// Total Calculation

const Total = (props) => {
    const {cart} = props;
    let total = 0;
    for(const cardPrice of cart) {
        total = total + cardPrice.netWorth
    }

    // length, total, name showing
    return (
        <div>
            <h2>Person Added: {props.cart.length} </h2>
                <h2>Total Networth: ${total} </h2>
                <ul className='billioniare-name'>
                   {
                       cart.map( billioniare=> <li>{billioniare.name}</li>)
                   }
               </ul>
        </div>
    );
};

export default Total;