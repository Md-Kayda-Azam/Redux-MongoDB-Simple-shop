import { combineReducers } from 'redux'
import beautyReducer from './beauty/beautyReducer.js';
import brandReducer from './brand/brandReducer.js';
import categoryReducer from './category/categoryReducer.js';
import electronicReducer from './electronic/healthReducer.js';
import healthReducer from './health/healthReducer.js';
import kidReducer from './kid/healthReducer.js';
import mansFashionsReducer from './mansFashion/healthReducer.js';
import productReducer from './product/productReducer.js';
import tagReducer from './tags/tagReducer.js';
import womensFashionReducer from './womensFashion/womensFashionReducer.js';




// combine Reducer 
const rootReducer = combineReducers({

    product : productReducer,
    womensFashion : womensFashionReducer,
    health : healthReducer,
    category : categoryReducer,
    beauty : beautyReducer,
    mansFashion : mansFashionsReducer,
    kid : kidReducer,
    electronic : electronicReducer,
    tag : tagReducer,
    brand : brandReducer
    


})


// export default
export default rootReducer;