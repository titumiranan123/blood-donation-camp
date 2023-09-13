import React from 'react';

const Heading = ({ title, heading }) => {
    return (
        <div className='mt-10'>
            <p className="text-red-500 text-center text-lg font-semibold ">{title}</p>
            <p className='text-center font-bold text-2xl'>{heading}</p>

        </div>
    );
};

export default Heading;