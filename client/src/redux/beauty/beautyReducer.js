import { BEAUTY_PRODUCT_DELETE, BEAUTY_PRODUCT_FAIL, BEAUTY_PRODUCT_REQUEST, BEAUTY_PRODUCT_SINGLE, BEAUTY_PRODUCT_SUCCESS } from "./actionType";
import initialSate from "./initialState";


// create beauty Reducer 
const beautyReducer = ( state = initialSate, { type, payload}) => {

    switch (type) {
        case BEAUTY_PRODUCT_REQUEST:
            return {
                ...state,
                skeleton : true
            };
            
        case BEAUTY_PRODUCT_SUCCESS:
            return {
                ...state,
                skeleton : false,
                beauties : payload
            };

        case BEAUTY_PRODUCT_FAIL:
            return {
                ...state,
                skeleton : true,
                error  : payload
            };
            
        case BEAUTY_PRODUCT_SINGLE:
            return {
                ...state,
                singleBeautyProduct : state.beauties.find( data => data._id === payload)
            };
            
        case BEAUTY_PRODUCT_DELETE:
            return {
                    ...state,
                    beauties : state.beauties.filter( data => data._id !== payload)
            }; 
        
    
        default:
            return state;
    }


};


export default beautyReducer;