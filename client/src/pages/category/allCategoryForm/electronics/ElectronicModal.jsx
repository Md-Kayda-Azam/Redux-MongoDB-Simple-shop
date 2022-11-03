import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ElectronicModal = ({ single, handleSingleHide,  }) => {
   
    const { singleElectronic } = useSelector(state => state.electronic);

    
    

  return (

        <Modal show={ single } onHide={ handleSingleHide } animation={ true } centered size='lg'> 
            <Modal.Body>
                <div className="single-product">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`/image/electronic/${singleElectronic.photo}`} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="single my-5">
                                <h2>{singleElectronic.name}</h2>
                                <h3>Sale price : $ {singleElectronic.sale_price} </h3>
                                <h3>Regular price : $ <del>{singleElectronic.regular_price}</del> </h3>
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

export default ElectronicModal;