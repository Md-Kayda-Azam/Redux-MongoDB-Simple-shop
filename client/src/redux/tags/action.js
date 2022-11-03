import axios from "axios"
import { SINGLE_TAGS, TAGS_DELETE, TAGS_FAIL, TAGS_SUCCESS } from "./actionType";
import swal from "sweetalert";


// get All category
export const tagSuccess = (payload) => ({
    type : TAGS_SUCCESS,
    payload
})

// get All category
export const tagFail = (payload) => ({
    type : TAGS_FAIL,
    payload
})


// get all category
export const getAllTags = () => (dispatch) => {

    try {
        
        axios.get('/api/v1/tags')
        .then(res => {
            dispatch(tagSuccess(res.data))
        })
        .catch(error => {
          dispatch(tagFail(error.messege))
        })


    } catch (error) {
        dispatch(tagFail(error.messege))
        
    }




}
// create category
export const createTag = (data, e, setInput) => (dispatch) => {

    try {
        
        axios.post('/api/v1/tags', {
            name : data.name,
            slug : data.slug,
            status : data.status
        })
        .then(res => {
            dispatch(getAllTags())
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
                status : '',
            })
        })
        .catch(error => {
          dispatch(tagFail(error.messege))
        })


    } catch (error) {
        dispatch(tagFail(error.messege))
        
    }




}
// single category
export const singleTag = (id) => async (dispatch) => {

    dispatch({
        type : SINGLE_TAGS,
        payload : id
    })
   
}

// delete category
export const deleteTag = (id) => (dispatch) => {

    try {
        
        axios.delete(`/api/v1/tags/${id}`)
        .then(res => {
            dispatch({
                type : TAGS_DELETE,
                payload : id
            })
        })
        .catch(error => {
          dispatch(tagFail(error.messege))
        })


    } catch (error) {
        dispatch(tagFail(error.messege))
        
    }




}