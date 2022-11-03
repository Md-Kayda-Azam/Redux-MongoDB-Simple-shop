import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const BeautyModal = ({ single, handleSingleHide,  }) => {
   
    const { singleBeautyProduct } = useSelector(state => state.beauty);

    
    

  return (

        <Modal show={ single } onHide={ handleSingleHide } animation={ true } centered size='lg'> 
            <Modal.Body>
                <div className="single-product">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`/image/beauties/${singleBeautyProduct.photo}`} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="single my-5">
                                <h2>{singleBeautyProduct.name}</h2>
                                <h3>Sale price : $ {singleBeautyProduct.slugName} </h3>
                                <h3>Regular price : $ <del>{singleBeautyProduct.status}</del> </h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste recusandae ipsa earum! Optio, placeat eum.</p>
                                <button className='btn btn-lg btn-primary'>ADD TO CARD</button> &nbsp;
                                <button className='btn btn-lg btn-danger'>BUT NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>


  )
};

export default BeautyModal;