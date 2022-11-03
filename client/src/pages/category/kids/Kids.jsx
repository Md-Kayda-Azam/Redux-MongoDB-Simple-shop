import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Kids.css';
import Skeleton from 'react-loading-skeleton';
import { singleProduct } from '../../../redux/product/action';
import SingleProduct from '../../Shop/SingleProduct';
import KidModal from '../allCategoryForm/kids/KidModal';
import { singleKid } from '../../../redux/kid/action';




const Kids = () => { 

    const dispatch = useDispatch()
    
    const [single, setSingle] = useState(false);
    
    const handleSingleShow = (id) => {

        dispatch(singleKid(id))

        setSingle(true)

    };


    const handleSingleHide = () => setSingle(false);
 

    const { kids, skeleton, error } = useSelector(state => state.kid);



 const handleCWBrandChange = () => {

 }


 const handleWPriceChange = () => {

 }



  return (
    <>

       
        <KidModal single={  single } handleSingleHide =  { handleSingleHide }  />
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
                                  <h2>Baby Personal Care</h2>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Brand</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Just for baby
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Aveeno
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Meril
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Mamaearth
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Pigeon
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Kodomo
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> REL
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Nice born
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Livingate
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Colgate
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
                                        <label htmlFor="">Color Family</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Multicolor
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Pink 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Blue 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> White
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Yellow
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Yellow
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Light green
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Light Yellow
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Gold
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Red
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Olive
                                        </label>
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Shelf Life</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 1 Months - 60 Months
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> 1 Years - 5 Years
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> 1 Week - 12 Weeks
                                        </label>
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Pack Size</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 1
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 2
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 3
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 4
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 5
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Country of Origin</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> China
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Bangladesh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> France
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Korea
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Ireland
                                        </label>
                                    </div>
                                </div>
                     </div>
                </div>
                <div className="col-md-8">
                    <div className="row shop-area">


                        {
                            skeleton && (
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
                            
                            kids && kids.map( (data, index) => 

                            <div className="col-md-4 shop-item mb-5">
                                <div className="card">
                                    <Link to="/admin/product/single">
                                    <img style={{height : '300px', objectFit : 'cover'}} className='card-img' src={`/image/kids/${data.photo}`} alt="" />
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

export default Kids;