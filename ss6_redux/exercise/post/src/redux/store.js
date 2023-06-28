import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import { rootReducer } from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = [thunk]

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleWare))
)