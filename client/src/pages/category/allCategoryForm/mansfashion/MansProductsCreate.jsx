import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import swal from "sweetalert";
import { createMansFashionProduct } from '../../../../redux/mansFashion/action';
import { createProduct } from '../../../../redux/product/action';




const MansProductsCreate = ({ single, handleSingleHide }) => {



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
        sizes : [],
        colorFamily : [],
        mainMaterial : [],
        warrantyTypes : [],
        teeNeckline : [],
        teeSleeveLength : [],
        warrantyPeriod : [],
    })

    // update form fields state
    const handleInputChange = (e) => {

        setInput((prevState) => ({
            ...prevState,
         [e.target.name] : e.target.value
        }))
    }

    // handle category change
    const handleBrandChange = (e) => {

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
    const handleTagsChange = (e) => {

        if( e.target.checked){
            
            let cats = input.tags;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                category : cats
            }));

        }else{

            let tags = input.tags;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                tags : newTags
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

    // size
    const handleSizeChange = (e) => {

        if( e.target.checked){
            
            let cats = input.sizes;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                sizes : cats
            }));

        }else{

            let tags = input.sizes;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                sizes : newTags
            }));


        }

    }
    // color family
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
    // color family
    const handleMainMaterialChange = (e) => {

        if( e.target.checked){
            
            let cats = input.mainMaterial;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                mainMaterial : cats
            }));

        }else{

            let tags = input.mainMaterial;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                mainMaterial : newTags
            }));


        }

    }
    // color family
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
    // color family
    const handleTeeNecklineChange = (e) => {

        if( e.target.checked){
            
            let cats = input.mainMaterial;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                mainMaterial : cats
            }));

        }else{

            let tags = input.mainMaterial;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                mainMaterial : newTags
            }));


        }

    }
    // color family
    const handleTeeSleeveLengthChange = (e) => {

        if( e.target.checked){
            
            let cats = input.teeNeckline;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                teeNeckline : cats
            }));

        }else{

            let tags = input.teeNeckline;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                teeNeckline : newTags
            }));


        }

    }
    // color family
    const handleWarrantyPeriodChange = (e) => {

        if( e.target.checked){
            
            let cats = input.warrantyPeriod;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                warrantyPeriod : cats
            }));

        }else{

            let tags = input.warrantyPeriod;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                warrantyPeriod : newTags
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
        data.append('brands', input.brands);
        data.append('services', input.services);
        data.append('locations', input.locations);
        data.append('sizes', input.sizes);
        data.append('colorFamily', input.colorFamily);
        data.append('mainMaterial', input.mainMaterial);
        data.append('warrantyTypes', input.warrantyTypes);
        data.append('teeNeckline', input.teeNeckline);
        data.append('teeSleeveLength', input.teeSleeveLength);
        data.append('warrantyPeriod', input.warrantyPeriod);

        for( let i = 0; i < input.gall.length ; i++){
            data.append('gallery', input.gall[i])
        }

        if( input.name || input.regular_price){


            dispatch(createMansFashionProduct(data));

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
                colorFamily : [],
                mainMaterial : [],
                warrantyTypes : [],
                teeNeckline : [],
                teeSleeveLength : [],
                warrantyPeriod : [],
            })
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
                        <h2>Add new T'Shirt product</h2>
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
                                            <input type="checkbox" value="Manfare" onChange={ handleBrandChange } /> Manfare
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Fabrilife" onChange={ handleBrandChange } />  Fabrilife
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Bangla mart" onChange={ handleBrandChange } />  Bangla mart
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="LEEBUS" onChange={ handleBrandChange } />  LEEBUS
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="IELGY" onChange={ handleBrandChange } />  IELGY
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Stone Rose" onChange={ handleBrandChange } />    Stone Rose
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
                                            <input type="checkbox" value="China" onChange={ handleLocationChange } /> China
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="USA" onChange={ handleLocationChange } /> USA
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Japan" onChange={ handleLocationChange } /> Japan
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor=""> Size</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="M" onChange={ handleSizeChange } /> M
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="L" onChange={ handleSizeChange } /> L
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="XL" onChange={ handleSizeChange } /> XL
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="X" onChange={ handleSizeChange } /> X
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="2XL" onChange={ handleSizeChange } /> 2XL
                                        </label>
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Color Family</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Black" onChange={ handleColorFamilyChange } />  Black
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Maroon" onChange={ handleColorFamilyChange } />  Maroon
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="White" onChange={ handleColorFamilyChange } />   White
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Olive" onChange={ handleColorFamilyChange } />    Olive
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Red" onChange={ handleColorFamilyChange } />   Red
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Coffee" onChange={ handleColorFamilyChange } />   Coffee
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Navy Blue" onChange={ handleColorFamilyChange } />   Navy Blue
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Pink" onChange={ handleColorFamilyChange } />   Pink
                                        </label>
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Main Material</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Polyester" onChange={ handleMainMaterialChange } />  Polyester
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Cotton" onChange={ handleMainMaterialChange } />  Cotton
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Jersey" onChange={ handleMainMaterialChange } />  Jersey
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Poly-cotton" onChange={ handleMainMaterialChange } />   Poly-cotton
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Silk" onChange={ handleMainMaterialChange } />  Silk
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Mesh" onChange={ handleMainMaterialChange } />  Mesh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Metal" onChange={ handleMainMaterialChange } />  Metal
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Nylon" onChange={ handleMainMaterialChange } />   Nylon
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
                                        <label htmlFor="">Tee Neckline</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Round" onChange={ handleTeeNecklineChange } />  Round
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Collar" onChange={ handleTeeNecklineChange } />  Collar
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="V-neck" onChange={ handleTeeNecklineChange } />   V-neck
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Grandad" onChange={ handleTeeNecklineChange } />   Grandad
                                        </label>
                                    </div>
                                </div>


                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Tee Sleeve Length</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Short" onChange={ handleTeeSleeveLengthChange } />   Short
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Long" onChange={ handleTeeSleeveLengthChange } /> Long
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Sleeveless" onChange={ handleTeeSleeveLengthChange } /> Sleeveless
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Three quarter" onChange={ handleTeeSleeveLengthChange } /> Three quarter
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Warranty Period</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="1 Months" onChange={ handleWarrantyPeriodChange } />   1 Months
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="life time Warranty" onChange={ handleWarrantyPeriodChange } /> life time Warranty
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="3 Months" onChange={ handleWarrantyPeriodChange } />  3 Months
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="7 Months" onChange={ handleWarrantyPeriodChange } />  7 Months
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="2 Months" onChange={ handleWarrantyPeriodChange } />  2 Months
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

export default MansProductsCreate;