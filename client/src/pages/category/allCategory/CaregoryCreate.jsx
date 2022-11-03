import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import swal from "sweetalert";
import { createCategory } from '../../../redux/category/action';




const CaregoryCreate = ({ single, handleSingleHide }) => {



    const dispatch = useDispatch()

    const [ input, setInput ] = useState({
        name : '',
        photo : [],
        status : '',
        file : ''
    })

    // update form fields state
    const handleInputChange = (e) => {

        setInput((prevState) => ({
            ...prevState,
         [e.target.name] : e.target.value
        }))
    }
    // product handle photo change
    const handleCategoryPhoto = (e) => {
        setInput((prevState) => ({
            ...prevState,
          file : e.target.files[0]
        }))
    
     }

     // slug generator
     const makeSlug = (data) => {
        let err = data.split(' ')
        return err.join('-').toLowerCase(); 

     }


    // handle product submit
    const handleProductSubmit = async (e) => {
        e.preventDefault();

        let slug = makeSlug(input.name)
        const data = new FormData();
        data.append('name', input.name);
        data.append('slug', slug);
        data.append('status', input.status);
        data.append('photo', input.file);


        if( input.name || input.slugName){


            dispatch(createCategory(data, e, setInput));
            
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
                            <h4>Add Category</h4>
                               <form onSubmit={handleProductSubmit} method="POST" encType='multer/form-data'>
                                  <div className="my-1">
                                       <label htmlFor="">Category name</label>
                                        <input name='name' className='form-control' value={input.name} onChange={handleInputChange} type="text" />
                                    </div>
                                    <div className="my-1">
                                        <label htmlFor="">Status</label>
                                        <input name='status' className='form-control' type="text" value={input.status} onChange={handleInputChange} />
                                    </div>
                                    <div className="my-1">
                                        <label htmlFor="">Photo</label>
                                        <input name='photo' className='form-control' onChange={handleCategoryPhoto}  type="file" />
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

export default CaregoryCreate;