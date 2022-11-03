import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import swal from "sweetalert";
import { createWomensFashionProduct } from '../../../../redux/womensFashion/action';




const WomensProductsCreate = ({ single, handleSingleHide }) => {



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
        colorFamilys : [],
        mainMaterials : [],
        warrantyTypes : [],
        hijabStyles : [],
        patterns : [],
        listedYearSeasons : [],
    })

    // update form fields state
    const handleInputChange = (e) => {

        setInput((prevState) => ({
            ...prevState,
         [e.target.name] : e.target.value
        }))

    }

    

    // handle Brands change
    const handleBrandChange = (e) => {

        if( e.target.checked){
            
            let bds = input.brands;
            bds.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                brands : bds
            }));

        }else{
            let bds = input.brands;
            const newBds = bds.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                brands : newBds
            }));

        }

    }
    // handle tags change
    const handleServiceChange = (e) => {

        if( e.target.checked){
            
            let sers = input.services;
            sers.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                services : sers
            }));

        }else{

            let sers = input.services;
            const newSers= sers.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                services : newSers
            }));


        }

    }
    // handle locations change
    const handleLocationChange = (e) => {

        if( e.target.checked){
            
            let locations = input.locations;
            locations.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                locations : locations
            }));

        }else{

            let locs = input.locations;
            const newLocs= locs.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                locations : newLocs
            }));


        }

    }
    // handle locations change
    const handleSizeChange = (e) => {

        if( e.target.checked){
            
            let sizs = input.sizes;
            sizs.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                sizes : sizs
            }));

        }else{

            let sizs = input.sizes;
            const newSizs= sizs.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                sizes : newSizs
            }));


        }

    }
    // handle ColorFamily change
    const handleColorFamilyhange = (e) => {

        if( e.target.checked){
            
            let colorFs = input.colorFamilys;
            colorFs.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                colorFamilys : colorFs
            }));

        }else{

            let colorFs = input.colorFamilys;
            const newColorFs= colorFs.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                colorFamilys : newColorFs
            }));


        }

    }
    // handle MainMaterial change
    const handleMainMaterialChange = (e) => {

        if( e.target.checked){
            
            let mainMatls = input.mainMaterials;
            mainMatls.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                mainMaterials : mainMatls
            }));

        }else{

            let mainMatls = input.mainMaterials;
            const newMainMatls= mainMatls.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                mainMaterials : newMainMatls
            }));


        }

    }
    // handle WarrantyType change
    const handleWarrantyTypeChange = (e) => {

        if( e.target.checked){
            
            let watTypes = input.warrantyTypes;
            watTypes.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                warrantyTypes : watTypes
            }));

        }else{

            let watTypes = input.warrantyTypes;
            const newWatTypes= watTypes.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                warrantyTypes : newWatTypes
            }));


        }

    }
    // handle HijabStyle change
    const handleHijabStyleChange = (e) => {

        if( e.target.checked){
            
            let hijStes = input.hijabStyles;
            hijStes.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                hijabStyles : hijStes
            }));

        }else{

            let hijStes = input.hijabStyles;
            const newHijStes= hijStes.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                hijabStyles : newHijStes
            }));


        }

    }
    // handle Pattern change
    const handlePatternChange = (e) => {

        if( e.target.checked){
            
            let pats = input.patterns;
            pats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                patterns : pats
            }));

        }else{

            let pats = input.patterns;
            const newPats= pats.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                patterns : newPats
            }));


        }

    }
    // handle ListedYearSeason change
    const handleListedYearSeasonChange = (e) => {

        if( e.target.checked){
            
            let lisarSeons = input.listedYearSeasons;
            lisarSeons.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                patterns : lisarSeons
            }));

        }else{

            let lisarSeons = input.listedYearSeasons;
            const newLisarSeons= lisarSeons.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                listedYearSeasons : newLisarSeons
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
        data.append('colorFamilys', input.colorFamilys);
        data.append('mainMaterials', input.mainMaterials);
        data.append('warrantyTypes', input.warrantyTypes);
        data.append('hijabStyles', input.hijabStyles);
        data.append('patterns', input.patterns);
        data.append('listedYearSeasons', input.listedYearSeasons);


        for( let i = 0; i < input.gall.length ; i++){
            data.append('gallery', input.gall[i])
        }

        if( input.name || input.regular_price){


            dispatch(createWomensFashionProduct(data, e, setInput));

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
                        <h2>Add new hijab product</h2>
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
                                            <input type="checkbox" value="Hamim Fashion" onChange={ handleBrandChange } /> Hamim Fashion
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Golam Touch" onChange={ handleBrandChange } /> Golam Touch
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Nina Style" onChange={ handleBrandChange } /> Nina Style
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Elegant" onChange={ handleBrandChange } />  Elegant
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value=" Dubai Bedding" onChange={ handleBrandChange } /> Dubai Bedding
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
                                        <label htmlFor="">Size</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="36" onChange={ handleSizeChange } />  36
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="42" onChange={ handleSizeChange } />  42
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="44" onChange={ handleSizeChange } />  44
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="52" onChange={ handleSizeChange } /> 52
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="54" onChange={ handleSizeChange } />  54
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="56" onChange={ handleSizeChange } />  56
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Color Family</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Black" onChange={ handleColorFamilyhange } />  Black
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Maroon" onChange={ handleColorFamilyhange } /> Maroon
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="White" onChange={ handleColorFamilyhange } />  White
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Olive" onChange={ handleColorFamilyhange } />   Olive
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Red" onChange={ handleColorFamilyhange } />   Red
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Coffee" onChange={ handleColorFamilyhange } />    Coffee
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Navy Blue" onChange={ handleColorFamilyhange } />   Navy Blue
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Pink" onChange={ handleColorFamilyhange } />   Pink
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Main Material</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Georgette" onChange={ handleMainMaterialChange } />  Georgette
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Cotton" onChange={ handleMainMaterialChange } /> Cotton
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Acrylic Wool" onChange={ handleMainMaterialChange } />   Acrylic Wool
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Chiffon" onChange={ handleMainMaterialChange } />   Chiffon
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Silk" onChange={ handleMainMaterialChange } />   Silk
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Linen" onChange={ handleMainMaterialChange } />    Linen
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Viscose" onChange={ handleMainMaterialChange } />   Viscose
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Weightless Georgette" onChange={ handleMainMaterialChange } />    Weightless Georgette
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
                                        <label htmlFor="">Hijab Style</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Hijab Instant" onChange={ handleHijabStyleChange } />  Hijab Instant
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Hijab Square" onChange={ handleHijabStyleChange } />Hijab Square
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Inners" onChange={ handleHijabStyleChange } />  Inners
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Long Shawl" onChange={ handleHijabStyleChange } />   Long Shawl
                                        </label>
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Pattern</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Embroidery" onChange={ handlePatternChange } />   Aari Embroidery
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Plain" onChange={ handlePatternChange } />  Plain
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Check" onChange={ handlePatternChange } />   Check
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Floral" onChange={ handlePatternChange } />   Floral
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Stripe" onChange={ handlePatternChange } />   Stripe
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Wave point" onChange={ handlePatternChange } />    Wave point
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Sequence" onChange={ handlePatternChange } />    Sequence
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Listed Year Season</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="2015" onChange={ handleListedYearSeasonChange } />    2015
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Winter" onChange={ handleListedYearSeasonChange } />  Winter
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Summer" onChange={ handleListedYearSeasonChange } />   Summer
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="2020" onChange={ handleListedYearSeasonChange } />    2020
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Spring" onChange={ handleListedYearSeasonChange } />   Spring
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

export default WomensProductsCreate;