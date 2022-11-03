import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import swal from "sweetalert";
import { createTag } from '../../redux/tags/action';





const CreateTag = ({ single, handleSingleHide }) => {



    const dispatch = useDispatch()

    const [ input, setInput ] = useState({
        name : '',
        status : '',
    })

    // slug generator
    const makeSlug = (data) => {
        let err = data.split(' ');
        return err.join('-').toLowerCase();
    }

    // update form fields state
    const handleInputChange = (e) => {

        setInput((prevState) => ({
            ...prevState,
         [e.target.name] : e.target.value
        }))
    }



    // handle product submit
    const handleProductSubmit = async (e) => {
        e.preventDefault();

       


        if( input.name ){


             let slug = makeSlug(input.name);

            dispatch(createTag({name : input.name, status : input.status, slug : slug}));


            
        }else{
            swal({
                title: "Invalid job!",
                text: "Please You clicked the input text!",
                icon: "error",
                button: "Aww yiss!",
              });
        }


    }

 

  return (

    <Modal show={ single } onHide={ handleSingleHide } animation={ true } centered size='lg'>
        <Modal.Body>
        <div className='container my-5'>
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="card">
                       <div className="card-body">
                            <h4>Add Tags</h4>
                               <form onSubmit={handleProductSubmit} method="POST">
                                  <div className="my-1">
                                       <label htmlFor="">Name</label>
                                        <input name='name' className='form-control' value={input.name} onChange={handleInputChange} type="text" />
                                    </div>
                                    <div className="my-1">
                                        <label htmlFor="">Status</label>
                                        <input name='status' className='form-control' type="text" value={input.status} onChange={handleInputChange} />
                                    </div>
                                    <div className="my-1">
                                        <input className='btn btn-primary w-100' type="submit" />
                                    </div>
                            
                                </form>
                        </div>
                    </div>
               </div>
            </div>
       </div>
        </Modal.Body>
    </Modal>


    
  )
};

export default CreateTag;