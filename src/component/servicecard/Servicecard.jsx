import Image from 'next/image';
import React from 'react';

const Servicecard = ({ image, countno, heading, className, items_end }) => {
    return (
        <div className={`flex flex-wrap md:flex-nowrap justify-center items-center gap-10 mt-10 ${className}`}>
            <div className='lg:w-1/3 w-full'>
                <Image className='rounded-2xl bg-cover' alt='' src={image} />
            </div>
            <div className={`lg:w-1/3 w-full space-y-5 ${countno % 2 == 0 ? 'flex  flex-col justify-end items-end ' : ''} `}>
                <p className='text-slate-300 font-bold text-4xl'>{countno}</p>
                <h1 className="text-bold text-black text-4xl">{heading}</h1>
                <p className="text-slate-500 text-sm lg:w-2/3">I am text block . Click edit button to change this text. Lorem ipsum dolor sit , amet , consectetur adipiscing elit. Ut elit tellus , luctus nec ullamcorpe matti pulvinar dapibus leo. </p>
                <button className='text-lg font-bold flex justify-center items-center text-white bg-red-600 py-4 px-8'> Read More</button>
            </div>
        </div>
    );
};

export default Servicecard;