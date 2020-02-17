import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './app';

function buy() {

    ReactDOM.render(<App />, document.getElementById('root'));
}

class Product extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to the Product page</h1>
                <p>Android - $199</p>
                <button onClick={buy}>Buy</button>
            </div>
        );
    }
}

export default Product;