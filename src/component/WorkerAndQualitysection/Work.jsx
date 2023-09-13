import Image from 'next/image';
import React from 'react';
import img from '../../assets/third-section.jpg';
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
const Work = () => {
    return (
        <div className='mt-10 mb-10 relative'>
            <Image className='w-full h-40 ' src={img} alt='' />
            <div className='w-full h-40 absolute bg-black bg-opacity-60 top-0 mb-10 left-0'></div>
            <div className='w-[60%] p-5 h-28 absolute border-2 border-red-600 top-6  left-[20%] '>
                <div className="flex justify-center flex-col items-center">
                    <p className="text-white text-center text-sm font-semibold">START DONATING</p>
                    <h1 className='text-white font-bold text-2xl'>CALL NOW : 333 555 9090</h1>
                </div>
                <div className='flex justify-center items-center text-white text-sm gap-4'>
                    <div className='flex justify-center items-center text-sm gap-2'>
                        <HiLocationMarker />
                        <p> New Yoork - 1075</p>
                    </div>
                    <div className='flex justify-center items-center text-sm gap-2'>
                        <HiMail />
                        <p>example@gmail.com</p>
                    </div>
                </div>

            </div>
            <HiPhone className='bg-red-600  text-white absolute p-1 top-[10px] text-3xl mb-10 left-[50%] rotate-45' />

        </div>
    );
};

export default Work;
