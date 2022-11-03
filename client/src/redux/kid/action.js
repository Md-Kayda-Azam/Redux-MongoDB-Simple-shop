import axios from "axios";
import { HEALTH_DELETE, KIDS_DELETE, KIDS_FAIL, KIDS_REQUEST, KIDS_SINGLE, KIDS_SUCCESS, SINGLE_HEALTH } from "./actionType";
import swal from "sweetalert"


// health request
export const kidRequest = () => ({
    type : KIDS_REQUEST,
}) 

// health success
export const kidSuccess = (payload) => ({
    type : KIDS_SUCCESS,
    payload
}) 

// health fail
export const kidFail = (payload) => ({
    type : KIDS_FAIL,
    payload
}) 


// get all health products
export const getAllKidProducts = () => (dispatch) => {

    try {

            dispatch(kidRequest())
            axios.get('/api/v1/kidsProduct')
            .then(res => {

                dispatch(kidSuccess(res.data))
                
            })
            .catch(error => {

            dispatch(kidFail(error.messege))

            })
    } catch (error) {

        dispatch(kidFail(error.messege))

    }

}

// get all health products
export const createKidProduct = (data, e, setInput) => async (dispatch) => {

    try {

            
          await  axios.post('/api/v1/kidsProduct', data)
            .then(res => {

                dispatch(getAllKidProducts())
                
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

            dispatch(kidFail(error.messege))

            })
    } catch (error) {

        dispatch(kidFail(error.messege))

    }

}

// get all delete health
export const singleKid = (id) => async (dispatch) => {

    try {
        
        await axios.get(`/api/v1/kidsProduct/${id}`)
                .then(res => {
                    
                    dispatch({
                        type : KIDS_SINGLE,
                        payload : id
                    });

                })
                .catch(error => dispatch(kidFail(error.message)));

            } catch (error) {
                dispatch(kidFail(error.message))
            }


}

// get all delete health
export const deleteKid = (id) => async (dispatch) => {

    try {
        
        await axios.delete(`/api/v1/kidsProduct/${id}`)
                .then(res => {
                    
                    dispatch({
                        type : KIDS_DELETE,
                        payload : id
                    });

                })
                .catch(error => dispatch(kidFail(error.message)));

            } catch (error) {
                dispatch(kidFail(error.message))
            }


}