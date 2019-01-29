import React, { Component } from 'react';
import './product.css';

class Product extends Component {
    render() {
        return (
            <div className='card'>
                <img className='img-card.top img-fluid' src={this.props.imgURL} alt='Product'></img>
                <div className='card-block'>
                    <h4 className='card-title'>{this.props.title}</h4>
                    <p className='card-text'>Price: ${this.props.price}</p>
                    <a href='http://google.com' className='btn btn-primary'>Add to Wishlist</a>
                </div>
            </div>
        );
    }
}

export default Product;