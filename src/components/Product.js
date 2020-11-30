import React, { useState } from 'react';
import { connect, dispatch } from 'react-redux';
import '../actions/product'
import { getProduct, getProductSuccess } from '../actions/product';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            products: []
        }
    }

    render() {
       
        if (this.props.isLoading) {
            return (
                
                <div>
                    <p>{this.props.isLoading.toString()}</p>
                    <h2>loading product</h2>
                </div>
            )
        } else {
            const listProduct = this.props.products.map((item, i) =>
                <li>
                    <img src={item.image}></img>
                    <p>{item.name}</p>
                    <p>{item.price}</p>     
                </li>
            )
            console.log(this.props.products);
            return (
                <div>
                    <p>{this.props.isLoading.toString()}</p>
                    <h1>this is product page demo</h1>
                    <ul>
                        {listProduct}
                    </ul>
                </div>
            )
        }



    }
}

function mapStateToProps(state) {
    console.log(state.productReducer.product);
    return {
        isLoading: state.productReducer.isLoading,
        products: state.productReducer.product
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProduct: () => dispatch(getProduct),
        getProductOk: () => dispatch(getProductSuccess)
    }
}

export default connect(mapStateToProps)(Product);