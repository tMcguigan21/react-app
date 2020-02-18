import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  export default class ProductCard extends Component {

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
                <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <CardSubtitle>${this.props.price}</CardSubtitle>
                    <CardText>
                        Qty: {this.state.qty} Item(s)<br/>
                        Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button onClick={this.updateQty.bind(this)}>Button</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}