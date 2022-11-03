import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert';
import CreateBrand from './CreateBrand';
import { deleteBrand, singleBrand } from '../../redux/brand/action';
import ModalBrand from './ModalBrand';


const AllBrand = () => {

    const [pform, setPform] = useState(false);
    
    const handlePformShow = () => setPform(true);
    const handlePformHide = () => setPform(false);


    const { brands } = useSelector(store => store.brand)


    // products single modal
    const dispatch = useDispatch()
    
    const [single, setSingle] = useState(false);
    
    const handleSingleShow = (id) => {

        dispatch(singleBrand(id))

        setSingle(true)

    };
    const handleSingleHide = () => setSingle(false);








  

    // delete product 
    const handleDeleteBrand = (e, id ) => {
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
            dispatch(deleteBrand(id));
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
     {/* <CreateProduct single={ pform } handleSingleHide= { handlePformHide } /> */}
     <CreateBrand single={ pform  } handleSingleHide =  { handlePformHide  }  />
     <ModalBrand single={ single  } handleSingleHide =  { handleSingleHide }  />
      <div className='container my-5'>
        <div className="row justify-content-center">
         <div className="col-lg-2">
            <div className="container my-5">
                <div className="row">
                    <div className="card-body">
                      <Link to="/admin/product" className="btn btn-primary">ALL PRODUCTS</Link>
                      <hr />
                      <Link to="/admin/product/allCategory" className="btn btn-primary">ALL CATEGORY</Link>
                      <hr />
                      <Link to="/admin/product/allTags" className='btn btn-primary'>ALL TAGS</Link>
                      <hr />
                      <Link to="/admin/product/allBrands" className='btn btn-primary'>ALL Brands</Link>
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
                    <h2>All Brands</h2>
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
                                brands.map( (data, index) => 
        
                                <tr>
                                    <td>1</td>
                                    <td>{data.name}</td>
                                    <td>{data.slug}</td>
                                    <td>{data.status}</td>
                                    <td><img src={`http://localhost:5050/image/brand/${data.photo}`} alt="" /></td>
                                    <td>
                                        <a className='text-info' onClick={() => handleSingleShow(data._id)} href="#"><i className='fa fa-eye'></i></a>
                                        <a className='text-warning m-3' href="#"><i className='fa fa-edit'></i></a>
                                        <a className='text-danger' onClick={(e) => handleDeleteBrand(e, data._id) } href="#"><i className='fa fa-trash'></i></a>
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

export default AllBrand;