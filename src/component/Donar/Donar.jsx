import React from 'react';
import doctors from '../../assets/doctors.jpg'
import Image from 'next/image';
import { HiPlay } from 'react-icons/hi';
import { FaHeart } from 'react-icons/fa';
const Donar = () => {
    return (
        <div className='relative h-[1300px] md:h-[780px]'>
            <div className='relative'>
                <div className='h-96 w-full'>
                    <Image className='h-96 w-full' src={doctors} alt='' />
                </div>
                <div className='absolute top-0 w-full h-full left-0 bg-black opacity-50 text-white font-sans'>

                </div>
                <div className='z-10 absolute top-20 left-[35%] space-y-4'>
                    <p className='text-red-600 font-semibold text-center'>BLOOD OWNER</p>
                    <h1 className="text-white font-bold text-4xl">We Are Blood Donor Group </h1>
                    <HiPlay className='text-6xl bg-red-600 class="w-full h-full rounded-full clip absolute" text-center text-white mx-auto ' />
                </div>

            </div>
            <div className='flex justify-center items-center md:flex-nowrap flex-wrap gap-5 lg:gap-10 absolute bottom-6 md:left-5 lg:left-[20%] '>
                <div className='h-[450px] w-full text-black space-y-2 bg-white md:w-[25rem] p-10'>
                    <h1 className='text-2xl'>Current Blood Request </h1>
                    <div className='text-lg flex gap-2 items-center'>
                        <FaHeart className='text-red-600 font-2xl' />
                        <p> B+ Washington, USA (13.02.2022)</p>
                    </div>
                    <hr />
                    <div className='text-lg flex gap-2 items-center'>
                        <FaHeart className='text-red-600 font-2xl' />
                        <p> B+ Washington, USA (13.02.2022)</p>
                    </div>
                    <hr />
                    <div className='text-lg flex gap-2 items-center'>
                        <FaHeart className='text-red-600 font-2xl' />
                        <p> B+ Washington, USA (13.02.2022)</p>
                    </div>
                    <hr />
                    <div className='text-lg flex gap-2 items-center'>
                        <FaHeart className='text-red-600 font-2xl' />
                        <p> B+ Washington, USA (13.02.2022)</p>
                    </div>
                    <hr />
                    <div className='text-lg flex gap-2 items-center'>
                        <FaHeart className='text-red-600 font-2xl' />
                        <p> B+ Washington, USA (13.02.2022)</p>
                    </div>
                    <hr />
                    <div className='text-lg flex gap-2 items-center'>
                        <FaHeart className='text-red-600 font-2xl' />
                        <p> B+ Washington, USA (13.02.2022)</p>
                    </div>
                    <hr />
                    <div className='text-lg flex gap-2 items-center'>
                        <FaHeart className='text-red-600 font-2xl' />
                        <p> B+ Washington, USA (13.02.2022)</p>
                    </div>

                    <div className='text-lg flex gap-2 items-center'>
                        <FaHeart className='text-red-600 font-2xl' />
                        <p> B+ Washington, USA (13.02.2022)</p>
                    </div>

                </div>
                <div className='text-black w-full h-[450px] bg-white md:w-96 p-10 space-y-5'>
                    <h1 className="text-xl font-bold text-black ">Request Appointment Here </h1>
                    <form >
                        <div className='grid space-y-5  grid-cols-2'>
                            <input className='outline-none focus:outline-none font-mono ' placeholder='Your Name' type="text" />
                            <input className='outline-none focus:outline-none font-mono' placeholder='Your Email' type="text" />
                            <input className='outline-none focus:outline-none font-mono' placeholder='Phone Number' type="text" />
                        </div>
                        <textarea className='block mt-5' cols={20} rows={4} placeholder='Your Messages'>

                        </textarea>
                        <button className='py-4 mt-5 px-8 bg-red-600 text-white font-semibold'>Submit Now </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Donar;