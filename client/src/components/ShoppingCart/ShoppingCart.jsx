import React from 'react';
import axios from 'axios';
import cancel from '../../assets/icons/cancel.png'
import './ShoppingCart.scss';
 
import { withAuthorization } from '../Session/Session';
import StripeCheckout from 'react-stripe-checkout';
 
class ShoppingCart extends React.Component{

  state = {
    cart: [],
  }

  componentDidMount(){
    axios.get('/shoppingcart')
    .then((res)=>{
      this.setState({
        cart: res.data
      })
    })
  }

  deleteItem (uniqueID) {
  axios.delete(`/shoppingcart/${uniqueID}`)
  .then(()=>{
    return axios.get('/shoppingcart')
  })
  
  .then((res)=>{
    this.setState({
      cart: this.state.cart.filter(item => item.uniqueID !== uniqueID)
    })
  })
  }

  render(){

     function handleToken(token){
       console.log(token)
    }

    let totalPrice = this.state.cart.reduce((totalPrice, cart) => totalPrice + cart.productPrice, 0).toFixed(2)

  return(
    <div className="shoppingcart">
      <h1 className="shoppingcart__header">Items in shopping cart</h1>
      <div className="shoppingcart__button">
        <StripeCheckout
        stripeKey= "pk_test_51IAzzVJ4p0cMsV1XATtlXYvVEGkc2BN62yaD9hRifq4Y37lYLVNi5JDwNZVzoQqjNZ8JDSc6w8NKx02RmzPn0oo500jXw2ewSa"
        token={handleToken}
        amount= {totalPrice * 100}
        name="Shopping Cart"
        className="shoppingcart__payment"/>
      </div>
      <div className="shoppingcart__block1">
        {this.state.cart.map((cart)=>
        {
        return(
          <div key={cart.uniqueID} className="shoppingcart__div">
            <img src ={cancel} alt="cancel" className="shoppingcart__div-cancel" onClick={()=>this.deleteItem(cart.uniqueID)}></img>
            <img src={cart.productImage} alt={cart.productName}  className="shoppingcart__div-image"></img>
            <h3 className="shoppingcart__div-title">{cart.productName}</h3>
            <p className="shoppingcart__div-price">${cart.productPrice}</p>
          </div>
        )
        })}
      </div>
      <p className="shoppingcart__div-totalprice">Total price: <span className="shoppingcart__div-totalprice--bold">${totalPrice}</span></p>
    </div>
  )}
}
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(ShoppingCart);