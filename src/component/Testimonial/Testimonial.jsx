import React from 'react';
import Heading from '../Heading/Heading';
import Image from 'next/image';
import user from '../../assets/user.jpg'
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
    return (
        <div>
            <Heading title={'TESTMONIALS'} heading={'What Our Clients Say'} />

            <div class="flex gap-5 flex-wrap md:flex-nowrap justify-center items-center">
                <figure class="flex md:w-80 w-full lg:w-96 flex-col  justify-start p-8  bg-white  border-gray-200 rounded-t-lg border shadow-xl  ">
                    <blockquote class=" mb-4 text-gray-500 ">
                        <div className='flex justify-start items-center gap-2'>
                            <HiStar className='font-xl text-yellow-400 ' />
                            <HiStar className='font-xl text-yellow-400 ' />
                            <HiStar className='font-xl text-yellow-400 ' />
                            <HiStar className='font-xl text-yellow-400 ' />

                            <HiStar className='font-xl text-yellow-400 ' />

                        </div>
                        <p class="my-4 text-left">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur cupidatatproident, culpa qui officia deserunt mollit</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-start space-x-3 border ">
                        <Image
                            src={user} alt='' className='rounded-full h-20 w-20'
                            width={100} // Set the desired width
                            height={100} // Set the desired height

                        />
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Bonnie Green</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex md:w-80 w-full lg:w-96 flex-col  justify-start p-8  bg-white  border-gray-200 rounded-t-lg border shadow-2xl ">
                    <blockquote class=" mb-4 text-gray-500 ">
                        <div className='flex justify-start items-center gap-2'>
                            <HiStar className='font-xl text-yellow-400 ' />
                            <HiStar className='font-xl text-yellow-400 ' />
                            <HiStar className='font-xl text-yellow-400 ' />
                            <HiStar className='font-xl text-yellow-400 ' />

                            <HiStar className='font-xl text-yellow-400 ' />

                        </div>
                        <p class="my-4 text-left">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur cupidatatproident, culpa qui officia deserunt mollit</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-start space-x-3 border ">
                        <Image
                            src={user} alt='' className='rounded-full h-20 w-20'
                            width={100} // Set the desired width
                            height={100} // Set the desired height

                        />
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Bonnie Green</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                        </div>
                    </figcaption>
                </figure>
                <figure class="flex md:w-80 w-full lg:w-96 flex-col  justify-start p-8  bg-white  border-gray-200 rounded-t-lg border  shadow-xl">
                    <blockquote class=" mb-4 text-gray-500 ">
                        <div className='flex justify-start items-center gap-2'>
                            <HiStar className='font-xl text-yellow-400 ' />
                            <HiStar className='font-xl text-yellow-400 ' />
                            <HiStar className='font-xl text-yellow-400 ' />
                            <HiStar className='font-xl text-yellow-400 ' />

                            <HiStar className='font-xl text-yellow-400 ' />

                        </div>
                        <p class="my-4 text-left">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur cupidatatproident, culpa qui officia deserunt mollit</p>
                    </blockquote>
                    <figcaption class="flex items-center justify-start space-x-3 border ">
                        <Image
                            src={user} alt='' className='rounded-full h-20 w-20'
                            width={100} // Set the desired width
                            height={100} // Set the desired height

                        />
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Bonnie Green</div>
                            <div class="text-sm text-gray-500 dark:text-gray-400">Developer at Open AI</div>
                        </div>
                    </figcaption>
                </figure>

            </div>


        </div>
    );
};

export default Testimonial;