import axios from "axios";
import { HEALTH_DELETE, HEALTH_FAIL, HEALTH_REQUEST, HEALTH_SUCCESS, SINGLE_HEALTH } from "./actionType";
import swal from "sweetalert"


// health request
export const healthRequest = () => ({
    type : HEALTH_REQUEST,
}) 

// health success
export const healthSuccess = (payload) => ({
    type : HEALTH_SUCCESS,
    payload
}) 

// health fail
export const healthFail = (payload) => ({
    type : HEALTH_FAIL,
    payload
}) 


// get all health products
export const getAllHealthProducts = () => (dispatch) => {

    try {

            dispatch(healthRequest())
            axios.get('/api/v1/healthProduct')
            .then(res => {

                dispatch(healthSuccess(res.data))
                
            })
            .catch(error => {

            dispatch(healthFail(error.messege))

            })
    } catch (error) {

        dispatch(healthFail(error.messege))

    }

}

// get all health products
export const createHealthProduct = (data, e, setInput) => async (dispatch) => {

    try {

            
          await  axios.post('/api/v1/healthProduct', data)
            .then(res => {

                dispatch(getAllHealthProducts())
                
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

            dispatch(healthFail(error.messege))

            })
    } catch (error) {

        dispatch(healthFail(error.messege))

    }

}

// get all delete health
export const singleHealth = (id) => async (dispatch) => {

    try {
        
        await axios.get(`/api/v1/healthProduct/${id}`)
                .then(res => {
                    
                    dispatch({
                        type : SINGLE_HEALTH,
                        payload : id
                    });

                })
                .catch(error => dispatch(healthFail(error.message)));

            } catch (error) {
                dispatch(healthFail(error.message))
            }


}

// get all delete health
export const deleteHealth = (id) => async (dispatch) => {

    try {
        
        await axios.delete(`/api/v1/healthProduct/${id}`)
                .then(res => {
                    
                    dispatch({
                        type : HEALTH_DELETE,
                        payload : id
                    });

                })
                .catch(error => dispatch(healthFail(error.message)));

            } catch (error) {
                dispatch(healthFail(error.message))
            }


}