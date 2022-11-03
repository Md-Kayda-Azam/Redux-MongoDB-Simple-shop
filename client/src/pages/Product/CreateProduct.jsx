import { set } from 'mongoose';
import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/product/action';
import swal from "sweetalert";



const CreateProduct = ({ single, handleSingleHide }) => {



    const dispatch = useDispatch()

    const [ input, setInput ] = useState({
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

    // update form fields state
    const handleInputChange = (e) => {

        setInput((prevState) => ({
            ...prevState,
         [e.target.name] : e.target.value
        }))
    }

    // handle category change
    const handleCategoryChange = (e) => {

        if( e.target.checked){
            
            let cats = input.category;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                category : cats
            }));

        }else{
            let cats = input.category;
            const newCats = cats.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                category : newCats
            }));


        }

    }
    // handle category change
    const handleTagsChange = (e) => {

        if( e.target.checked){
            
            let taggs = input.tags;
            taggs.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                tags : taggs
            }));

        }else{
            let taggs = input.tags;
            const newTaggs = taggs.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                tags : newTaggs
            }));


        }

    }


    // product handle photo change
 const handleProductPhoto = (e) => {
    setInput((prevState) => ({
        ...prevState,
      file : e.target.files[0]
    }))

 }
 // product handle photo change
 const handleProductGallery = (e) => {

    setInput((prevState) => ({
        ...prevState,
      gall : e.target.files

    }))

 }

    /// handle product submit
    const handleProductSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', input.name);
        data.append('regular_price', input.regular_price);
        data.append('sale_price', input.sale_price);
        data.append('stock', input.stock);
        data.append('photo', input.file);
        data.append('category', input.category);
        data.append('tags', input.tags);

        for( let i = 0; i < input.gall.length ; i++){
            data.append('gallery', input.gall[i])
        }

        if( input.name || input.regular_price){


            dispatch(createProduct(data, e, setInput));

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

                <div className="col-lg-8">
                    <div className="card product shadow-sm">
                        <div className="card-body">
                        <h2>Add new product</h2>
                        <hr />
                        <form onSubmit={ handleProductSubmit } method="POST" encType='multipart/form-data' >
                            <div className="row">
                                <div className="col-5">
                                <div className="my-2">
                                    <label htmlFor="">Name</label>
                                    <input name='name' className='form-control' value={ input.name } onChange={ handleInputChange } type="text" />
                                </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Regular Price</label>
                                        <input name='regular_price' className='form-control' value={ input.regular_price } onChange={ handleInputChange } type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                <div className="my-2">
                                    <label htmlFor="">Sale Price</label>
                                    <input name='sale_price' className='form-control' value={ input.sale_price } onChange={ handleInputChange } type="text" />
                                </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Stock</label>
                                        <input name='stock' className='form-control' value={ input.stock } onChange={ handleInputChange }  type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Category</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCategoryChange } /> Men
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCategoryChange } /> Women
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCategoryChange } /> Electronic
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCategoryChange } /> Kids
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Tags</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Eid" onChange={ handleTagsChange } /> Eid
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Puja" onChange={ handleTagsChange } /> Puja
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Dengu" onChange={ handleTagsChange } /> Dengu
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="my-3">
                                <label htmlFor="">Photo</label>
                                <input name='photo' className='form-control w-75' onChange={ handleProductPhoto } type="file" />
                            </div>
                            <div className="my-3">
                                <label htmlFor="">Gallery</label>
                                <input name='gallery' className='form-control w-75' onChange={ handleProductGallery } type="file" multiple />
                            </div>

                            <div className="my-3">
                                <label htmlFor=""></label>
                                <input className='btn btn-primary w-75' type="submit"  value='Create'/>
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

export default CreateProduct;