import { HEALTH_DELETE, HEALTH_FAIL, HEALTH_REQUEST, HEALTH_SUCCESS, MANS_FASHION_DELETE, MANS_FASHION_FAIL, MANS_FASHION_REQUEST, MANS_FASHION_SINGLE, MANS_FASHION_SUCCESS, SINGLE_HEALTH } from "./actionType";
import initialState from "./initialState";



// create health reducer 
const mansFashionsReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case MANS_FASHION_REQUEST:
            return {
                ...state,
                skeleton : true
            };
            
        case MANS_FASHION_SUCCESS:
            return {
                ...state,
                skeleton : false,
                mansFashions : payload
            };

        case MANS_FASHION_FAIL:
            return {
                ...state,
                skeleton : true,
                error  : payload
            };
        case MANS_FASHION_DELETE:
            return {
                ...state,
                mansFashions : state.mansFashions.filter( data => data._id !== payload)
            };
        case MANS_FASHION_SINGLE:
            return {
                ...state,
                singleMansFashions : state.mansFashions.find( data => data._id === payload)
            };
        default:
           return state;
    }

}


export default mansFashionsReducer;