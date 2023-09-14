import Image from 'next/image';
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';

const Teamcard = ({ img }) => {
    return (
        <div className='group border w-60  flex flex-col justify-center items-center space-y-4 '>
            <div className='relative h-52 w-60'>
                <Image className='rounded-lg h-52 w-60' alt='' src={img} />
                <div className='bg-black group-hover:bg-opacity-30 ease-in duration-300 absolute top-0 left-0 w-full h-full bg-opacity-0'>
                </div>
                <div className='flex gap-1 absolute top-[30%] left-4'>
                    <div className='relative'>
                        <div className='absolute top-[30%] -right-20  flex'>
                            <FaFacebookSquare className='rounded-s-full text-4xl p-2 group-hover:bg-white text-red-600 w-0 transition-[width,bg-white] duration-300 ease-in group-hover:w-10' />
                            <FaTwitterSquare className='rounded-lg group-hover:bg-white text-red-600 w-0 transition-[width,bg-white] duration-300 ease-in group-hover:w-10 text-4xl p-2 ms-2' />
                        </div>
                        <div className='absolute top-[30%] left-24 flex '>
                            <FaInstagramSquare className=' group-hover:bg-white text-red-600 w-0 transition-[width,bg-white] duration-300 ease-in group-hover:w-10 text-4xl p-2 rounded-lg' />
                            <FaPinterestSquare className='rounded-e-full group-hover:bg-white text-red-600 w-0 transition-[width,bg-white] duration-300 ease-in group-hover:w-10 text-4xl p-2 ms-2' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center gap-4 flex-col mt-5'>
                <h1 className="text-2xl font-bold text-center">Mora Khaypeia</h1>
                <p className='text-center'>Co-Founder</p>
            </div>

        </div>
    );
};

export default Teamcard;