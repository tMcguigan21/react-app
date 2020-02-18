import React, { Component } from 'react';

export default class Product extends Component {

    constructor(props) {
        super(props)
        this.state = {
            qty: 0
        }
    }

    updateQty() {
        this.setState({qty: this.state.qty + 1});
        // Handle passed in function to use component price to update the total
        this.props.handleTotal(this.props.price);
    }
 
    render() {
        return (
            <div>
                <p>{this.props.name} - ${this.props.price}</p>
                {/* Added bind so that it binds the current component with its state */}
                <button onClick={this.updateQty.bind(this)}>Buy</button>
                <h2>Qty: {this.state.qty} Item(s)</h2>
                <hr></hr>
            </div>
        );
    }
}