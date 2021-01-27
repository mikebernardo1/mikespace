import React from 'react';
import axios from 'axios';
import '../Home/Home.scss';
import {Link} from 'react-router-dom';
 
import { withAuthorization } from '../Session/Session';

import './Home.scss'
 
class HomePage extends React.Component{

  state = {
    products: [],
    cart:[],
  }

componentDidMount(){
  axios.get('https://fakestoreapi.com/products/')
  .then((res)=>{
    this.setState({
      products: res.data
    })
  })
}

clickHandler(product){

  const upload = {
    productID: product.id,
    productName: product.title,
    productImage: product.image,
    productPrice: product.price,
    description: product.description,
    category: product.category,
    quantity:1
};

  this.setState({
    cart:upload
  })

  axios
  .post('http://localhost:8080/shoppingcart', upload)
}

render(){
  return(
  <div className="home">
    <h1 className="home__header">Welcome to MikeSpace</h1>
    <form className="home__form" name="productID" id="form">
    {this.state.products.map((product)=>{
      return(
        <div className="home__block" key={product.id}>
          <div className="home__card">
            <Link to={`/home/${product.id}`}>
              <div className="home__card-div1">
                  <img src= {product.image} alt={product.category} className="home__card-image" name="productImage"></img>
              </div>
            </Link>
            <div className="home__card-div2">
              <h3 className="home__card-title" name="productName">{product.title} </h3>
              <p className="home__card-price" name="productPrice">${(product.price).toFixed(2)}</p>
            </div>
            <div className="home__card-div3">
              {/* <button className="home__card-div3-button" type="submit" form="form">Buy Now</button> */}
              <h1 onClick={this.clickHandler.bind(this, product)}>Buy</h1>
            </div>  
          </div>
        </div>
      )
    })}
    </form>
  </div>
  )}
}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);