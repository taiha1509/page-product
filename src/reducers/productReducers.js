import {Fetch_Product_Success, Fetch_Product} from  '../constants/TypeAction'
import '../service/product'
import { fetchProduct } from '../service/product'

const INITAL_STATE = {
    product: [],
    isLoading: true
}

const defaultState = {
    product: {
        id: 1,
        sku: 2,
        name: "3",
        price: 4,
        image: "http://127.0.0.1/magento235/pub/media/catalog/product/m/b/mb01-blue-0.jpg"
    },
    isLoading: false
}


export const productReducer = (state = INITAL_STATE, action) => {
    switch (action.type){
        case Fetch_Product:
            return{
                ...state,
                isLoading: true
            }
        
        case Fetch_Product_Success:
            const newState = {...state};
            newState.product = action.data;
            newState.isLoading = false;
            return newState;

        default: return defaultState;
    }
}