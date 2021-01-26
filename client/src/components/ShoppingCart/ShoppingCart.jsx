import React from 'react';
import axios from 'axios';
 
import { withAuthorization } from '../Session/Session';
 
class ShoppingCart extends React.Component{

  state = {
    cart: [],
  }

componentDidMount(){
  axios.get('http://localhost:8080/shoppingcart')
  .then((res)=>{
    console.log(res)
    this.setState({
      cart: res.data
    })
  })
}

render(){
  return(
    <div>
      <h1>Items in shopping cart</h1>
      {this.state.cart.map((cart)=>{
      return(
        <div key={cart.id}>
          <h2>{cart.id}</h2>
        </div>
        
      )
      })}
    </div>
  )}
}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(ShoppingCart);