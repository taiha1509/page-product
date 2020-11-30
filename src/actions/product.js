import {Fetch_Product, Fetch_Product_Success} from '../constants/TypeAction.js';

export const getProduct = () =>
    ({
        type: Fetch_Product
    })


export const getProductSuccess = (products) => ({
    type: Fetch_Product_Success,
    data: products
})