import React, { Component } from 'react';
import ProductCard from './productCard';
import Total from './total';

export default class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            total: 0,
            products: [],
            error: null
        }
    }

    getProductData() {
        fetch("https://5c5d58dbef282f0014c3d901.mockapi.io/products")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              products: result
            })
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              error
            });
          }
        )
    }

    componentDidMount() {
        // Sets current initialised components products array with the API endpoint
        this.getProductData();
    }

    calculateTotal(price) {
        this.setState({total: this.state.total + price});
    }

    render() {
        return (
            <div className="container2">
                <head>
                    <h1>Welcome to the Product page</h1>
                </head>
                <body>
                    {this.state.products.map(product => <ProductCard price={product.price}
                        handleTotal={this.calculateTotal.bind(this)}/>)}
                </body>
                <footer class="fixed-bottom">
                    <Total total={this.state.total}
                        handleTotal={this.calculateTotal.bind(this)}/>
                </footer>
            </div>
        );
    }
}