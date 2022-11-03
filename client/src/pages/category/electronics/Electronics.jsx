import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Electronics.css';
import Skeleton from 'react-loading-skeleton';
import ElectronicModal from '../allCategoryForm/electronics/ElectronicModal';
import { singleElectronic } from '../../../redux/electronic/action';




const Electronics = () => { 

    const dispatch = useDispatch()
    
    const [single, setSingle] = useState(false);
    
    const handleSingleShow = (id) => {

        dispatch(singleElectronic(id))

        setSingle(true)

    };


    const handleSingleHide = () => setSingle(false);
 

    const { electronics, skeleton, error } = useSelector(state => state.electronic);



 const handleCWBrandChange = () => {

 }


 const handleWPriceChange = () => {

 }



  return (
    <>

       
        <ElectronicModal single={  single } handleSingleHide =  { handleSingleHide }  />
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
                                  <h2>Smart Phones</h2>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Brand</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Realme
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Samsung
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Xioami
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Apple
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> OPPO
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Vivo
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Nokia
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> Redmi
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
                                        <label htmlFor="">RAM Memory</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 4 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 8 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 7 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 6 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 5 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 4 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 3 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 2 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 12 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 13 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 256 MB and Below
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Battery Capacity (mAh)</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 5000 - 5999 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 4000 - 4999 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 3000 - 3999 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 6000 - 6999 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 2000 - 2999 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } />  Under 1000 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 7000 - 7999 mAh
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 1000 - 1999 mAh
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Operating System</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Android
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> IOS
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Symbian
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Storage Capacity</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 128 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 64 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 32 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 256 GB
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 625 MB and Below
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 8 GB
                                        </label>
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Warranty Type</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Brand Warranty
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> No Warranty
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> Seller Warranty
                                        </label>
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Number of SIM</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> Dual SIM
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> Single SIM
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Screen Size (inches)</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 6 Inch and Above
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> 5.1 - 5.5 Inch 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 5.6 - 6 Inch 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> 3.5 and Below
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Kids" onChange={ handleCWBrandChange } /> 3.6 - 4 Inch
                                        </label>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Camera Back (Megapixels)</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 46 - 50 MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> 11 - 15 MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 6 - 10 MP  
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 56 and Above
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 56 and Above
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 1 - 5 MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 16 - 20 MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 51 - 55 MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 31 - 35 MP
                                        </label>
                                    </div>
                            </div>

                            <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Warranty Period</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 1 Years
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> 6 Months
                                        </label>
                                    </div>
                                </div>

                                <div className="col-5">
                                    <div className="my-5">
                                        <label htmlFor="">Camera Front (Megapixels)</label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Men" onChange={ handleCWBrandChange } /> 6 - 10MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Women" onChange={ handleCWBrandChange } /> 1 - 5MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 11 - 15MP  
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 16 - 20MP 
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 31 - 35MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 46 - 50MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 36 - 40MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 41 - 45MP
                                        </label>
                                        <br />
                                        <label>
                                            <input type="checkbox" value="Electronic" onChange={ handleCWBrandChange } /> 21 - 25MP
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
                        
                        electronics && electronics.map( (data, index) => 

                        <div className="col-md-4 shop-item mb-5">
                            <div className="card">
                                <Link to="/admin/product/single">
                                <img style={{height : '300px', objectFit : 'cover'}} className='card-img' src={`/image/electronic/${data.photo}`} alt="" />
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

export default Electronics;