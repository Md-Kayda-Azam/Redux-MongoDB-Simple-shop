import {SINGLE_TAGS, TAGS_DELETE, TAGS_FAIL, TAGS_SUCCESS } from "./actionType";
import initialSate from "./initialState";



//create category reducer
const tagReducer = ( state = initialSate, { type, payload }) => {

 switch (type) {
    case TAGS_SUCCESS:
        return {
            ...state,
            tags : payload
        }
    case TAGS_FAIL:
        return {
            ...state,
            err : payload
        }
    case SINGLE_TAGS:
        return{
              ...state,
              singleTag : state.tags.find( data => data._id === payload)
        };  
    case TAGS_DELETE:
        return {
               ...state,
               tags : state.tags.filter( data => data._id !== payload)
        };  
    default:
       return state;
 }



}


export default tagReducer;