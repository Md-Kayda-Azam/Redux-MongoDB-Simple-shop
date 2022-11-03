import { ELECTRONIC_DELETE, ELECTRONIC_FAIL, ELECTRONIC_REQUEST, ELECTRONIC_SUCCESS,  SINGLE_ELECTRONIC } from "./actionType";
import initialState from "./initialState";



// create health reducer 
const electronicReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case ELECTRONIC_REQUEST:
            return {
                ...state,
                skeleton : true
            };
            
        case ELECTRONIC_SUCCESS:
            return {
                ...state,
                skeleton : false,
                electronics : payload
            };

        case ELECTRONIC_FAIL:
            return {
                ...state,
                skeleton : true,
                error  : payload
            };
        case ELECTRONIC_DELETE:
            return {
                ...state,
                electronics : state.electronics.filter( data => data._id !== payload)
            };
        case SINGLE_ELECTRONIC:
            return {
                ...state,
                singleElectronic : state.electronics.find( data => data._id === payload)
            };
        default:
           return state;
    }

}


export default electronicReducer;