'use client'
import Image from 'next/image';
import React from 'react';
import image from '../../assets/card-1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Style.css'

const Campaing = () => {
    return (
        <div className='mt-10 mb-10'>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper flex justify-center items-center"
            >
                <SwiperSlide>

                    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow ">
                        <Image class="object-cover w-full rounded-t-lg h-96 " src={image} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow ">
                        <Image class="object-cover w-full rounded-t-lg h-96 " src={image} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow ">
                        <Image class="object-cover w-full rounded-t-lg h-96 " src={image} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Campaing;