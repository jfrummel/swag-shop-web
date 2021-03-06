import React, { Component } from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {
    render() {
        return (
            <li className='list-group-item'>
                <a href='#' className="btn btn-outline-danger"><span>X</span></a>
                <p className='wishProduct'>{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li>
        );
    }
}

export default ProductCondensed;