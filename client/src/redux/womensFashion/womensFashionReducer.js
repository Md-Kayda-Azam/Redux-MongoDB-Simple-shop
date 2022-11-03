import { WOMENSFASHION_PRODUCTS_FAIL, WOMENSFASHION_PRODUCTS_REQUEST, WOMENSFASHION_PRODUCTS_SUCCESS, WOMENSFASHION_PRODUCT_DELETE, WOMENSFASHION_SINGLE_PRODUCT } from "./actionType";
import initialState from "./womensInitialState.js";



// create womnesFashion products
const womensFashionReducer = (state = initialState, {type, payload}) => {


  switch (type) {
    case WOMENSFASHION_PRODUCTS_REQUEST:
    return{
      ...state,
      womensFashionSkeleton : true
    };

    case WOMENSFASHION_PRODUCTS_SUCCESS:
    return{
      ...state,
      womensFashionSkeleton : false,
      womenFashions : payload
    };

    case WOMENSFASHION_PRODUCTS_FAIL:
    return{
      ...state,
      womensFashionSkeleton : false,
      womensFashionError : payload
    };

    case WOMENSFASHION_SINGLE_PRODUCT:
    return{
      ...state,
      womensFashionSingleProduct : state.womenFashions.find( data => data._id === payload)
    };
    case WOMENSFASHION_PRODUCT_DELETE:
    return{
      ...state,
      womenFashions : state.womenFashions.filter( data => data._id !== payload)
    };
  
    default:
      return state;
  }

}


// export default
export default womensFashionReducer;