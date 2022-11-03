import axios from "axios"
import { CATEGORY_DELETE, CATEGORY_FAIL, CATEGORY_SUCCESS, SINGLE_CATEGORY } from "./actionType";
import swal from "sweetalert";


// get All category
export const categorySuccess = (payload) => ({
    type : CATEGORY_SUCCESS,
    payload
})

// get All category
export const categoryFail = (payload) => ({
    type : CATEGORY_FAIL,
    payload
})


// get all category
export const getAllCategories = () => (dispatch) => {

    try {
        
        axios.get('/api/v1/category')
        .then(res => {
            dispatch(categorySuccess(res.data))
        })
        .catch(error => {
          dispatch(categoryFail(error.messege))
        })


    } catch (error) {
        dispatch(categoryFail(error.messege))
        
    }




}
// create category
export const createCategory = (data, e, setInput) => (dispatch) => {

    try {
        
        axios.post('/api/v1/category', data)
        .then(res => {
            dispatch(getAllCategories())
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
          dispatch(categoryFail(error.messege))
        })


    } catch (error) {
        dispatch(categoryFail(error.messege))
        
    }




}
// single category
export const singleCategory = (id) => async (dispatch) => {

    dispatch({
        type : SINGLE_CATEGORY,
        payload : id
    })
   
}

// delete category
export const deleteCategory = (id) => (dispatch) => {

    try {
        
        axios.delete(`/api/v1/category/${id}`)
        .then(res => {
            dispatch({
                type : CATEGORY_DELETE,
                payload : id
            })
        })
        .catch(error => {
          dispatch(categoryFail(error.messege))
        })


    } catch (error) {
        dispatch(categoryFail(error.messege))
        
    }




}