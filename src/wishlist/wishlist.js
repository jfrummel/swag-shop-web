import React, { Component } from 'react';
import './wishlist.css';
import ProductCondensed from './../product-condensed/product-condensed';
import DataService from '../services/data-service';
import NotificationService from '../services/notification-service';

class WishList extends Component {
    constructor(props) {
        super(props);
        this.state = {wishList: [
            {
                title:"Beer",
                price:12.99,
                _id:"4587nj"
            },
            {
                title:"Beer",
                price:12.99,
                _id:"4587po"
            },
            {
                title:"Beer",
                price:12.99,
                _id:"4589nj"
            }
        ]};

        // Bind
        this.createWishList = this.createWishList.bind(this);
    };

    createWishList = () => {
        const list = this.state.wishList.map((product) => 
            <ProductCondensed product={product} key={product._id} />
        );
        return (list);
    }

    render() {
        return (
            <div className='card wishCard'>
                <div className='card-block wishBlock'>
                    <h4 className='card-title'>Wish List</h4>
                    <ul className='list-group list-wish'>
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default WishList;