import React from 'react';
import './AllProducts.scss';

import shoppingcart from '../../assets/icons/shoppingcart.svg'

export default function AllProducts(props) {
    return (
        <div className="allproducts">
            <div className="allproducts__card">
                <div className="allproducts__card-div1">
                    <img src= {props.image} alt={props.category} className="allproducts__card-image"></img>
                </div>
                <div className="allproducts__card-div2">
                    <h5 className="allproducts__card-title">{props.title}</h5>
                    <p className="allproducts__card-price">${props.price}</p>
                </div>
                <div className="allproducts__card-div3">
                    <img src={shoppingcart} alt="shoppingcart" className="allproducts__card-shoppingcart"></img>
                </div>  
            </div>
        </div>
    )
}
