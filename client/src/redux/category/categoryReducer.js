import { CATEGORY_DELETE, CATEGORY_FAIL, CATEGORY_SUCCESS, SINGLE_CATEGORY } from "./actionType";
import initialSate from "./initialState";



//create category reducer
const categoryReducer = ( state = initialSate, { type, payload }) => {

 switch (type) {
    case CATEGORY_SUCCESS:
        return {
            ...state,
            categories : payload
        }
    case CATEGORY_FAIL:
        return {
            ...state,
            err : payload
        }
    case SINGLE_CATEGORY:
        return{
              ...state,
              singleCategory : state.categories.find( data => data._id === payload)
        };  
    case CATEGORY_DELETE:
        return {
               ...state,
               categories : state.categories.filter( data => data._id !== payload)
        };  
    default:
       return state;
 }



}


export default categoryReducer;