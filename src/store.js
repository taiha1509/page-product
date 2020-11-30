import {combineReducers} from "redux";
import {combineEpics} from 'redux-observable';
import { productReducer } from "./reducers/productReducers";
import productEpics from './epics/productEpics';
import { getProduct } from './actions/product';

import {createStore, compose, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

const rootReducer = combineReducers({
    productReducer
});

const rootEpic = combineEpics(
    productEpics
);


const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);
epicMiddleware.run(rootEpic);
store.dispatch(getProduct());

export default store;