import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';

const Guns = ({increaseCount}) => {
    const [guns, setGuns] = useState([])

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGuns(data))
    }, [])

    return (
        <div>
            <h1 className='font-bold text-center my-8 text-2xl'>Total Guns: {guns.length}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10'>
                {
                    guns.map(gun => <Gun gun={gun} key={gun.id} increaseCount={increaseCount} />)
                }
            </div>
        </div>
    );
};

export default Guns;