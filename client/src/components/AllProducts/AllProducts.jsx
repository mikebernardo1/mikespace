// import React from 'react';
// import './AllProducts.scss';
// import {Link} from 'react-router-dom';

// import shoppingcart from '../../assets/icons/shoppingcart.svg';

// export default function AllProducts(props) {
//     console.log(props)

//     return (
        
//         <div className="allproducts">
//             <div className="allproducts__card">
//                 <Link to={`/home/products/${props.id}`}>
//                 <div className="allproducts__card-div1">
//                     <img src= {props.image} alt={props.category} className="allproducts__card-image" name="productImage"></img>
//                 </div>
//                 </Link>
//                 <div className="allproducts__card-div2">
//                     <h5 className="allproducts__card-title" name="productName">{props.title}</h5>
//                     <p className="allproducts__card-price" name="productPrice">${props.price}</p>
//                 </div>
//                 <div className="allproducts__card-div3">
//                     <button onClick={()=>props.clickHandler()}>Buy Now</button>
//                 </div>  
//             </div>
//         </div>
//     )
// }

import React, { Component } from 'react'

export default class AllProducts extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
