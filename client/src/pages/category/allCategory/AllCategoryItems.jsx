import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import './AllCategory.css';
import swal from 'sweetalert';
import CaregoryCreate from './CaregoryCreate';
import CategoryModal from './CategoryModal';
import { deleteCategory, singleCategory } from '../../../redux/category/action';


const AllCategoryItems = () => {

    const [pform, setPform] = useState(false);
    
    const handlePformShow = () => setPform(true);
    const handlePformHide = () => setPform(false);


    const { categories } = useSelector(store => store.category)


    const dispatch = useDispatch()
    
    const [single, setSingle] = useState(false);
    
    const handleSingleShow = (id) => {

        dispatch(singleCategory(id))

        setSingle(true)

    };
    const handleSingleHide = () => setSingle(false);


  

    // delete product 
    const handleDeleteProduct = (e, id ) => {
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
            dispatch(deleteCategory(id));
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
     <CategoryModal single={  single } handleSingleHide =  { handleSingleHide }  />
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
                            <li className='list-group-item'><Link to="/admin/product/allCategory/manfashion">Man's Fashion</Link></li>
                            <li className='list-group-item'><Link to="/admin/product/allCategory/electronics">Electronic</Link></li>
                            <li className='list-group-item'><Link to="/admin/product/allCategory/kids">Kids</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
              </div>
         </div>
            <div className="col-md-10">
            <button onClick={handlePformShow} className='btn btn-sm btn-primary'>Add new category</button> &nbsp;
            <Link className='btn btn-warning' to="/">View Shop</Link>
                <br />
                <br />
                <div className="card product shadow-sm">
                    <div className="card-body">
                    <h2>All Category Items</h2>
                    <hr />
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Slug</th>
                                <th>Status</th>
                                <th>Photo</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                categories.map( (data, index) => 
        
                                <tr>
                                    <td>1</td>
                                    <td>{data.name}</td>
                                    <td>{data.slug}</td>
                                    <td>{data.status}</td>
                                    <td><img src={`/image/category/${data.photo}`} alt="" /></td>
                                    <td>
                                        <a className='text-info' onClick={() => handleSingleShow(data._id)} href="#"><i className='fa fa-eye'></i></a>
                                        <a className='text-warning m-3' href="#"><i className='fa fa-edit'></i></a>
                                        <a className='text-danger' onClick={(e) => handleDeleteProduct(e, data._id) } href="#"><i className='fa fa-trash'></i></a>
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

export default AllCategoryItems;