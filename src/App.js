import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './product/product.js'
import HttpService from './services/http-service';

const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {products:[]};


    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);
    
    this.loadData();

  };

  loadData = () => {
    let self = this;
    http.getProducts().then(data => {
      self.setState({products: data})
    }, err => {
    });
  };

  productList = () => {
    let list = this.state.products.map((product) => 
      <div className='col-sm-4' key={product._id}> 
        <Product title={product.title} price={product.price} imgURL={product.imgURL} />
      </div>
    );
     return (list);
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <div className='container App-main'>
          <div className='row pt-3 pb-3'>
            {this.productList()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
