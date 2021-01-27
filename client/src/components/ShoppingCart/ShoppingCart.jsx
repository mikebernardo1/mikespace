import React from 'react';
import axios from 'axios';
import cancel from '../../assets/icons/cancel.png'
 
import { withAuthorization } from '../Session/Session';
 
class ShoppingCart extends React.Component{

  state = {
    cart: [],
  }

componentDidMount(){
  axios.get('http://localhost:8080/shoppingcart')
  .then((res)=>{
    this.setState({
      cart: res.data
    })
  })
}

onDelete(productID){
  axios
  .delete(`http://localhost:8080/shoppingcart/${productID}`)
  .then((res)=>{
    this.setState(previousState=>{
      return{
        cart: previousState.cart.filter(cart => cart.productID !== productID)
      }
    })
  })
}

render(){
  return(
    <div>
      <h1>Items in shopping cart</h1>
      {this.state.cart.map((cart)=>{
      return(
        <div key={cart.productID}>
          <img src ={cancel} alt="cancel" onClick={this.onDelete.bind(this, cart)}></img>
          <img src={cart.productImage} alt={cart.productName}></img>
          <h2>{cart.productName}</h2>
          <p>${cart.productPrice}</p>
          <p>Total in cart: {cart.quantity}</p>
        </div>
      )
      })}
      <p>Total price = ${this.state.cart.reduce((totalPrice, cart) => totalPrice + cart.productPrice, 0).toFixed(2)}
</p>
    </div>
  )}
}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(ShoppingCart);