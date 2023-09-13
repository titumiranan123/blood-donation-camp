import Image from 'next/image';
import React from 'react';
import cardImage from '../../assets/card-1.jpg'

const Card = ({ heading, className }) => {
    return (
        <div className='card w-80 space-y-4  border shadow-lg'>
            <Image className='p-3 rounded-2xl' src={cardImage} alt="" />
            <div className='space-y-4 p-5'>
                <p className='text-xl font-semibold text-center'>{heading}</p>
                <p className='text-center'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give</p>
            </div>
            <button className={`text-lg py-2 px-4 font-semibold  w-full text-white ${className}`}>Read More</button>

        </div>
    );
};

export default Card;