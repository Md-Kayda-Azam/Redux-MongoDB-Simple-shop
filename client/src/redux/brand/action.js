import axios from "axios"
import { BRAND_DELETE, BRAND_FAIL, BRAND_SUCCESS, SINGLE_BRAND } from "./actionType";
import swal from "sweetalert";


// get All brand
export const brandSuccess = (payload) => ({
    type : BRAND_SUCCESS,
    payload
})

// get All brand
export const brandFail = (payload) => ({
    type : BRAND_FAIL,
    payload
})


// get all brand
export const getAllBrands = () => (dispatch) => {

    try {
        
        axios.get('/api/v1/brands')
        .then(res => {
            dispatch(brandSuccess(res.data))
        })
        .catch(error => {
          dispatch(brandFail(error.messege))
        })


    } catch (error) {
        dispatch(brandFail(error.messege))
        
    }




}
// create brand
export const createBrand = (data, e, setInput) => (dispatch) => {

    try {
        
        axios.post('/api/v1/brands', data)
        .then(res => {
            dispatch(getAllBrands())
            swal({
                title: "Good job!",
                text: "Please You clicked the input text!",
                icon: "success",
                button: "Aww yiss!",
              });
              e.target.reset();
            setInput({
                name : '',
                slugName : '',
                photo : '',
                status : '',
                file : ''
            })
        })
        .catch(error => {
          dispatch(brandFail(error.messege))
        })


    } catch (error) {
        dispatch(brandFail(error.messege))
        
    }




}
// single brand
export const singleBrand = (id) => async (dispatch) => {

    dispatch({
        type : SINGLE_BRAND,
        payload : id
    })
   
}

// delete brand
export const deleteBrand = (id) => (dispatch) => {

    try {
        
        axios.delete(`/api/v1/brands/${id}`)
        .then(res => {
            dispatch({
                type : BRAND_DELETE,
                payload : id
            })
        })
        .catch(error => {
          dispatch(brandFail(error.messege))
        })


    } catch (error) {
        dispatch(brandFail(error.messege))
        
    }




}