import React from 'react';

const Gun = (props) => {
    console.log(props.gun)
    const {gun,increaseCount} = props;
    const {action,bullet,capacity,img,name,price} = gun;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-60' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <div className="badge badge-outline">{action}</div> 
                        <div className="badge badge-outline">{bullet}</div>
                        <div className='mt-4'>
                        <button onClick={() => increaseCount()} className="btn btn-sm btn-primary mr-3">Add to Cart</button>
                        <button className="btn btn-sm btn-danger">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gun;