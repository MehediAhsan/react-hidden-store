import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Gun = (props) => {
    const [details, setDetails] = useState({});
    const {gun,increaseCount} = props;
    const {action,bullet,img,name} = gun;

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-60' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions mt-2">
                        <div className="badge badge-outline">{action}</div> 
                        <div className="badge badge-outline">{bullet}</div>
                        <div className='mt-4'>
                        <button onClick={() => increaseCount()} className="btn btn-sm btn-primary mr-3">Add to Cart</button>
                        <label onClick={() => setDetails(gun)} htmlFor="my-modal-3" className="btn btn-sm btn-danger modal-button">Details</label>
                        </div>
                    </div>
                </div>
            </div>
            {
                details && <Modal details={details} setDetails={setDetails} />
            }
        </div>
    );
};

export default Gun;