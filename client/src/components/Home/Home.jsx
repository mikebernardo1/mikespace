import React from 'react';
import axios from 'axios';
import '../AllProducts/AllProducts.scss';
import {Link} from 'react-router-dom';
 
import { withAuthorization } from '../Session/Session';

import './Home.scss'
 
class HomePage extends React.Component{

  state = {
    products: [],
  }

componentDidMount(){
  axios.get('https://fakestoreapi.com/products')
  .then((res)=>{
    this.setState({
      products: res.data
    })
  })
}

submitHandler = (e) =>{
  e.preventDefault();
  const upload = {
      productName: this.productName,
      productImage: this.productImage,
      productPrice: this.productPrice,
      description: this.description,
      category: this.category.value,
      quantity:1
  };

  axios
  .post('http://localhost:8080/shoppingcart', upload)
}

render(){
  return(
  <form className="allproducts"name="id" id="form" onSubmit={this.submitHandler}>
    {this.state.products.map((product)=>{
      return(
        <div className="allproducts" key={product.id}>
            <div className="allproducts__card">
                <Link to={`/home/products/${product.id}`}>
                <div className="allproducts__card-div1">
                    <img src= {product.image} alt={product.category} className="allproducts__card-image" name="productImage"></img>
                </div>
                </Link>
                <div className="allproducts__card-div2">
                    <h5 className="allproducts__card-title" name="productName">{product.title} </h5>
                    <p className="allproducts__card-price" name="productPrice">${product.price}</p>
                </div>
                <div className="allproducts__card-div3">
                    <button type="submit" form="form">Buy Now</button>
                </div>  
            </div>
        </div>
      )
    })}
  </form>
  )}
}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);