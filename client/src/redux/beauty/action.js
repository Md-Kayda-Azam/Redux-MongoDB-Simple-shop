import axios from "axios";
import { BEAUTY_PRODUCT_DELETE, BEAUTY_PRODUCT_FAIL, BEAUTY_PRODUCT_REQUEST, BEAUTY_PRODUCT_SINGLE, BEAUTY_PRODUCT_SUCCESS } from "./actionType";
import swal from 'sweetalert'

// get all beaty
export const requestBeauty = () => ({
    type : BEAUTY_PRODUCT_REQUEST
})
// create beauty
export const successBeauty = (payload) => ({
    type : BEAUTY_PRODUCT_SUCCESS,
    payload
})
// fail beaty
export const failBeauty = (payload) => ({
    type : BEAUTY_PRODUCT_FAIL,
    payload
})


export const getAllABeauties = () => (dispatch) => {

    try {
        
        dispatch(requestBeauty())
        axios.get('/api/v1/beautyProduct')
        .then(res => {
            dispatch(successBeauty(res.data))
        })
        .catch(error => {
        dispatch(failBeauty(error.messsge))
        })

    } catch (error) {
        dispatch(failBeauty(error.messsge))
    }

}


// get all health products
export const createBeautyProduct = (data, e, setInput) => async (dispatch) => {

    try {

            
          await  axios.post('/api/v1/beautyProduct', data)
            .then(res => {

                dispatch(getAllABeauties())
                
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
                    packSizes : [],
                    warrantyTypes : [],
                    shelfLifes : [],
                    colorFamily : [],
                    weight : [],
                })
            })
            .catch(error => {

            dispatch(failBeauty(error.messege))

            })
    } catch (error) {

        dispatch(failBeauty(error.messege))

    }

}

// get all delete health
export const singleBeauty = (id) => async (dispatch) => {

    try {
        
        await axios.get(`/api/v1/beautyProduct/${id}`)
                .then(res => {
                    
                    dispatch({
                        type : BEAUTY_PRODUCT_SINGLE,
                        payload : id
                    });

                })
                .catch(error => dispatch(failBeauty(error.message)));

            } catch (error) {
                dispatch(failBeauty(error.message))
            }


}

// get all delete health
export const deleteBeauty = (id) => (dispatch) => {

    try {
        
        axios.delete(`/api/v1/beautyProduct/${id}`)
        .then(res => {
            dispatch({
                type : BEAUTY_PRODUCT_DELETE,
                payload : id
            })
        })
        .catch(error => {
          dispatch(failBeauty(error.messege))
        })


    } catch (error) {
        dispatch(failBeauty(error.messege))
        
    }




}