import React from 'react';

const Modal = (props) => {
    const {details,setDetails} = props;
    const {action,bullet,capacity,img,name,price} = details;
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label onClick={() => setDetails(null)} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <img className='w-full h-80' src={img} alt="" />
                <h3 className="text-lg font-bold mt-4">{name}</h3>
                <p className="py-2">{action} {bullet}</p>
                <p className="py-2"><span className='font-bold'>Capacity:</span> {capacity} <span className='font-bold'>Price:</span> ${price}</p>
            </div>
            </div>
        </div>
    );
};

export default Modal;