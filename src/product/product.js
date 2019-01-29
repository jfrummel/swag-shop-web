import React, { Component } from 'react';
import './product.css';

class Product extends Component {
    render() {
        return (
            <div className='card'>
                <img className='img-card.top img-fluid lbri' src="http://2.bp.blogspot.com/-y0G4yMBig8M/VW-1PJVDpSI/AAAAAAAAHH0/6SWJJLpeo4Q/s1600/Freesia%2BPear%2Bbody%2Bbutter.jpg" alt='Product'></img>
                <div className='card-block'>
                    <h4 className='card-title'></h4>
                    <p className='card-text'>Price: $</p>
                    <a href='#' className='btn btn-primary'>Add to Wishlist</a>
                </div>
            </div>
        );
    }
}

export default Product;