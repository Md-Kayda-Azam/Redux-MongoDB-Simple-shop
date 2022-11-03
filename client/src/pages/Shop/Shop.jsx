import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { singleProduct } from '../../redux/product/action';
import './Shop.css';
import SingleProduct from './SingleProduct';
import Skeleton from 'react-loading-skeleton'
import SingleWomensFashion from '../category/allCategoryForm/womens fashion/SingleWomensFashion';
import { womensFashionSingleProduct } from '../../redux/womensFashion/action';
import HealthModal from '../category/allCategoryForm/health/HealthModal';
import { singleHealth } from '../../redux/health/action';
import BeautyModal from '../category/allCategoryForm/beauty/BeautyModal';
import { singleBeauty } from '../../redux/beauty/action';
import MansFashionModal from '../category/allCategoryForm/mansfashion/MansFashionModal';
import { singleMansFashion } from '../../redux/mansFashion/action';
import ElectronicModal from '../category/allCategoryForm/electronics/ElectronicModal';
import { singleElectronic } from '../../redux/electronic/action';
import { singleKid } from '../../redux/kid/action';
import KidModal from '../category/allCategoryForm/kids/KidModal';



const Shop = () => { 

    const dispatch = useDispatch()
    


    // single product show
    const [single, setSingle] = useState(false);
    
    const handleSingleShow = (id) => {

        dispatch(singleProduct(id))

        setSingle(true)

    };
    const handleSingleHide = () => setSingle(false);

    // womensFashion modal
    const [wsingle, setWsingle] = useState(false);
    
    const handleWomensFashionSingleShow = (id) => {

        dispatch(womensFashionSingleProduct(id))

        setWsingle(true)

    };
    const handleWomensFashionSingleHide = () => setWsingle(false);


    // health modal
    const [hsingle, setHsingle] = useState(false);
    
    const handleHealthSingleShow = (id) => {

        dispatch(singleHealth(id))

        setHsingle(true)

    };
    const handleHealthSingleHide = () => setHsingle(false);

    // beauty modal
    const [bsingle, setBsingle] = useState(false);
    
    const handleBeautySingleShow = (id) => {

        dispatch(singleBeauty(id))

        setBsingle(true)

    };
    const handleBeauySingleHide = () => setBsingle(false);
 
    // mannsFashion modal
    const [msingle, setMsingle] = useState(false);
    
    const handleMansFashionSingleShow = (id) => {

        dispatch(singleMansFashion(id))

        setMsingle(true)

    };
    const handleMansFashionSingleHide = () => setMsingle(false);

    // electronic modal
    const [esingle, setEsingle] = useState(false);
    
    const handleElectronicsSingleShow = (id) => {

        dispatch(singleElectronic(id))

        setEsingle(true)

    };
    const handleElectronicSingleHide = () => setEsingle(false);
 
    // kid modal
    const [ksingle, setKsingle] = useState(false);
    
    const handleKidSingleShow = (id) => {

        dispatch(singleKid(id))

        setKsingle(true)

    };
    const handleKidSingleHide = () => setKsingle(false);
 



    // all products 
    const { products, skeleton, error } = useSelector(state => state.product);

    const { womenFashions } = useSelector(store => store.womensFashion)
    const { healths } = useSelector(store => store.health)
    const { beauties } = useSelector(store => store.beauty)
    const { mansFashions } = useSelector(store => store.mansFashion)
    const { electronics } = useSelector(store => store.electronic)
    const { kids } = useSelector(store => store.kid)


  return (
    <>

       
        <SingleProduct single={  single } handleSingleHide =  { handleSingleHide }  />
        <SingleWomensFashion single={  wsingle } handleSingleHide =  { handleWomensFashionSingleHide }  />
        <HealthModal single={  hsingle } handleSingleHide =  { handleHealthSingleHide }  />
        <BeautyModal single={  bsingle } handleSingleHide =  { handleBeauySingleHide }  />
        <MansFashionModal single={  msingle } handleSingleHide =  { handleMansFashionSingleHide }  />
        <ElectronicModal single={  esingle } handleSingleHide =  { handleElectronicSingleHide }  />
        <ElectronicModal single={  esingle } handleSingleHide =  { handleElectronicSingleHide }  />
        <KidModal single={  ksingle } handleSingleHide =  { handleKidSingleHide }  />
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
                <div className="col-md-3">

                    <div className="widget">
                        <h2>Category</h2>
                        <ul className='list-group'>
                            <li className='list-group-item'><Link to="/admin/product/womensFashion">Women's Fashion</Link></li>
                            <li className='list-group-item'><Link to="/admin/product/health">Health</Link></li>
                            <li className='list-group-item'><Link to="/admin/product/beauty">Beauty</Link></li>
                            <li className='list-group-item'><Link to="/admin/product/mensFashion">Man's Fashion</Link></li>
                            <li className='list-group-item'><Link to="/admin/product/electronis">Electronic</Link></li>
                            <li className='list-group-item'><Link to="/admin/product/kids">Kids</Link></li>
                        </ul>
                    </div>

                    <div className="widget">
                        <h2>Tags</h2>
                        <div className="tags">
                            <a href="#">Eid</a>
                            <a href="#">T'Shirt</a>
                            <a href="#">Hijab</a>
                        </div>
                        <div className="tags mt-3">
                            <a href="#">Phone</a>
                            <a href="#">Health</a>
                            <a href="#">Beauty</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
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
                        
                        products && products.map( (data, index) => 

                        <div className="col-md-4 shop-item mb-5">
                            <div className="card">
                                <Link to="/admin/product/single">
                                <img style={{height : '300px', objectFit : 'cover'}} className='card-img' src={`http://localhost:5050/image/product/${data.photo}`} alt="" />
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
                                    <button onClick={() => handleWomensFashionSingleShow(data._id)} className='btn btn-sm btn-info'>Quick View</button>
                                </div>
                            </div>
                        </div>

                        )


                      }
                      {
                        
                        healths && healths.map( (data, index) => 

                        <div className="col-md-4 shop-item mb-5">
                            <div className="card">
                                <Link to="/admin/product/allCategory/womensfashion/singlePage">
                                <img style={{height : '300px', objectFit : 'cover'}} className='card-img' src={`/image/healths/${data.photo}`} alt="" />
                                </Link>
                                <div className="card-body">
                                    <h3>{data.name}</h3>                                
                                </div>
                                <div className="card-footer">
                                    <p>Sale_Price : $ {data.sale_price} </p>
                                    <p>Regular_Price : $ <del>{data.regular_price}</del> </p>
                                    <button onClick={() => handleHealthSingleShow(data._id)} className='btn btn-sm btn-info'>Quick View</button>
                                </div>
                            </div>
                        </div>

                        )


                      }
                      {
                        
                        beauties && beauties.map( (data, index) => 

                        <div className="col-md-4 shop-item mb-5">
                            <div className="card">
                                <Link to="/admin/product/allCategory/womensfashion/singlePage">
                                <img style={{height : '300px', objectFit : 'cover'}} className='card-img' src={`/image/beauties/${data.photo}`} alt="" />
                                </Link>
                                <div className="card-body">
                                    <h3>{data.name}</h3>                                
                                </div>
                                <div className="card-footer">
                                    <p>Sale_Price : $ {data.sale_price} </p>
                                    <p>Regular_Price : $ <del>{data.regular_price}</del> </p>
                                    <button onClick={() => handleBeautySingleShow(data._id)} className='btn btn-sm btn-info'>Quick View</button>
                                </div>
                            </div>
                        </div>

                        )


                      }
                      {
                        
                        mansFashions && mansFashions.map( (data, index) => 

                        <div className="col-md-4 shop-item mb-5">
                            <div className="card">
                                <Link to="/admin/product/allCategory/womensfashion/singlePage">
                                <img style={{height : '300px', objectFit : 'cover'}} className='card-img' src={`/image/mansFashion/${data.photo}`} alt="" />
                                </Link>
                                <div className="card-body">
                                    <h3>{data.name}</h3>                                
                                </div>
                                <div className="card-footer">
                                    <p>Sale_Price : $ {data.sale_price} </p>
                                    <p>Regular_Price : $ <del>{data.regular_price}</del> </p>
                                    <button onClick={() => handleMansFashionSingleShow(data._id)} className='btn btn-sm btn-info'>Quick View</button>
                                </div>
                            </div>
                        </div>

                        )


                      }
                      {
                        
                        electronics && electronics.map( (data, index) => 

                        <div className="col-md-4 shop-item mb-5">
                            <div className="card">
                                <Link to="/admin/product/allCategory/womensfashion/singlePage">
                                <img style={{height : '300px', objectFit : 'cover'}} className='card-img' src={`/image/electronic/${data.photo}`} alt="" />
                                </Link>
                                <div className="card-body">
                                    <h3>{data.name}</h3>                                
                                </div>
                                <div className="card-footer">
                                    <p>Sale_Price : $ {data.sale_price} </p>
                                    <p>Regular_Price : $ <del>{data.regular_price}</del> </p>
                                    <button onClick={() => handleElectronicsSingleShow(data._id)} className='btn btn-sm btn-info'>Quick View</button>
                                </div>
                            </div>
                        </div>

                        )


                      }
                      {
                        
                        kids && kids.map( (data, index) => 

                        <div className="col-md-4 shop-item mb-5">
                            <div className="card">
                                <Link to="/admin/product/allCategory/womensfashion/singlePage">
                                <img style={{height : '300px', objectFit : 'cover'}} className='card-img' src={`/image/kids/${data.photo}`} alt="" />
                                </Link>
                                <div className="card-body">
                                    <h3>{data.name}</h3>                                
                                </div>
                                <div className="card-footer">
                                    <p>Sale_Price : $ {data.sale_price} </p>
                                    <p>Regular_Price : $ <del>{data.regular_price}</del> </p>
                                    <button onClick={() => handleKidSingleShow(data._id)} className='btn btn-sm btn-info'>Quick View</button>
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

export default Shop;