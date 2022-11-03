import { BRAND_DELETE, BRAND_FAIL, BRAND_SUCCESS, SINGLE_BRAND } from "./actionType";
import initialSate from "./initialState";



//create BRAND reducer
const brandReducer = ( state = initialSate, { type, payload }) => {

 switch (type) {
    case BRAND_SUCCESS:
        return {
            ...state,
            brands : payload
        }
    case BRAND_FAIL:
        return {
            ...state,
            err : payload
        }
    case SINGLE_BRAND:
        return{
              ...state,
              singleBrand : state.brands.find( data => data._id === payload)
        };  
    case BRAND_DELETE:
        return {
               ...state,
               brands : state.brands.filter( data => data._id !== payload)
        };  
    default:
       return state;
 }



}


export default brandReducer;