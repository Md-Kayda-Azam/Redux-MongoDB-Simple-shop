import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, singleProduct } from '../../redux/product/action';
import SingleProduct from '../Shop/SingleProduct';
import swal from 'sweetalert';
import CreateTag from './CreateTag';
import { deleteTag, singleTag } from '../../redux/tags/action';
import TagModal from './TagModal';


const Product = () => {


    const [tsingle, setTsingle] = useState(false);
    
    const handleTsingleShow = () => setTsingle(true);
    const handleTsingleHide = () => setTsingle(false);


    const { tags } = useSelector(store => store.tag)

    // const { womenFashions } = useSelector(store => store.womensFashion)



    // products single modal
    const dispatch = useDispatch()
    
    const [single, setSingle] = useState(false);
    
    const handleSingleShow = (id) => {

        dispatch(singleTag(id))

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
            dispatch(deleteTag(id));
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
     <CreateTag single={ tsingle } handleSingleHide= { handleTsingleHide } />
     <TagModal single={  single } handleSingleHide =  { handleSingleHide }  />
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
            <button onClick={handleTsingleShow} className='btn btn-sm btn-primary'>Add new</button> &nbsp;
            <Link className='btn btn-warning' to="/">View Shop</Link>
                <br />
                <br />
                <div className="card product shadow-sm">
                    <div className="card-body">
                    <h2>All Tags</h2>
                    <hr />
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>SlugName</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                tags.map( (data, index) => 
        
                                <tr>
                                    <td>1</td>
                                    <td>{data.name}</td>
                                    <td>{data.slug}</td>
                                    <td>{data.status}</td>
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

export default Product;