import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import swal from "sweetalert";
import { createKidProduct } from '../../../../redux/kid/action';
import { createProduct } from '../../../../redux/product/action';




const KidsProductsCreate = ({ single, handleSingleHide }) => {



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
        colorFamilys : [],
        shelfLife : [],
        packSizes : [],
        countryofOrigin : []
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
// handle tags change
const handleColorFamilyChange = (e) => {

    if( e.target.checked){
        
        let cats = input.colorFamilys;
        cats.push(e.target.value);
        setInput((prevState) => ({
            ...prevState,
            colorFamilys : cats
        }));

    }else{

        let tags = input.colorFamilys;
        const newTags = tags.filter( data => data !== e.target.value );
        setInput((prevState) => ({
            ...prevState,
            colorFamilys : newTags
        }));


    }

}
// handle tags change
const handleShelfLifeChange = (e) => {

    if( e.target.checked){
        
        let cats = input.shelfLife;
        cats.push(e.target.value);
        setInput((prevState) => ({
            ...prevState,
            shelfLife : cats
        }));

    }else{

        let tags = input.shelfLife;
        const newTags = tags.filter( data => data !== e.target.value );
        setInput((prevState) => ({
            ...prevState,
            shelfLife : newTags
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
        
        let cats = input.countryofOrigin;
        cats.push(e.target.value);
        setInput((prevState) => ({
            ...prevState,
            countryofOrigin : cats
        }));

    }else{

        let tags = input.countryofOrigin;
        const newTags = tags.filter( data => data !== e.target.value );
        setInput((prevState) => ({
            ...prevState,
            countryofOrigin : newTags
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
        data.append('colorFamilys', input.colorFamilys);
        data.append('shelfLife', input.shelfLife);
        data.append('packSizes', input.packSizes);
        data.append('countryofOrigin', input.countryofOrigin);

        for( let i = 0; i < input.gall.length ; i++){
            data.append('gallery', input.gall[i])
        }

        if( input.name || input.regular_price){


            dispatch(createKidProduct(data));

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
                colorFamilys : [],
                shelfLife : [],
                packSizes : [],
                countryofOrigin : []
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
                        <h2>All baby care products</h2>
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
                                                    <input type="checkbox" value="Just for baby" onChange={ handleBrandChange } /> Just for baby
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Aveeno" onChange={ handleBrandChange } />  Aveeno
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Meril" onChange={ handleBrandChange } /> Meril
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Mamaearth" onChange={ handleBrandChange } />   Mamaearth
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Pigeon" onChange={ handleBrandChange } />  Pigeon
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value=" Kodomo" onChange={ handleBrandChange } />     Kodomo
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="REL" onChange={ handleBrandChange } />     REL
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Nice born" onChange={ handleBrandChange } />     Nice born
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value=" Livingate" onChange={ handleBrandChange } />      Livingate
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="Colgate" onChange={ handleBrandChange } />     Colgate
                                                </label>
                                                <br />
                                                <label>
                                                    <input type="checkbox" value="No Brand" onChange={ handleBrandChange } />     No Brand
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
                                        <label htmlFor="">Color Family</label>
                                        <hr />
                                        <label>
                                            <input type="checkbox" value="Multicolor" onChange={ handleColorFamilyChange } />  Multicolor
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Pink" onChange={ handleColorFamilyChange } />  Pink
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Blue" onChange={ handleColorFamilyChange } />    Blue
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="White" onChange={ handleColorFamilyChange } />    White
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Yellow" onChange={ handleColorFamilyChange } />   Yellow
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Light green" onChange={ handleColorFamilyChange } />    Light green
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Light Yellow" onChange={ handleColorFamilyChange } />  Light Yellow
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Gold" onChange={ handleColorFamilyChange } />   Gold
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Red" onChange={ handleColorFamilyChange } />    Red
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Olive" onChange={ handleColorFamilyChange } />    Olive
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
                                            <input type="checkbox" value=" 1 Years - 5 Years" onChange={ handleShelfLifeChange } />   1 Years - 5 Years
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="1 Week - 12 Weeks" onChange={ handleShelfLifeChange } />  1 Week - 12 Weeks
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
                                        <br />
                                        <label>
                                            <input type="checkbox" value="2" onChange={ handlePackSizeChange } /> 2
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="3" onChange={ handlePackSizeChange } /> 3
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="4" onChange={ handlePackSizeChange } /> 4
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="5" onChange={ handlePackSizeChange } /> 5
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
                                            <input type="checkbox" value="Bangladesh" onChange={ handleCountryOriginChange } />  Bangladesh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="France" onChange={ handleCountryOriginChange } />   France
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Korea" onChange={ handleCountryOriginChange } />   Korea
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Ireland" onChange={ handleCountryOriginChange } />    Ireland
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

export default KidsProductsCreate;