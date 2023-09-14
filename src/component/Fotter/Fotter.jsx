import Image from 'next/image';
import React from 'react';
import { FaAngleDoubleRight, FaFacebookSquare, FaForward, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';
import img from '../../assets/user.jpg'

const Footer = () => {
    return (
        <div className='bg-black md:grid-cols-2 text-white lg:px-40 lg:pt-20 md:px-20 md:pt-10 p-4'>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-4 '>
                <div className='space-y-5'>
                    <h1 className='text-white font-bold text-xl'> About Us</h1>
                    <p>
                        Duis aute irure dolor in reprehenderit velit <br /> esse cillum dolore eu fugial nulla pariature . <br /> Excepteur sint occaecat
                    </p>
                    <div>
                        <div>
                            <span className='text-lg font-bold'> Phone :</span> +1(456) 657887999
                        </div>
                        <div>
                            <span className='text-lg font-bold'> Email :</span> contactblood@gmail.com
                        </div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-white font-bold text-xl'> About Us</h1>
                    <div className='text-white text-sm font-mono space-y-3'>
                        <div className='flex items-center gap-1 '>
                            <FaAngleDoubleRight className='text-red-600 text-sm' />
                            <p className='hover:text-red-600'>Services</p>

                        </div>
                        <div className='flex items-center gap-1 '>
                            <FaAngleDoubleRight className='text-red-600 text-sm' />

                            <p className='hover:text-red-600'>About Us</p>

                        </div>
                        <div className='flex items-center gap-1 '>
                            <FaAngleDoubleRight className='text-red-600 text-sm' />
                            <p className='hover:text-red-600'>New Campaign</p>
                        </div>
                        <div className='flex items-center gap-1 '>
                            <FaAngleDoubleRight className='text-red-600 text-sm' />
                            <p className='hover:text-red-600'>Latest News </p>
                        </div>
                        <div className='flex items-center gap-1 '>
                            <FaAngleDoubleRight className='text-red-600 text-sm' />
                            <p className='hover:text-red-600'>Contact</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-white font-bold text-2xl'>Our Services</h1>
                    <div className='text-white text-sm font-mono space-y-3'>
                        <div className='flex items-center gap-1 '>
                            <FaAngleDoubleRight className='text-red-600 text-sm' />
                            <p className='hover:text-red-600'>Blood Donation</p>

                        </div>
                        <div className='flex items-center gap-1 '>
                            <FaAngleDoubleRight className='text-red-600 text-sm' />

                            <p className='hover:text-red-600'>Health Check</p>

                        </div>
                        <div className='flex items-center gap-1 '>
                            <FaAngleDoubleRight className='text-red-600 text-sm' />
                            <p className='hover:text-red-600'>Blood Bank</p>
                        </div>
                        <div className='flex items-center gap-1 '>
                            <FaAngleDoubleRight className='text-red-600 text-sm' />
                            <p className='hover:text-red-600'>Donate Process </p>
                        </div>
                        <div className='flex items-center gap-1 '>
                            <FaAngleDoubleRight className='text-red-600 text-sm' />
                            <p className='hover:text-red-600'>Blood Info</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-5'>
                    <h1 className='text-white font-bold text-2xl'>Our Services</h1>
                    <div>
                        <div className='flex items-center gap-2 justify-center'>
                            <div className="h-20 w-20">
                                <Image alt='' src={img} />
                            </div>
                            <div className='-mt-6'>
                                <h3>A Formula For Help And Happiness</h3>
                                <p className="text-red-600 text-sm">
                                    18 February, 2022
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 justify-center'>
                            <div className="h-20 w-20">
                                <Image alt='' src={img} />
                            </div>
                            <div className='-mt-6'>
                                <h3>A Formula For Help And Happiness</h3>
                                <p className="text-red-600 text-sm">
                                    18 February, 2022
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
                <hr className='mt-5' />
            </div>
            <div className='mb-10 grid grid-cols-1 md:grid-cols-2'>
                <div className='mt-10 space-y-4'>

                    <h1 className='text-white font-bold text-xl'>Subscribe us for more update & news !!</h1>


                    <form>
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Subscribe</button>
                        </div>
                    </form>
                </div>
                <div className='flex justify-center items-center flex-col gap-10'>
                    <div className='flex gap-4 '>
                        <FaFacebookSquare className=' hover:bg-red-600 hover:text-white bg-white text-4xl outline-none text-red-600' />
                        <FaTwitterSquare className=' hover:bg-red-600 hover:text-white bg-white text-4xl outline-none text-red-600' />
                        <FaInstagramSquare className=' hover:bg-red-600 hover:text-white bg-white text-4xl outline-none text-red-600' />
                        <FaPinterestSquare className=' hover:bg-red-600 hover:text-white bg-white text-4xl outline-none text-red-600' />
                    </div>
                    <div className="text-sm flex justify-center items-center gap-2 text-white ">
                        Privacy Policy  <FaForward /> Terms & Condition <FaForward /> FAQ
                    </div>
                </div>


            </div>
            <div className='flex justify-center items-center text-center mt-10'>
                <p>Copyright 2022 Blad Ai, All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;