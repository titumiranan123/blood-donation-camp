import Image from 'next/image';
import React from 'react';
import imgd from '../../assets/doctor.jpg';
import img from '../../assets/blood-t.jpg';
import './Section.css'
import { BiCaretRight } from "react-icons/bi";

const Secondsection = () => {
    return (
        <div>
            <div className='card flex flex-wrap lg:flex-nowrap mt-10'>
                <div className='lg:w-[50%] w-full relative' >
                    <Image alt='' className='card-image' src={img} />
                    <Image alt='' className='absolute h-48 w-48 rounded-full lg:top-[58%] lg:left-[60%] md:top-[48%] top-20 left-48  md:left-[60%]' src={imgd} />

                </div>
                <div className='md:mt-10 space-y-5'>
                    <p className="text-red-600 font-semibold ">HELP THE PEOPLE IN NEED</p>
                    <p className='text-6xl font-bold'>Welcome to Blood <br /> Donors Organization</p>
                    <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique mollitia facere!</p>
                    <div className='flex flex-wrap md:flex-nowrap gap-32'>
                        <div>
                            <ul>
                                <li className='flex '> <BiCaretRight className='text-red-600 -me-2' /> <BiCaretRight className='text-red-600' />Good Service</li>
                                <li className='flex '> <BiCaretRight className='text-red-600 -me-2' /> <BiCaretRight className='text-red-600' />Help People</li>
                                <li className='flex '> <BiCaretRight className='text-red-600 -me-2' /> <BiCaretRight className='text-red-600' />Hygine Tools</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className='flex '> <BiCaretRight className='text-red-600 -me-2' /> <BiCaretRight className='text-red-600' />24h Service</li>
                                <li className='flex '> <BiCaretRight className='text-red-600 -me-2' /> <BiCaretRight className='text-red-600' />Health Check</li>
                                <li className='flex '> <BiCaretRight className='text-red-600 -me-2' /> <BiCaretRight className='text-red-600' />Blood Bank</li>
                            </ul>
                        </div>
                    </div>
                    <button className='text-lg font-semibold bg-red-600 flex justify-center items-center py-2 px-4 text-white'>Explore Now</button>
                </div>

            </div>

        </div>
    );
};

export default Secondsection;