import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Beauty.css';
import Skeleton from 'react-loading-skeleton';
import { singleProduct } from '../../../redux/product/action';
import SingleProduct from '../../Shop/SingleProduct';
import BeautyModal from '../allCategoryForm/beauty/BeautyModal';
import { singleBeauty } from '../../../redux/beauty/action';




const Beauty = () => { 

    const dispatch = useDispatch()
    
    const [single, setSingle] = useState(false);
    
    const handleSingleShow = (id) => {

        dispatch(singleBeauty(id))

        setSingle(true)

    };


    const handleSingleHide = () => setSingle(false);
 

    const { beauties, skeleton, error } = useSelector(state => state.beauty);



 const handleCWBrandChange = () => {

 }


 const handleWPriceChange = () => {

 }



  return (
    <>

       
        <BeautyModal single={  single } handleSingleHide =  { handleSingleHide }  />
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
                                  <h2>Women's Beauty Tools</h2>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Brand</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Whisper
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Joya
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Freedom
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Senora
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Pax Moly
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Divas secret
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Good Virtues Co.
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Farmasi
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> SMC
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
                                <div className="widget my-2">
                                    <h2>Price Search</h2>
                                    <div className="search">
                                        <input type="range" min={10} max={ 10000 } />
                                        <input type="range" min={10} max={ 10000 } />
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
                                        <label htmlFor="">Pack Size</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 7-10
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> 13-20
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } />  20
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Small
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> 0-6
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
                                        <label htmlFor="">Shelf Life</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 1 Months - 60 Months
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> 7 - 12 Months
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 1 - 12 Weeks
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
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Aqua 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Orange 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Cream
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> White
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Weight</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 100 gm 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> 70 gm
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 50  
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
                        
                        beauties && beauties.map( (data, index) => 

                        <div className="col-md-4 shop-item mb-5">
                            <div className="card">
                                <Link to="/admin/product/single">
                                <img style={{height : '300px', objectFit : 'cover'}} className='card-img' src={`/image/beauties/${data.photo}`} alt="" />
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

export default Beauty;