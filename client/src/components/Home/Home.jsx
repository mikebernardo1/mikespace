import React from 'react';
import axios from 'axios';
import AllProducts from '../AllProducts/AllProducts'
 
import { withAuthorization } from '../Session/Session';

import './Home.scss'
 
class HomePage extends React.Component{

  state={
    products:[]
  }

componentDidMount(){
  axios.get('https://fakestoreapi.com/products')
  .then((res)=>{
    this.setState({
      products: res.data
    })
  })
}

render(){
  return(
  <div className="allproducts">
    {this.state.products.map((product)=>{
      return(
        <AllProducts
        key={product.id}
        category={product.category}
        image={product.image}
        price={product.price}
        title={product.title}
        />
      )
    })}
  </div>
  )}
}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);
