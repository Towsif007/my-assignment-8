import React from 'react';
import './Billionare.css'

const billionare = (props) => {
    console.log(props.billioniare);
    const {img, name, position, age, country, netWorth} = props.billioniare
    return (
        <div className='billionar-details'>
            <div className="single-cart">
            <img src={img} alt="" />
            <h3>Name: {name} </h3>
            <h3>Position: {position} </h3>
            <h3>Age: {age} </h3>
            <h3>Country: {country} </h3>
            <h3>Networth: ${netWorth} </h3>

            </div>
            
        </div>
    );
};

export default billionare;