import { HEALTH_DELETE, HEALTH_FAIL, HEALTH_REQUEST, HEALTH_SUCCESS, KIDS_DELETE, KIDS_FAIL, KIDS_REQUEST, KIDS_SINGLE, KIDS_SUCCESS, SINGLE_HEALTH } from "./actionType";
import initialState from "./initialState";



// create health reducer 
const kidReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case KIDS_REQUEST:
            return {
                ...state,
                skeleton : true
            };
            
        case KIDS_SUCCESS:
            return {
                ...state,
                skeleton : false,
                kids : payload
            };

        case KIDS_FAIL:
            return {
                ...state,
                skeleton : true,
                error  : payload
            };
        case KIDS_DELETE:
            return {
                ...state,
                kids : state.kids.filter( data => data._id !== payload)
            };
        case KIDS_SINGLE:
            return {
                ...state,
                singlekid : state.kids.find( data => data._id === payload)
            };
        default:
           return state;
    }

}


export default kidReducer;