import './SingleProduct.scss';
import back from '../../assets/icons/back.svg';
import cart from '../../assets/icons/shoppingcart.svg';

import React from 'react';
import axios from 'axios';

import { withAuthorization } from '../Session/Session';

class SingleProduct extends React.Component{

  state = {
    products: [],
    comments: [],
    cart:[]
    }
    
  componentDidMount(){
    axios.get(`https://fakestoreapi.com/products/${this.props.match.params.id}`)
    .then((res)=>{
      this.setState({
        products: res.data
      })
    })
    axios.get('http://localhost:8080/comments')
    .then((res)=>{
      console.log(res.data)
      this.setState({
        comments: res.data
      })
    })
  }

submitHandler = (e) =>{
    e.preventDefault();
  
    const upload = {
      subject: e.target.subject.value,
      email: e.target.email.value,
      comments: e.target.comments.value
  };
  
    axios
    .post('http://localhost:8080/comments', upload)

    axios
    .get('http://localhost:8080/comments')
    .then((res)=>{
      this.setState({
        comments: res.data
      })
    })

  }

onDelete = (id) => {
    axios.delete(`http://localhost:8080/comments/${this.id}`)
    .then((res=>{
      this.setState({
        cart: this.state.comments.filter(comment => comment.id !== id)
        })
      })
    )}
    
handleBackButton = () => {
    this.props.history.goBack();
  }

clickHandler(){

    const upload = {
      id: this.state.products.id,
      productName: this.state.products.title,
      productImage: this.state.products.image,
      productPrice: this.state.products.price,
      description: this.state.products.description,
      category: this.state.products.category,
      quantity:1
  };
  
    this.setState({
      cart:upload
    })
  
    axios
    .post('http://localhost:8080/shoppingcart', upload)
  }

  render(){

  return (
    <div className="singleproduct">
      <div className="singleproduct__card-block">
        <img src={back} alt ={back} onClick={this.handleBackButton} className="singleproduct__card-back"></img>
        <div className="singleproduct__card-block-div1">
          <img src= {this.state.products.image} alt={this.state.products.category} className="singleproduct__card-block-div1-image"></img>
        </div>
        <div className="singleproduct__card-block-div2">
          <h3 className="singleproduct__card-block-div2-title">{this.state.products.title}</h3>
          <h4 className="singleproduct__card-block-div2-price">${this.state.products.price}</h4>
          <p className="singleproduct__card-block-div2-description">{this.state.products.description}</p>
        </div>
        <img src= {cart} onClick={this.clickHandler} alt="cart"  className="singleproduct__card-block-cart"></img>
      </div>
      
      <div className="singleproduct__card-block">
        <div className="singleproduct__form-div1">
          <h3 className="singleproduct__form-div1-header">Comments</h3>
        </div>
        <div className="singleproduct__form-div2">
          <p className="singleproduct__form-div2-text">Write your review</p>
        </div>
        <form className="singleproduct__form-formfield" onSubmit={this.submitHandler}>
          <div className="singleproduct__form-formfield-div">
            <input type="text" placeholder="subject" name="subject" className="singleproduct__form-formfield-div-input"></input>
            <input type="text" placeholder="email" name="email" className="singleproduct__form-formfield-div-input"></input>
            <textarea placeholder="place comment here" className="singleproduct__form-formfield-div-textarea" name="comments"></textarea>
          </div>
          <button className="singleproduct__form-formfield-button">Comment</button>
        </form>
        {this.state.comments.map((comment)=>{
        return(
        <div className="singleproduct__form-div4" key={comment.id}>
          <div className="singleproduct__form-div4-comments">
            <h3 className="singleproduct__form-div4-comments-name">{comment.subject}</h3>
            <p className="singleproduct__form-div4-comments-text">{comment.email}</p>
          </div>
            <p className="singleproduct__form-div4-comments-text">{comment.comments}</p>
        </div>
        )
        })}
      </div>
    </div>
    )
  }
} 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(SingleProduct);