import React, { Component } from 'react';
import axios from 'axios';
import './SingleProduct.scss';

export default class SingleProduct extends Component {

    state={
        id: this.props.match.params.id,
        image:'',
        category:'',
        title:'',
        price:'',
        description:'',
    }

    componentDidMount(){
        axios.get(`https://fakestoreapi.com/products/${this.state.id}`)
        console.log(this.props.params.id)
        .then((res)=>{
          this.setState({
            image:res.data.image,
            category:res.data.category,
            title:res.data.title,
            price:res.data.price,
            description:res.data.description,
          })
        })
      }
    
    render() {
        return (
            <div>
                <div className="singleproduct__card-div1">
                <img src= {this.state.image} alt={this.state.category} className="singleproduct__card-image"></img>
            </div>
            <h3 className="singleproduct__card-title">{this.state.title}</h3>
            <h4 className="singleproduct__card-price">${this.state.price}</h4>
            <p className="singleproduct__description">{this.state.description}</p>
            </div>
        )
    }
}
