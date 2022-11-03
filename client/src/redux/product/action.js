import  axios  from "axios";
import swal from "sweetalert";
import { PRODUCT_ADDED, PRODUCT_DELETE, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS, SINGLE_PRODUCT, SINGLE_PRODUCT_PAGE } from "./actionType";







// product request 
export const productRequest = () => ({
    type : PRODUCT_REQUEST
})

// product success
export const productSuccess = (payload) => ({
    type : PRODUCT_SUCCESS,
    payload
})

// product fail
export const productFail = (payload) => ({
    type : PRODUCT_FAIL,
    payload
})







// get all products
export const getAllProduct = () => async (dispatch) => {

    try {
        
        dispatch(productRequest());

       setTimeout(() => {
                 axios.get('/api/v1/product')
                .then(res => {
                    
                    dispatch(productSuccess(res.data))

                })
                .catch(error => dispatch(productFail(error.message)));
       },1000)

    } catch (error) {
        dispatch(productFail(error.message))
    }


}


// create products
export const createProduct = (data, e, setInput) => async (dispatch) => {

    try {
        
        

        await axios.post('/api/v1/product', data)
        .then(res => {
            
            dispatch({
                type : PRODUCT_ADDED,
                payload : res.data.product
            });
            swal({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success",
                button: "Aww yiss!",
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
                category : [],
                tags : []
            })

        })
        .catch(error => dispatch(productFail(error.message)));

    } catch (error) {
        dispatch(productFail(error.message))
    }


}



// single products
export const singleProduct = (id) => async (dispatch) => {

    dispatch({
        type : SINGLE_PRODUCT,
        payload : id
    })
   
}



// delete products
export const deleteProduct = (id) => async (dispatch) => {

    try {
        
        

//   "proxy" : "http://localhost:5050"
        await axios.delete(`/api/v1/product/${id}`)
                .then(res => {
                    
                    dispatch({
                        type : PRODUCT_DELETE,
                        payload : id
                    });

                })
                .catch(error => dispatch(productFail(error.message)));

            } catch (error) {
                dispatch(productFail(error.message))
            }


}


// single product products
export const singleProductPage = (id) => async (dispatch) => {

    try {
        
        

        await axios.get(`/api/v1/product/${id}`)
        .then(res => {
            
            dispatch({
                type : SINGLE_PRODUCT_PAGE,
                payload : id
            });

        })
        .catch(error => dispatch(productFail(error.message)));

    } catch (error) {
        dispatch(productFail(error.message))
    }


}
