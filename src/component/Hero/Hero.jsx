import React from 'react';
import headerImag from '../../assets/header-2.jpg'
import './Hero.css'
import { ImPlay } from 'react-icons/im';
import Image from 'next/image';
const Hero = () => {
    return (
        <div className='lg:h-[800px]  md:h-[900px] h-[1100px] relative'>
            <Image className='md:h-[600px] h-[600px] bg-cover w-full ' src={headerImag} alt='' />
            <div className='flex flex-col gap-5  absolute top-20  md:top-52 lg:left-32 md:left-14 p-2'>
                <div className='flex justify-start items-center gap-3'>
                    <ImPlay className='font-semibold text-4xl text-red-600' />
                    <p className='text-4xl'>
                        Intro Video
                    </p>
                </div>
                <p className='font-semibold text-red-600  text-4xl'>Donate Blood , Save Life !</p>
                <h2 className='text-6xl font-bold '>Donate Blood And <br /> Inspires Others .</h2>
                <button className='py-2 px-4 border bg-red-600 text-left text-white flex justify-center items-center  text-xl font-semibold w-44'>Explore Now </button>
            </div>
            <div className='flex  md:absolute md:-bottom-2 lg:bottom-10 lg:left-32 md:left-14 lg:flex-nowrap flex-wrap lg:w-[900px] md:w-[600px]'>
                <div className='bg-black p-10 '>
                    <p className='text-white text-3xl font-bold'>Register Now </p>
                    <p className='text-white text-lg'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself , because it is pain,</p>
                </div>
                <div className="bg-red-600 p-10">
                    <p className='text-white text-3xl font-bold'>Donate Now</p>
                    <p className='text-white text-lg'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself , because it is pain,</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;