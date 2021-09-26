import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Billionare.css'

const billionare = (props) => {
    // console.log(props);
    const {img, name, position, age, country, netWorth} = props.billioniare;
    const cartIcon = <FontAwesomeIcon icon={ faShoppingCart} />
    return (
     <div className='billionar-details'>
         <div className="single-cart">
            <img src={img} alt="" />
            <h3>Name: {name} </h3>
            <h3>Position: {position} </h3>
            <h3>Age: {age} </h3>
            <h3>Country: {country} </h3>
            <h3>Networth: ${netWorth} </h3>
            <button onClick={()=> props.handleAddToCart(props.billioniare)} className="add-button"> {cartIcon}  Add To Cart</button>
        </div>
            
    </div>
    );
};

export default billionare;