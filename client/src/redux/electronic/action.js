import axios from "axios";
import { ELECTRONIC_DELETE, ELECTRONIC_FAIL, ELECTRONIC_REQUEST, ELECTRONIC_SUCCESS, HEALTH_DELETE, SINGLE_ELECTRONIC, SINGLE_HEALTH } from "./actionType";
import swal from "sweetalert"


// health request
export const electronicRequest = () => ({
    type : ELECTRONIC_REQUEST,
}) 

// health success
export const electronicSuccess = (payload) => ({
    type : ELECTRONIC_SUCCESS,
    payload
}) 

// health fail
export const electronicFail = (payload) => ({
    type : ELECTRONIC_FAIL,
    payload
}) 


// get all health products
export const getAllElectronicProducts = () => (dispatch) => {

    try {

            dispatch(electronicRequest())
            axios.get('/api/v1/electronicProduct')
            .then(res => {

                dispatch(electronicSuccess(res.data))
                
            })
            .catch(error => {

            dispatch(electronicFail(error.messege))

            })
    } catch (error) {

        dispatch(electronicFail(error.messege))

    }

}

// get all health products
export const createElectronicProduct = (data, e, setInput) => async (dispatch) => {

    try {

            
          await  axios.post('/api/v1/electronicProduct', data)
            .then(res => {

                dispatch(getAllElectronicProducts())
                
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
                    ramMemory : [],
                    batteryCapacitymAh : [],
                    operatingSystem : [],
                    storageCapacity : [],
                    warrantyType : [],
                    numberofSIM : [],
                    screenSizeinches : [],
                    cameraBackMegapixels : [],
                    warrantyPeriod : [],
                    cameraFrontMegapixels : []
                })
            })
            .catch(error => {

            dispatch(electronicFail(error.messege))

            })
    } catch (error) {

        dispatch(electronicFail(error.messege))

    }

}

// get all delete health
export const singleElectronic = (id) => async (dispatch) => {

    try {
        
        await axios.get(`/api/v1/electronicProduct/${id}`)
                .then(res => {
                    
                    dispatch({
                        type : SINGLE_ELECTRONIC,
                        payload : id
                    });

                })
                .catch(error => dispatch(electronicFail(error.message)));

            } catch (error) {
                dispatch(electronicFail(error.message))
            }


}

// get all delete health
export const deleteElectronic = (id) => async (dispatch) => {

    try {
        
        await axios.delete(`/api/v1/electronicProduct/${id}`)
                .then(res => {
                    
                    dispatch({
                        type : ELECTRONIC_DELETE,
                        payload : id
                    });

                })
                .catch(error => dispatch(electronicFail(error.message)));

            } catch (error) {
                dispatch(electronicFail(error.message))
            }


}