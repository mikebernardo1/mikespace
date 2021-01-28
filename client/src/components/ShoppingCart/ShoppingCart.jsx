import React from 'react';
import axios from 'axios';
// import cancel from '../../assets/icons/cancel.png'
import './ShoppingCart.scss';
 
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

// onDelete(id){
//   axios
//   .delete(`http://localhost:8080/shoppingcart/${id}`)
//   .then((res)=>{
//     this.setState(previousState=>{
//       return{
//         cart: previousState.cart.filter(cart => cart.id !== id)
//       }
//     })
//   })
// }

render(){
  return(
    <div className="shoppingcart">
      <h1 className="shoppingcart__header">Items in shopping cart</h1>
      <div className="shoppingcart__block">
      {this.state.cart.map((cart)=>
      {
      return(
        <div key={cart.id} className="shoppingcart__div">
          {/* <img src ={cancel} alt="cancel" onClick={this.onDelete} className="shoppingcart__div-cancel"></img> */}
          <img src={cart.productImage} alt={cart.productName}  className="shoppingcart__div-image"></img>
          <h3 className="shoppingcart__div-title">{cart.productName}</h3>
          <p className="shoppingcart__div-price">${cart.productPrice}</p>
          {/* <p className="shoppingcart__div-text">Total in cart: {cart.quantity}</p> */}
        </div>
      )
      })}
      </div>
      <p className="shoppingcart__div-totalprice">Total price: <span className="shoppingcart__div-totalprice--bold">${this.state.cart.reduce((totalPrice, cart) => totalPrice + cart.productPrice, 0).toFixed(2)}</span></p>
    </div>
  )}
}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(ShoppingCart);