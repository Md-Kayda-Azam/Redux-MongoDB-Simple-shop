import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk  from 'redux-thunk'

// create store 
const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(thunk) ));



// store export default
export default store;