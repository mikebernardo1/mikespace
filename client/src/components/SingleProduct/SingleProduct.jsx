import './SingleProduct.scss';
import back from '../../assets/icons/back.svg';

import React from 'react';
import axios from 'axios';

export default class SingleProduct extends React.Component{


    state = {
        products: [],
        cart: [],
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

    clickHandler = (e) =>{
        const upload = {
            productID: e.target.productID.value,
            productName: e.target.productName.value,
            productImage: e.target.productImage.value,
            description: e.target.description.value,
            category: e.target.category.value,
            quantity:e.target.quantity.value,
        };
    
        axios
        .post('http://localhost:8080/home/shoppingcart', upload)
    }

    render(){

        return (
            <div className="singleproduct">
                <img src={back} alt ={back} onClick={this.handleBackButton} className="singleproduct__card-image"></img>
                <div className="singleproduct__card-div1">
                    <img src= {this.state.products.image} alt={this.state.products.category} className="singleproduct__card-image"></img>
                </div>
                <h3 className="singleproduct__card-title">{this.state.products.title}</h3>
                <h4 className="singleproduct__card-price">${this.state.products.price}</h4>
                <p className="singleproduct__description">{this.state.products.description}</p>
            </div>
        )
    }

}
