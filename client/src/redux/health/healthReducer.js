import { HEALTH_DELETE, HEALTH_FAIL, HEALTH_REQUEST, HEALTH_SUCCESS, SINGLE_HEALTH } from "./actionType";
import initialState from "./initialState";



// create health reducer 
const healthReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case HEALTH_REQUEST:
            return {
                ...state,
                skeleton : true
            };
            
        case HEALTH_SUCCESS:
            return {
                ...state,
                skeleton : false,
                healths : payload
            };

        case HEALTH_FAIL:
            return {
                ...state,
                skeleton : true,
                error  : payload
            };
        case HEALTH_DELETE:
            return {
                ...state,
                healths : state.healths.filter( data => data._id !== payload)
            };
        case SINGLE_HEALTH:
            return {
                ...state,
                singleHealth : state.healths.find( data => data._id === payload)
            };
        default:
           return state;
    }

}


export default healthReducer;