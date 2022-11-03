import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import swal from "sweetalert";
import { createHealthProduct } from '../../../../redux/health/action';






const HealthProductscreate = ({ single, handleSingleHide }) => {



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
        countryofOrigins : [],
        warrantyTypes : [],
        shelfLifes : [],
        colorFamily : [],
        weight : []

    })

    // update form fields state
    const handleInputChange = (e) => {

        setInput((prevState) => ({
            ...prevState,
         [e.target.name] : e.target.value
        }))
    }

      // handle brands change
      const handleBrandChange = (e) => {

        if( e.target.checked){
            
            let bts = input.brands;
            bts.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                brands : bts
            }));

        }else{

            let bts = input.brands;
            const newBts = bts.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                brands : newBts
            }));


        }

    }

    // handle tags change
    const handleServiesChange = (e) => {

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
    const handleLocationsChange = (e) => {

        if( e.target.checked){
            
            let lts = input.locations;
            lts.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                locations : lts
            }));

        }else{

            let lts = input.locations;
            const newLts = lts.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                locations : newLts
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
    const handleCountryOriginChange = (e) => {

        if( e.target.checked){
            
            let conts = input.countryofOrigins;
            conts.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                countryofOrigins : conts
            }));

        }else{

            let conts = input.countryofOrigins;
            const newConts = conts.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                countryofOrigins : newConts
            }));


        }

    }
    // handle tags change
    const handleWarrantyTypeChange = (e) => {

        if( e.target.checked){
            
            let conts = input.warrantyTypes;
            conts.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                warrantyTypes : conts
            }));

        }else{

            let conts = input.warrantyTypes;
            const newConts = conts.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                warrantyTypes : newConts
            }));


        }

    }
    // handle tags change
    const handleShelfLifeChange = (e) => {

        if( e.target.checked){
            
            let conts = input.shelfLifes;
            conts.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                shelfLifes : conts
            }));

        }else{

            let conts = input.shelfLifes;
            const newConts = conts.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                shelfLifes : newConts
            }));


        }

    }
    // handle tags change
    const handleColorFamilyChange = (e) => {

        if( e.target.checked){
            
            let conts = input.colorFamily;
            conts.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                colorFamily : conts
            }));

        }else{

            let conts = input.colorFamily;
            const newConts = conts.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                colorFamily : newConts
            }));


        }

    }
    // handle tags change
    const handleWeightChange = (e) => {

        if( e.target.checked){
            
            let conts = input.weight;
            conts.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                weight : conts
            }));

        }else{

            let conts = input.weight;
            const newConts = conts.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                weight : newConts
            }));


        }

    }


    // product handle photo change
 const handleHealthPhoto = (e) => {
    setInput((prevState) => ({
        ...prevState,
      file : e.target.files[0]
    }))

 }
 // product handle photo change
 const handleHealthGallery = (e) => {

    setInput((prevState) => ({
        ...prevState,
      gall : e.target.files

    }))

 }

    /// handle product submit
    const handleHealthSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', input.name);
        data.append('regular_price', input.regular_price);
        data.append('sale_price', input.sale_price);
        data.append('stock', input.stock);
        data.append('photo', input.file);
        data.append('brands', input.brands);
        data.append('services', input.services);
        data.append('locations', input.locations);
        data.append('packSizes', input.packSizes);
        data.append('countryofOrigins', input.countryofOrigins);
        data.append('warrantyTypes', input.warrantyTypes);
        data.append('shelfLifes', input.shelfLifes);
        data.append('colorFamily', input.colorFamily);
        data.append('weight', input.weight);
         

        for( let i = 0; i < input.gall.length ; i++){
            data.append('gallery', input.gall[i])
        }

        if( input.name || input.regular_price){

           dispatch(createHealthProduct(data, e, setInput))



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
                        <h2>Add new health product</h2>
                        <hr />
                        <form onSubmit={ handleHealthSubmit } method="POST" encType='multipart/form-data' >
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
                                            <input type="checkbox" value="Jumper" onChange={ handleBrandChange } /> Jumper
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Redien" onChange={ handleBrandChange } /> Redien
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Epharma" onChange={ handleBrandChange } />  Epharma
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Ingco" onChange={ handleBrandChange } />  Ingco
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Mijia" onChange={ handleBrandChange } />  Mijia
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleBrandChange } />   Xiaomi
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Xiaomi" onChange={ handleBrandChange } />   IMDK
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Arcade" onChange={ handleBrandChange } />   Arcade
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="JZIKI" onChange={ handleBrandChange } />    JZIKI
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Service</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Installment" onChange={ handleServiesChange } /> Installment
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Puja" onChange={ handleServiesChange } /> Cash Delivery
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Cash Delivery" onChange={ handleServiesChange } /> Pay JKnext
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Free Shipping" onChange={ handleServiesChange } /> Free Shipping
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
                                            <input type="checkbox" value="Bangladesh" onChange={ handleLocationsChange } /> Bangladesh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="China" onChange={ handleLocationsChange } /> China
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="USA" onChange={ handleLocationsChange } /> USA
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Japan" onChange={ handleLocationsChange } /> Japan
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Pack Size</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="1" onChange={ handlePackSizeChange } /> 1
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Country of Origin</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="China" onChange={ handleCountryOriginChange } />  China
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="India" onChange={ handleCountryOriginChange } />  India
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
                                            <input type="checkbox" value="1 Years Plus" onChange={ handleShelfLifeChange } /> 1 Years Plus
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
                                            <input type="checkbox" value="Aqua" onChange={ handleColorFamilyChange } />  Aqua
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Orange" onChange={ handleColorFamilyChange } />   Orange
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Light Yellow" onChange={ handleColorFamilyChange } />    Light Yellow
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Grow Yellow" onChange={ handleColorFamilyChange } />   Grow Yellow
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Weight</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="100 gm" onChange={ handleWeightChange } />   100 gm
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="70 gm" onChange={ handleWeightChange } />  70 gm
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="50" onChange={ handleWeightChange } />    50
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className="my-3">
                                <label htmlFor="">Photo</label>
                                <input name='photo' className='form-control w-75' onChange={ handleHealthPhoto } type="file" />
                            </div>
                            <div className="my-3">
                                <label htmlFor="">Gallery</label>
                                <input name='gallery' className='form-control w-75' onChange={ handleHealthGallery } type="file" multiple />
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

export default HealthProductscreate;