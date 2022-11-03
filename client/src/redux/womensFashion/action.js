import  axios  from "axios";
import swal from "sweetalert";
import { WOMENSFASHION_PRODUCTS_FAIL, WOMENSFASHION_PRODUCTS_REQUEST, WOMENSFASHION_PRODUCTS_SUCCESS, WOMENSFASHION_PRODUCT_DELETE, WOMENSFASHION_SINGLE_PRODUCT } from "./actionType";







// product request 
export const womensFashionProductRequest = () => ({
    type : WOMENSFASHION_PRODUCTS_REQUEST
})


// product success
export const womensFashionProductSuccess = (payload) => ({
    type : WOMENSFASHION_PRODUCTS_SUCCESS,
    payload
})

// product fail
export const womensFashionProductFail = (payload) => ({
    type : WOMENSFASHION_PRODUCTS_FAIL,
    payload
})







// get all products
export const getAllWomensFashionProducts = () => async (dispatch) => {

    try {
        
        dispatch(womensFashionProductRequest());

       setTimeout(() => {
                 axios.get('/api/v1/womensFashionProduct')
                .then(res => {
                    
                    dispatch(womensFashionProductSuccess(res.data));

                })
                .catch(error => dispatch(womensFashionProductFail(error.message)));
       },1000)

    } catch (error) {
        dispatch(womensFashionProductFail(error.message))
    }


}



// create products
export const createWomensFashionProduct = (data, e, setInput) => async (dispatch) => {

    try {
        
        

        await axios.post('/api/v1/womensFashionProduct', data)
        .then(res => {
            
            dispatch(getAllWomensFashionProducts());
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
                  brands : [],
                  services : [],
                  locations : [],
                  sizes : [],
                  colorFamilys : [],
                  mainMaterials : [],
                  warrantyTypes : [],
                  hijabStyles : [],
                  patterns : [],
                  listedYearSeasons : [],
              })
        })
        .catch(error => dispatch(womensFashionProductFail(error.message)));

    } catch (error) {
        dispatch(womensFashionProductFail(error.message))
    }


}



// single products
export const womensFashionSingleProduct = (id) => async (dispatch) => {

    dispatch({
        type : WOMENSFASHION_SINGLE_PRODUCT,
        payload : id
    })
   
}



// delete products
export const womensFashionDeleteProduct = (id) => async (dispatch) => {

    try {
        
        

        await axios.delete(`/api/v1/womensFashionProduct/${id}`)
        .then(res => {
            dispatch({
                type : WOMENSFASHION_PRODUCT_DELETE,
                payload : id
            });

        })
        .catch(error => dispatch(womensFashionProductFail(error.message)));

    } catch (error) {
        dispatch(womensFashionProductFail(error.message))
    }


}


// // single product products
// export const singleProductPage = (id) => async (dispatch) => {

//     try {
        
        

//         await axios.get(`http://localhost:5050/api/v1/product/${id}`)
//         .then(res => {
            
//             dispatch({
//                 type : SINGLE_PRODUCT_PAGE,
//                 payload : id
//             });

//         })
//         .catch(error => dispatch(productFail(error.message)));

//     } catch (error) {
//         dispatch(productFail(error.message))
//     }


// }
