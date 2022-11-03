import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import swal from "sweetalert";
import { createBeautyProduct } from '../../../../redux/beauty/action';




const BeautyProductsCreate = ({ single, handleSingleHide }) => {



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
        brands : [],
        services : [],
        locations : [],
        packSizes : [],
        warrantyTypes : [],
        shelfLifes : [],
        colorFamily : [],
        weight : [],
    })

    // update form fields state
    const handleInputChange = (e) => {

        setInput((prevState) => ({
            ...prevState,
         [e.target.name] : e.target.value
        }))
    }

    // handle category change
    const handleBrandsChange = (e) => {

        if( e.target.checked){
            
            let cats = input.brands;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                brands : cats
            }));

        }else{
            let cats = input.brands;
            const newCats = cats.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                brands : newCats
            }));


        }

    }
    // handle tags change
    const handleServiceChange = (e) => {

        if( e.target.checked){
            
            let cats = input.services;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                services : cats
            }));

        }else{

            let tags = input.services;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                services : newTags
            }));


        }

    }
    // handle tags change
    const handleLocationChange = (e) => {

        if( e.target.checked){
            
            let cats = input.locations;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                locations : cats
            }));

        }else{

            let tags = input.locations;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                locations : newTags
            }));


        }

    }
    // handle tags change
    const handlePackSizeChange = (e) => {

        if( e.target.checked){
            
            let cats = input.packSizes;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                packSizes : cats
            }));

        }else{

            let tags = input.packSizes;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                packSizes : newTags
            }));


        }

    }
    // handle tags change
    const handleWarrantyTypeChange = (e) => {

        if( e.target.checked){
            
            let cats = input.warrantyTypes;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                warrantyTypes : cats
            }));

        }else{

            let tags = input.warrantyTypes;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                warrantyTypes : newTags
            }));


        }

    }
    // handle tags change
    const handleShelfLifeChange = (e) => {

        if( e.target.checked){
            
            let cats = input.shelfLifes;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                shelfLifes : cats
            }));

        }else{

            let tags = input.shelfLifes;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                shelfLifes : newTags
            }));


        }

    }
    // handle tags change
    const handleColorFamilyChange = (e) => {

        if( e.target.checked){
            
            let cats = input.colorFamily;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                colorFamily : cats
            }));

        }else{

            let tags = input.colorFamily;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                colorFamily : newTags
            }));


        }

    }
    // handle tags change
    const handleWeightChange = (e) => {

        if( e.target.checked){
            
            let cats = input.weight;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                weight : cats
            }));

        }else{

            let tags = input.weight;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                weight : newTags
            }));


        }

    }

    // product handle photo change
 const handleBeautyProductPhoto = (e) => {
    setInput((prevState) => ({
        ...prevState,
      file : e.target.files[0]
    }))

 }
 // product handle photo change
 const handleBeautyProductGallery = (e) => {

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
        data.append('brands', input.brands);
        data.append('services', input.services);
        data.append('packSizes', input.packSizes);
        data.append('warrantyTypes', input.warrantyTypes);
        data.append('shelfLifes', input.shelfLifes);
        data.append('colorFamily', input.colorFamily);
        data.append('weight', input.weight);
        

        for( let i = 0; i < input.gall.length ; i++){
            data.append('gallery', input.gall[i])
        }

        if( input.name || input.regular_price){


            dispatch(createBeautyProduct(data, e, setInput));


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
                        <h2>Add new beauty product</h2>
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
                                        <label htmlFor="">Brand</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Whisper" onChange={ handleBrandsChange } /> Whisper
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Joya" onChange={ handleBrandsChange } /> Joya
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Freedom" onChange={ handleBrandsChange } /> Freedom
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Senora" onChange={ handleBrandsChange } /> Senora
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Pax Moly" onChange={ handleBrandsChange } /> Pax Moly
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Divas secret" onChange={ handleBrandsChange } /> Divas secret
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Good Virtues" onChange={ handleBrandsChange } />  Good Virtues 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Farmasi" onChange={ handleBrandsChange } />  Farmasi
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="SMC" onChange={ handleBrandsChange } />   SMC
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Service</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Installment" onChange={ handleServiceChange } /> Installment
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Cash Delivery" onChange={ handleServiceChange } /> Cash Delivery
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Pay JKnext" onChange={ handleServiceChange } /> Pay JKnext
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Free Shipping" onChange={ handleServiceChange } /> Free Shipping
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Location</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Bangladesh" onChange={ handleLocationChange } /> Bangladesh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Puja" onChange={ handleLocationChange } /> China
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="China" onChange={ handleLocationChange } /> USA
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Japan" onChange={ handleLocationChange } /> Japan
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Pack Size</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="7-10" onChange={ handlePackSizeChange } />  7-10
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="13-20" onChange={ handlePackSizeChange } />  13-20
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="20" onChange={ handlePackSizeChange } />  20
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Small" onChange={ handlePackSizeChange } /> Small
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="0-6" onChange={ handlePackSizeChange } />  0-6
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Warranty Type</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="No Warranty" onChange={ handleWarrantyTypeChange } /> No Warranty
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Seller Warranty Type" onChange={ handleWarrantyTypeChange } /> Seller Warranty Type
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Local seler warranty" onChange={ handleWarrantyTypeChange } />  Local seler warranty
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Shelf Life</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="1 Months - 60 Months" onChange={ handleShelfLifeChange } />  1 Months - 60 Months
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="7 - 12 Months" onChange={ handleShelfLifeChange } /> 7 - 12 Months
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="1 - 12 Weeks" onChange={ handleShelfLifeChange } /> 1 - 12 Weeks
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Color Family</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Multicolor" onChange={ handleColorFamilyChange } />  Multicolor
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Aqua" onChange={ handleColorFamilyChange } /> Aqua
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Orange" onChange={ handleColorFamilyChange } />  Orange
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Cream" onChange={ handleColorFamilyChange } />  Cream
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="White" onChange={ handleColorFamilyChange } />  White
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Weight</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="100 gm" onChange={ handleWeightChange } />  100 gm
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="70 gm" onChange={ handleWeightChange } />  70 gm
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="50" onChange={ handleWeightChange } />  50
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="my-3">
                                <label htmlFor="">Photo</label>
                                <input name='photo' className='form-control w-75' onChange={ handleBeautyProductPhoto } type="file" />
                            </div>
                            <div className="my-3">
                                <label htmlFor="">Gallery</label>
                                <input name='gallery' className='form-control w-75' onChange={ handleBeautyProductGallery } type="file" multiple />
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

export default BeautyProductsCreate;