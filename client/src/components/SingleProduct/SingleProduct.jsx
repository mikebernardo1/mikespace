import './SingleProduct.scss';
import back from '../../assets/icons/back.svg';

import React from 'react';
import axios from 'axios';

import { withAuthorization } from '../Session/Session';

class SingleProduct extends React.Component{

  state = {
    products: [],
    }
    
  componentDidMount(){
    axios.get(`https://fakestoreapi.com/products/${this.props.match.params.id}`)
    .then((res)=>{
      this.setState({
        products: res.data
      })
    })
  }

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
    </div>
    )
  }
} 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(SingleProduct);