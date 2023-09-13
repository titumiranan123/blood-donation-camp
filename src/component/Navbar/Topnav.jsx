import React from 'react';
import { HiPhoneIncoming, HiMail, HiLocationMarker } from "react-icons/hi";
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaInstagramSquare } from 'react-icons/fa'
const Topnav = () => {
    return (
        <div className='lg:h-20 hidden    w-full md:grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  py-3'>
            <div className='bg-black text-white flex justify-end items-center gap-2 w-full pe-5 md:h-14'>
                <HiPhoneIncoming />
                <span className="h-6 border border-white bg-white"></span>
                <p>+01 (977) 29999 12</p>

            </div>
            <div className='bg-black w-full  flex justify-between items-center pe-5 md:h-14'>
                <div className='flex gap-2 text-white items-center'>
                    <HiMail />
                    <span className="h-6 border border-white bg-white"></span>
                    <p>example@gamil.com</p>
                </div>
                <div className='flex gap-2 text-white items-center'>
                    <HiLocationMarker />
                    <span className="h-6 border border-white bg-white"></span>
                    <p>Dhaka 1200 , MohummoadPur</p>
                </div>
            </div>
            <div className='bg-red-600 md:h-14 text-white flex gap-4 justify-center items-center md:w-full md:col-span-3 lg:col-span-1 lg:w-full overflow-hidden'>
                <p>Follow Now</p>
                <FaFacebookSquare className='text-white' />
                <FaTwitterSquare className='text-white' />
                <FaInstagramSquare className='text-white' />
                <FaPinterestSquare className='text-white' />

            </div>


        </div>
    );
};

export default Topnav;