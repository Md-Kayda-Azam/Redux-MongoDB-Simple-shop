import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import swal from "sweetalert";
import { createElectronicProduct } from '../../../../redux/electronic/action';
import { createProduct } from '../../../../redux/product/action';




const ElectronicsProductsCreate = ({ single, handleSingleHide }) => {



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
    const handleRAMMemoryChange = (e) => {

        if( e.target.checked){
            
            let cats = input.ramMemory;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                ramMemory : cats
            }));

        }else{

            let tags = input.ramMemory;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                ramMemory : newTags
            }));


        }

    }
    // handle tags change
    const handleBatteryCapacityChange = (e) => {

        if( e.target.checked){
            
            let cats = input.batteryCapacitymAh;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                batteryCapacitymAh : cats
            }));

        }else{

            let tags = input.batteryCapacitymAh;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                batteryCapacitymAh : newTags
            }));


        }

    }
    // handle tags change
    const handleOperatingSystemChange = (e) => {

        if( e.target.checked){
            
            let cats = input.operatingSystem;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                operatingSystem : cats
            }));

        }else{

            let tags = input.operatingSystem;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                operatingSystem : newTags
            }));


        }

    }
    // handle tags change
    const handleStorageCapacityChange = (e) => {

        if( e.target.checked){
            
            let cats = input.storageCapacity;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                storageCapacity : cats
            }));

        }else{

            let tags = input.storageCapacity;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                storageCapacity : newTags
            }));


        }

    }
    // handle tags change
    const handleWarrantyTypeChange = (e) => {

        if( e.target.checked){
            
            let cats = input.warrantyType;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                warrantyType : cats
            }));

        }else{

            let tags = input.warrantyType;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                warrantyType : newTags
            }));


        }

    }
    // handle tags change
    const handleNumberSIMChange = (e) => {

        if( e.target.checked){
            
            let cats = input.numberofSIM;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                numberofSIM : cats
            }));

        }else{

            let tags = input.numberofSIM;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                numberofSIM : newTags
            }));


        }

    }
    // handle tags change
    const handleScreenSizeChange = (e) => {

        if( e.target.checked){
            
            let cats = input.screenSizeinches;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                screenSizeinches : cats
            }));

        }else{

            let tags = input.screenSizeinches;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                screenSizeinches : newTags
            }));


        }

    }
    // handle tags change
    const handleCameraBackChange = (e) => {

        if( e.target.checked){
            
            let cats = input.cameraBackMegapixels;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                cameraBackMegapixels : cats
            }));

        }else{

            let tags = input.cameraBackMegapixels;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                cameraBackMegapixels : newTags
            }));


        }

    }
    // handle tags change
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
    // handle tags change
    const handleCameraFrontChange = (e) => {

        if( e.target.checked){
            
            let cats = input.cameraFrontMegapixels;
            cats.push(e.target.value);
            setInput((prevState) => ({
                ...prevState,
                cameraFrontMegapixels : cats
            }));

        }else{

            let tags = input.cameraFrontMegapixels;
            const newTags = tags.filter( data => data !== e.target.value );
            setInput((prevState) => ({
                ...prevState,
                cameraFrontMegapixels : newTags
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
        data.append('ramMemory', input.ramMemory);
        data.append('batteryCapacitymAh', input.batteryCapacitymAh);
        data.append('operatingSystem', input.operatingSystem);
        data.append('storageCapacity', input.storageCapacity);
        data.append('warrantyType', input.warrantyType);
        data.append('numberofSIM', input.numberofSIM);
        data.append('screenSizeinches', input.screenSizeinches);
        data.append('cameraBackMegapixels', input.cameraBackMegapixels);
        data.append('warrantyType', input.warrantyType);
        data.append('cameraFrontMegapixels', input.cameraFrontMegapixels);

        for( let i = 0; i < input.gall.length ; i++){
            data.append('gallery', input.gall[i])
        }

        if( input.name || input.regular_price){


            dispatch(createElectronicProduct(data, e, setInput));

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
                        <h2>Add new smart phone product</h2>
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
                                                    <input type="checkbox" value="Samsung" onChange={ handleBrandChange } /> Samsung
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Realme" onChange={ handleBrandChange } />  Realme
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Tecno" onChange={ handleBrandChange } />   Tecno
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Xioami" onChange={ handleBrandChange } />  Xioami
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Infinix" onChange={ handleBrandChange } />  Infinix
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Oppo" onChange={ handleBrandChange } />    Oppo
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Vivo" onChange={ handleBrandChange } />    Vivo
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Apple" onChange={ handleBrandChange } />    Apple
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Redmi" onChange={ handleBrandChange } />    Redmi
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Nokia" onChange={ handleBrandChange } />    Nokia
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
                                        <label htmlFor="">RAM Memory</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="256MB and Below" onChange={ handleRAMMemoryChange } /> 256MB and Below
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="2GB" onChange={ handleRAMMemoryChange } /> 2GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="3GB" onChange={ handleRAMMemoryChange } /> 3GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="4GB" onChange={ handleRAMMemoryChange } /> 4GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="5GB" onChange={ handleRAMMemoryChange } /> 5GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="6GB" onChange={ handleRAMMemoryChange } /> 6GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="7GB" onChange={ handleRAMMemoryChange } /> 7GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="8GB" onChange={ handleRAMMemoryChange } /> 8GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="12GB" onChange={ handleRAMMemoryChange } /> 12GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="3GB" onChange={ handleRAMMemoryChange } /> 13GB
                                        </label>
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Battery Capacity (mAh)</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="5000 - 5999 mAh" onChange={ handleBatteryCapacityChange } />  5000 - 5999 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="4000 - 4999 mAh" onChange={ handleBatteryCapacityChange } />  4000 - 4999 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="3000 - 3999 mAh" onChange={ handleBatteryCapacityChange } />    3000 - 3999 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="6000 - 6999 mAh" onChange={ handleBatteryCapacityChange } />     6000 - 6999 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="2000 - 2999 mAh" onChange={ handleBatteryCapacityChange } />    2000 - 2999 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Under 1000 mAh" onChange={ handleBatteryCapacityChange } />   Under 1000 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="7000 - 7999 mAh" onChange={ handleBatteryCapacityChange } />   7000 - 7999 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="1000 - 1999 mAh" onChange={ handleBatteryCapacityChange } />    1000 - 1999 mAh
                                        </label>
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Operating System</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Android" onChange={ handleOperatingSystemChange } />   Android
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="IOS" onChange={ handleOperatingSystemChange } />  IOS
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Symbian" onChange={ handleOperatingSystemChange } />  Symbian
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Storage Capacity</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="128 GB" onChange={ handleStorageCapacityChange } />   128 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="64 GB" onChange={ handleStorageCapacityChange } />   64 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="32 GB" onChange={ handleStorageCapacityChange } />   32 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="256 GB" onChange={ handleStorageCapacityChange } />    256 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="625 MB and Below" onChange={ handleStorageCapacityChange } />    625 MB and Below
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="8 GB" onChange={ handleStorageCapacityChange } />     8 GB
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
                                            <input type="checkbox" value="Brand Warranty" onChange={ handleWarrantyTypeChange } />  Brand Warranty
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Seller Warranty" onChange={ handleWarrantyTypeChange } />  Seller Warranty
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Number of SIM</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Dual SIM" onChange={ handleNumberSIMChange } />   Dual SIM
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Single SIM" onChange={ handleNumberSIMChange } /> Single SIM
                                        </label>
                                    </div>
                                </div>


                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Screen Size (inches)</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="6 Inch and Above" onChange={ handleScreenSizeChange } />   6 Inch and Above
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="5.1 - 5.5 Inch" onChange={ handleScreenSizeChange } />  5.1 - 5.5 Inch
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="5.6 - 6 Inch" onChange={ handleScreenSizeChange } />  5.6 - 6 Inch
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="3.5 and Below" onChange={ handleScreenSizeChange } /> 3.5 and Below
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="3.6 - 4 Inch" onChange={ handleScreenSizeChange } /> 3.6 - 4 Inch
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Camera Back (Megapixels)</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="46 - 50 MP" onChange={ handleCameraBackChange } />   46 - 50 MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="11 - 15 MP" onChange={ handleCameraBackChange } />  11 - 15 MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="6 - 10 MP" onChange={ handleCameraBackChange } />   6 - 10 MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="56 and Above" onChange={ handleCameraBackChange } /> 56 and Above
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="1 - 5 MP" onChange={ handleCameraBackChange } />  1 - 5 MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="16 - 20 MP" onChange={ handleCameraBackChange } />   16 - 20 MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="51 - 55 MP" onChange={ handleCameraBackChange } />    51 - 55 MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="31 - 35 MP" onChange={ handleCameraBackChange } />    31 - 35 MP
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Warranty Period</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="6 Months" onChange={ handleWarrantyPeriodChange } />   6 Months
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="1 Year" onChange={ handleWarrantyPeriodChange } /> 1 Year
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-2">
                                        <label htmlFor="">Camera Front (Megapixels)</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="6 - 10MP" onChange={ handleCameraFrontChange } />   6 - 10MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="1 - 5 10MP" onChange={ handleCameraFrontChange } /> 1 - 5 10MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="11 - 15MP" onChange={ handleCameraFrontChange } /> 11 - 15MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="16 - 20MP" onChange={ handleCameraFrontChange } /> 16 - 20MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="31 - 35 10MP" onChange={ handleCameraFrontChange } /> 31 - 35 10MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="46 - 50 10MP" onChange={ handleCameraFrontChange } /> 46 - 50 10MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="36 - 40 10MP" onChange={ handleCameraFrontChange } /> 36 - 40 10MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="41 - 45 10MP" onChange={ handleCameraFrontChange } /> 41 - 45 10MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="21 - 25 10MP" onChange={ handleCameraFrontChange } /> 21 - 25 10MP
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

export default ElectronicsProductsCreate;