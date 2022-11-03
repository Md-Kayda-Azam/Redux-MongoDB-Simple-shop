import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './WomensFashion.css';
import Skeleton from 'react-loading-skeleton';
import SingleWomensFashion from '../allCategoryForm/womens fashion/SingleWomensFashion';
import { womensFashionSingleProduct } from '../../../redux/womensFashion/action';




const WomensFashion = () => { 

    const dispatch = useDispatch()
    
    const [single, setSingle] = useState(false);
    
    const handleSingleShow = (id) => {

        dispatch(womensFashionSingleProduct(id))

        setSingle(true)

    };


    const handleSingleHide = () => setSingle(false);
 

    const { womenFashions, womensFashionSkeleton, error } = useSelector(state => state.womensFashion);



 const handleCWBrandChange = () => {

 }


 const handleWPriceChange = () => {

 }



  return (
    <>

       
        <SingleWomensFashion single={  single } handleSingleHide =  { handleSingleHide }  />
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to="/">
                            <img src="https://i.etsystatic.com/9677300/r/il/edb9a9/1988747599/il_fullxfull.1988747599_4ory.jpg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="menu-list">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><a href="#">Blog</a></li>
                                <li><Link to="/">Shop</Link></li>
                                <li><Link to="/admin/product">Admin</Link></li>
                                <li><a href="#">Contact</a></li>
                                <div className="search">
                                <input className='form-control' type="search" name="" id="" placeholder='search products'/>
                                <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                                </div>
                                <li><a href="#">SIGN UP/LOGIN</a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                <li><a href="#">Cart</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container my-5 shop'>
            <div className="row">
                <div className="col-md-4">

                        <div className="widget">
                                  <h2>Women's Hijab Fashion</h2>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Brand</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Hamim Fashion
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Golam Touch
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Nina Style
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Elegant
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Dubai Bedding 
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Service</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Installment 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Cash Delivery
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Pay JKnext 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Free Shipping
                                        </label>
                                    </div>
                                </div>
                                <div className="wedget">
                                        <div className="col-5">
                                        <label htmlFor="">Price</label>
                                            <div className="my-1 d-flex">
                                                <input className='form-control' type="number" placeholder='min'/> -
                                                <input className='form-control'  type="number" placeholder='max'/>
                                                <a href="#" id='price'><i class="fa fa-play" aria-hidden="true"></i></a>
                                            </div>
                                            <div className="my-1 d-flex">
                                                <input type="range" placeholder='min'/> 
                                                <input type="range" placeholder='max'/>
                                            </div>
                                        </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Location</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Bangladesh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> China
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> USA 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Japan
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Size</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 36
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> 42
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 44 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> 52
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> 54
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> 56
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Color Family</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Black
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Maroon
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> White 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Olive
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Red
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Coffee
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Navy Blue
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Pink
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Main Material</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Georgette
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Cotton
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Acrylic Wool 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Chiffon
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Silk
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Linen
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Viscose
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Weightless Georgette
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Warranty Type</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> No Warranty 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Seller Warranty Type
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Local seler warranty  
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Hijab Style</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Hijab Instant
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Hijab Square
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Inners 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Long Shawl
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Pattern</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Aari Embroidery
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Plain 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Check 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Floral
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Stripe
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Wave point
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } />  Sequence
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Listed Year Season</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 2015
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Winter
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Summer 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> 2020
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Spring
                                        </label>
                                    </div>
                            </div>
                     </div>
                </div>
                <div className="col-md-8">
                    <div className="row shop-area">


                        {
                            womensFashionSkeleton &&  (
                                <>
                                
                                <div className="col-md-4 shop-item mb-5">
                                    <div className="card">
                                        <Skeleton height={310}/>
                                        <Skeleton height={20}/>
                                        <Skeleton height={3}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={50} width={150}/>
                                    </div>
                                </div>
                                <div className="col-md-4 shop-item mb-5">
                                    <div className="card">
                                        <Skeleton height={310}/>
                                        <Skeleton height={20}/>
                                        <Skeleton height={3}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={50} width={150}/>
                                    </div>
                                </div>
                                <div className="col-md-4 shop-item mb-5">
                                    <div className="card">
                                        <Skeleton height={310}/>
                                        <Skeleton height={20}/>
                                        <Skeleton height={3}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={50} width={150}/>
                                    </div>
                                </div>
                                <div className="col-md-4 shop-item mb-5">
                                    <div className="card">
                                        <Skeleton height={310}/>
                                        <Skeleton height={20}/>
                                        <Skeleton height={3}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={50} width={150}/>
                                    </div>
                                </div>
                                <div className="col-md-4 shop-item mb-5">
                                    <div className="card">
                                        <Skeleton height={310}/>
                                        <Skeleton height={20}/>
                                        <Skeleton height={3}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={50} width={150}/>
                                    </div>
                                </div>
                                <div className="col-md-4 shop-item mb-5">
                                    <div className="card">
                                        <Skeleton height={310}/>
                                        <Skeleton height={20}/>
                                        <Skeleton height={3}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={50} width={150}/>
                                    </div>
                                </div>
                                <div className="col-md-4 shop-item mb-5">
                                    <div className="card">
                                        <Skeleton height={310}/>
                                        <Skeleton height={20}/>
                                        <Skeleton height={3}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={30} width={160}/>
                                        <Skeleton height={50} width={150}/>
                                    </div>
                                </div>
                                

                                </>

                            )
                        }

                      {
                        
                        womenFashions && womenFashions.map( (data, index) => 

                        <div className="col-md-4 shop-item mb-5">
                            <div className="card">
                                <Link to="/admin/product/allCategory/womensfashion/singlePage">
                                <img style={{height : '300px', objectFit : 'cover'}} className='card-img' src={`http://localhost:5050/image/womensFashion/${data.photo}`} alt="" />
                                </Link>
                                <div className="card-body">
                                    <h3>{data.name}</h3>                                
                                </div>
                                <div className="card-footer">
                                    <p>Sale_Price : $ {data.sale_price} </p>
                                    <p>Regular_Price : $ <del>{data.regular_price}</del> </p>
                                    <button onClick={() => handleSingleShow(data._id)} className='btn btn-sm btn-info'>Quick View</button>
                                </div>
                            </div>
                        </div>

                        )


                      }

                        


                    </div>
                </div>
            </div>
        </div>


    </>
  )
};

export default WomensFashion;