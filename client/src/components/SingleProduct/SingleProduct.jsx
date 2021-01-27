import './SingleProduct.scss';
import back from '../../assets/icons/back.svg';
import cancel from '../../assets/icons/cancel.png'

import React from 'react';
import axios from 'axios';

import { withAuthorization } from '../Session/Session';

class SingleProduct extends React.Component{

  state = {
    products: [],
    comments: []
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
      console.log(res.data)
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
      </div>
      
      <div className="singleproduct__card-block">
        <div className="singleproduct__form-div1">
          <h3 className="singleproduct__form-div1-header">Comments</h3>
        </div>
        <div className="singleproduct__form-div2">
          <p className="singleproduct__form-div2-text">Join the Conversation</p>
        </div>
        <div className="singleproduct__form-div3">
          <form className="singleproduct__form-div3-formfield" onSubmit={this.submitHandler}>
            <div className="singleproduct__form-div3-formfield-div">
              <input type="text" placeholder="subject" name="subject"></input>
              <input type="text" placeholder="email" name="email"></input>
              <textarea placeholder="place comment here" className="singleproduct__form-div3-formfield-div-textarea" name="comments"></textarea>
              <button className="singleproduct__form-div3-formfield-div-button">Comment</button>
            </div>
          </form>
        </div>
        {this.state.comments.map((comment)=>{
        return(
        <div className="singleproduct__form-div4" key={comment.id}>
          <img src={cancel} alt ={cancel} onClick={this.onDelete} className="singleproduct__card-back"></img>
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