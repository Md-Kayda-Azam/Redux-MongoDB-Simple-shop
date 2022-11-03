import axios from "axios";
import { MANS_FASHION_DELETE, MANS_FASHION_FAIL, MANS_FASHION_REQUEST, MANS_FASHION_SINGLE, MANS_FASHION_SUCCESS, SINGLE_HEALTH } from "./actionType";
import swal from "sweetalert"


// health request
export const manFashionRequest = () => ({
    type : MANS_FASHION_REQUEST,
}) 

// health success
export const manFashionSuccess = (payload) => ({
    type : MANS_FASHION_SUCCESS,
    payload
}) 

// health fail
export const manFashionhFail = (payload) => ({
    type : MANS_FASHION_FAIL,
    payload
}) 


// get all health products
export const getAlMansFashionProducts = () => (dispatch) => {

    try {

            dispatch(manFashionRequest())
            axios.get('/api/v1/mansFashionProduct')
            .then(res => {

                dispatch(manFashionSuccess(res.data))
                
            })
            .catch(error => {

            dispatch(manFashionhFail(error.messege))

            })
    } catch (error) {

        dispatch(manFashionhFail(error.messege))

    }

}

// get all health products
export const createMansFashionProduct = (data, e, setInput) => async (dispatch) => {

    try {

            
          await  axios.post('/api/v1/mansFashionProduct', data)
            .then(res => {

                dispatch(getAlMansFashionProducts())
                
                swal({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                  });

                e.target.reset();
                setInput({
                    name : '',
                    regular_price : '',
                    sale_price : '',
                    stock : '',
                    photo : '',
                    gall : '',
                    gallery : [],
                    file : [],
                    brands : [],
                    services : [],
                    locations : [],
                    packSizes : [],
                    countryofOrigins : [],
                    warrantyTypes : [],
                    shelfLifes : [],
                    colorFamily : [],
                    weight : []
                })
            })
            .catch(error => {

            dispatch(manFashionhFail(error.messege))

            })
    } catch (error) {

        dispatch(manFashionhFail(error.messege))

    }

}

// get all delete health
export const singleMansFashion = (id) => async (dispatch) => {

    try {
        
        await axios.get(`/api/v1/mansFashionProduct/${id}`)
                .then(res => {
                    
                    dispatch({
                        type : MANS_FASHION_SINGLE,
                        payload : id
                    });

                })
                .catch(error => dispatch(manFashionhFail(error.message)));

            } catch (error) {
                dispatch(manFashionhFail(error.message))
            }


}

// get all delete health
export const deleteMansFashion = (id) => async (dispatch) => {

    try {
        
        await axios.delete(`/api/v1/mansFashionProduct/${id}`)
                .then(res => {
                    
                    dispatch({
                        type : MANS_FASHION_DELETE,
                        payload : id
                    });

                })
                .catch(error => dispatch(manFashionhFail(error.message)));

            } catch (error) {
                dispatch(manFashionhFail(error.message))
            }


}