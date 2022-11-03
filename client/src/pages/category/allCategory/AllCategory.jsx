import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './AllCategory.css';
import swal from 'sweetalert';
import CaregoryCreate from './CaregoryCreate';
import { womensFashionDeleteProduct, womensFashionSingleProduct } from '../../../redux/womensFashion/action';
import SingleWomensFashion from '../allCategoryForm/womens fashion/SingleWomensFashion';
import BeautyModal from '../allCategoryForm/beauty/BeautyModal';
import { deleteBeauty, singleBeauty } from '../../../redux/beauty/action';
import { deleteHealth, singleHealth } from '../../../redux/health/action';
import MansFashionModal from '../allCategoryForm/mansfashion/MansFashionModal';
import { deleteMansFashion, singleMansFashion } from '../../../redux/mansFashion/action';
import HealthModal from '../allCategoryForm/health/HealthModal';
import ElectronicModal from '../allCategoryForm/electronics/ElectronicModal';
import { deleteElectronic, singleElectronic } from '../../../redux/electronic/action';
import { deleteKid, singleKid } from '../../../redux/kid/action';
import KidModal from '../allCategoryForm/kids/KidModal';



const AllCategory = () => {

    const [pform, setPform] = useState(false);
    
    const handlePformShow = () => setPform(true);
    const handlePformHide = () => setPform(false);

    // all categories products
    const { womenFashions } = useSelector(store => store.womensFashion)
    const { healths } = useSelector(store => store.health)
    const { beauties } = useSelector(store => store.beauty)
    const { mansFashions } = useSelector(store => store.mansFashion)
    const { electronics } = useSelector(store => store.electronic)
    const { kids } = useSelector(store => store.kid)


    const dispatch = useDispatch()
    
    const [single, setSingle] = useState(false);
    
    const handleSingleShow = (id) => {

        dispatch(womensFashionSingleProduct(id))

        setSingle(true)

    };
    const handleSingleHide = () => setSingle(false);

    // health
    const [hsingle, setHsingle] = useState(false);
    
    const handleHealthSingleShow = (id) => {

        dispatch(singleHealth(id))

        setBsingle(true)

    };
    const handleHealthSingleHide = () => setHsingle(false);
    // beauty
    const [bsingle, setBsingle] = useState(false);
    
    const handleBeautySingleShow = (id) => {

        dispatch(singleBeauty(id))

        setBsingle(true)

    };
    const handleBeautySingleHide = () => setBsingle(false);

    // mansFashion
    const [msingle, setMsingle] = useState(false);
    
    const handleMansFashionSingleShow = (id) => {

        dispatch(singleMansFashion(id))

        setMsingle(true)

    };
    const handleMansFashionSingleHide = () => setMsingle(false);

    // electronic
    const [esingle, setEsingle] = useState(false);
    
    const handleElectronicnSingleShow = (id) => {

        dispatch(singleElectronic(id))

        setEsingle(true)

    };
    const handleElectronicSingleHide = () => setEsingle(false);


      // kid
      const [ksingle, setKsingle] = useState(false);
    
      const handleKidSingleShow = (id) => {
  
          dispatch(singleKid(id))
  
          setKsingle(true)
  
      };
      const handleKidsSingleHide = () => setKsingle(false);

    // delete womensFashion product 
    const handleWomensFashionDeleteProduct = (e, id ) => {
        e.preventDefault()

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            dispatch(womensFashionDeleteProduct(id));
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }

    // delete health product
    const handleDeleteHealthProduct = (e, id ) => {
        e.preventDefault()

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            dispatch(deleteHealth(id));
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    
    // beauty delete product
    const handleDeleteBeautyProduct = (e, id ) => {
        e.preventDefault()

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            dispatch(deleteBeauty(id));
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    // mansFashion delete product
    const handleDeleteMansFashionProduct = (e, id ) => {
        e.preventDefault()

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            dispatch(deleteMansFashion(id));
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    // electronic delete product
    const handleDeleteElectronicProduct = (e, id ) => {
        e.preventDefault()

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            dispatch(deleteElectronic(id));
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }


       // kid delete product
       const handleDeleteKidProduct = (e, id ) => {
        e.preventDefault()

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            dispatch(deleteKid(id));
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }



  return (
    <>
     <CaregoryCreate single={ pform } handleSingleHide= { handlePformHide } />
     <SingleWomensFashion single={  single } handleSingleHide =  { handleSingleHide }  />
     <HealthModal single={  hsingle } handleSingleHide =  { handleHealthSingleHide }  />
     <BeautyModal single={  bsingle } handleSingleHide =  { handleBeautySingleHide }  />
     <MansFashionModal single={  msingle } handleSingleHide =  { handleMansFashionSingleHide }  />
     <ElectronicModal single={  esingle } handleSingleHide =  { handleElectronicSingleHide }  />
     <KidModal single={  ksingle } handleSingleHide =  { handleKidsSingleHide }  />
      <div className='container my-5'>
        <div className="row justify-content-center">
         <div className="col-lg-2">
            <div className="container my-5">
                <div className="row">
                    <div className="card-body">
                    <div className="widget">
                        <Link to="/admin/product" className='btn btn-primary mb-3'>Back Dashboard</Link>
                        <h2>Category</h2>
                        <ul className='list-group'>
                            <li className='list-group-item'><Link to="/admin/product/allCategory/womensfashion">Women's Fashion</Link></li>
                            <li className='list-group-item'><Link to="/admin/product/allCategory/health">Health</Link></li>
                            <li className='list-group-item'><Link to="/admin/product/allCategory/beauty">Beauty</Link></li>
                            <li className='list-group-item'><Link to="/admin/product/allCategory/mansfashion">Man's Fashion</Link></li>
                            <li className='list-group-item'><Link to="/admin/product/allCategory/electronics">Electronic</Link></li>
                            <li className='list-group-item'><Link to="/admin/product/allCategory/kids">Kids</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
              </div>
         </div>
            <div className="col-md-10">
            <Link className='btn btn-warning' to="/">View Shop</Link> &nbsp;
            <Link className='btn btn-primary' to="/admin/product/allCategory/items">All Category Items</Link>
                <br />
                <br />
                <div className="card product shadow-sm">
                    <div className="card-body">
                    <h2>All Category products</h2>
                    <hr />
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Regular Price</th>
                                <th>Sale Price</th>
                                <th>Stock</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                womenFashions.map( (data, index) => 
        
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.regular_price}</td>
                                    <td>{data.sale_price}</td>
                                    <td>{data.stock}</td>
                                    <td><img src={`/image/womensFashion/${data.photo}`} alt="" /></td>
                                    <td>
                                        <a className='text-info' onClick={() => handleSingleShow(data._id)} href="#"><i className='fa fa-eye'></i></a>
                                        <a className='text-warning m-3' href="#"><i className='fa fa-edit'></i></a>
                                        <a className='text-danger' onClick={(e) => handleWomensFashionDeleteProduct(e, data._id) } href="#"><i className='fa fa-trash'></i></a>
                                    </td>
                                </tr>
                                
                                )
                            }
                            {
                                healths.map( (data, index) => 
        
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.regular_price}</td>
                                    <td>{data.sale_price}</td>
                                    <td>{data.stock}</td>
                                    <td><img src={`/image/healths/${data.photo}`} alt="" /></td>
                                    <td>
                                        <a className='text-info' onClick={() => handleHealthSingleShow(data._id)} href="#"><i className='fa fa-eye'></i></a>
                                        <a className='text-warning m-3' href="#"><i className='fa fa-edit'></i></a>
                                        <a className='text-danger' onClick={(e) => handleDeleteHealthProduct(e, data._id) } href="#"><i className='fa fa-trash'></i></a>
                                    </td>
                                </tr>
                                
                                )
                            }
                            {
                                beauties.map( (data, index) => 
        
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.regular_price}</td>
                                    <td>{data.sale_price}</td>
                                    <td>{data.stock}</td>
                                    <td><img src={`/image/beauties/${data.photo}`} alt="" /></td>
                                    <td>
                                        <a className='text-info' onClick={() => handleBeautySingleShow(data._id)} href="#"><i className='fa fa-eye'></i></a>
                                        <a className='text-warning m-3' href="#"><i className='fa fa-edit'></i></a>
                                        <a className='text-danger' onClick={(e) => handleDeleteBeautyProduct(e, data._id) } href="#"><i className='fa fa-trash'></i></a>
                                    </td>
                                </tr>
                                
                                )
                            }
                            {
                                mansFashions.map( (data, index) => 
        
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.regular_price}</td>
                                    <td>{data.sale_price}</td>
                                    <td>{data.stock}</td>
                                    <td><img src={`/image/mansFashion/${data.photo}`} alt="" /></td>
                                    <td>
                                        <a className='text-info' onClick={() => handleMansFashionSingleShow(data._id)} href="#"><i className='fa fa-eye'></i></a>
                                        <a className='text-warning m-3' href="#"><i className='fa fa-edit'></i></a>
                                        <a className='text-danger' onClick={(e) => handleDeleteMansFashionProduct(e, data._id) } href="#"><i className='fa fa-trash'></i></a>
                                    </td>
                                </tr>
                                
                                )
                            }
                            {
                                electronics.map( (data, index) => 
        
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.regular_price}</td>
                                    <td>{data.sale_price}</td>
                                    <td>{data.stock}</td>
                                    <td><img src={`/image/electronic/${data.photo}`} alt="" /></td>
                                    <td>
                                        <a className='text-info' onClick={() => handleElectronicnSingleShow(data._id)} href="#"><i className='fa fa-eye'></i></a>
                                        <a className='text-warning m-3' href="#"><i className='fa fa-edit'></i></a>
                                        <a className='text-danger' onClick={(e) => handleDeleteElectronicProduct(e, data._id) } href="#"><i className='fa fa-trash'></i></a>
                                    </td>
                                </tr>
                                
                                )
                            }
                            {
                                kids.map( (data, index) => 
        
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.regular_price}</td>
                                    <td>{data.sale_price}</td>
                                    <td>{data.stock}</td>
                                    <td><img src={`/image/kids/${data.photo}`} alt="" /></td>
                                    <td>
                                        <a className='text-info' onClick={() => handleKidSingleShow(data._id)} href="#"><i className='fa fa-eye'></i></a>
                                        <a className='text-warning m-3' href="#"><i className='fa fa-edit'></i></a>
                                        <a className='text-danger' onClick={(e) => handleDeleteKidProduct(e, data._id) } href="#"><i className='fa fa-trash'></i></a>
                                    </td>
                                </tr>
                                
                                )
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default AllCategory;