import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './Beauty.css';
import swal from 'sweetalert';
import BeautyProductsCreate from './BeautyProductsCreate';
import { deleteBeauty, deleteBeautyProduct, singleBeauty } from '../../../../redux/beauty/action';
import BeautyModal from './BeautyModal';



const BeautyFDB = () => {

    const [pform, setPform] = useState(false);
    
    const handlePformShow = () => setPform(true);
    const handlePformHide = () => setPform(false);


    const { beauties } = useSelector(store => store.beauty)


    const dispatch = useDispatch()
    
    const [bsingle, setBsingle] = useState(false);
    
    const handleBeautySingleShow = (id) => {

        dispatch(singleBeauty(id))

        setBsingle(true)

    };
    const handleBeautySingleHide = () => setBsingle(false);


  

    // delete product 
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



  return (
    <>
     <BeautyProductsCreate single={ pform } handleSingleHide= { handlePformHide } />
     <BeautyModal single={  bsingle } handleSingleHide =  { handleBeautySingleHide }  />
      <div className='container my-5'>
        <div className="row justify-content-center">
         <div className="col-lg-2">
            <div className="container my-5">
                <div className="row">
                    <div className="card-body">
                    <div className="widget">
                    <Link to="/admin/product" className='btn btn-primary mb-3'>Back Dashboard</Link>
                    <Link to="/admin/product/allCategory" className='btn btn-primary mb-3'>All Category</Link>
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
            <button onClick={handlePformShow} className='btn btn-sm btn-primary'>Add new</button> &nbsp;
            <Link className='btn btn-warning' to="/">View Shop</Link>
                <br />
                <br />
                <div className="card product shadow-sm">
                    <div className="card-body">
                    <h2>All Beauty products</h2>
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
                                beauties.map( (data, index) => 
        
                                <tr>
                                    <td>1</td>
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

export default BeautyFDB;