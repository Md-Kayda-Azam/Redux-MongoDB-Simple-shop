import { PRODUCT_ADDED, PRODUCT_DELETE, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, SINGLE_PRODUCT, SINGLE_PRODUCT_PAGE } from "./actionType.js";
import initialState from "./initialState.js";


// create reducer
const productReducer = (state = initialState, { type, payload}) => {

    switch (type) {
        case PRODUCT_REQUEST:
            return {
                ...state,
                skeleton : true
            };
            
        case PRODUCT_SUCCESS:
            return {
                ...state,
                skeleton : false,
                products : payload
            };

        case PRODUCT_FAIL:
            return {
                ...state,
                skeleton : true,
                error  : payload
            };
        case SINGLE_PRODUCT:
            return {
                ...state,
                singleProduct : state.products.find( data => data._id === payload)
            };
        case PRODUCT_DELETE:
            return {
                ...state,
                products : state.products.filter( data => data._id !== payload)
            };
        case SINGLE_PRODUCT_PAGE:
            return {
                ...state,
                singleProductPage : state.products.fild( data => data._id === payload)
            };
        case PRODUCT_ADDED:
            return {
                ...state,
                products : [...state.products, payload]
            };
        default:
            return state;
    }



}

// export default
export default productReducer;