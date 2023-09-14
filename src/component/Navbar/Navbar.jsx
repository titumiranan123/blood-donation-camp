'use client'
import React from 'react';
import Topnav from './Topnav';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaBars, FaSearch } from 'react-icons/fa';

const Navbar = () => {

    const router = useRouter()
    const Customnav = ({ title, href, className }) => {
        const handleClick = (e) => {
            e.preventDefault()
            router.push(href)
        }
        return (
            <Link onClick={handleClick} title={href} href={href} className={`hover:text-red-600 flex items-center relative justify-between group ${className}`}>
                {title}
                {/* <span className='transition-[width] duration-400  group-hover:w-12 ease-in delay-200 bg-red-600 absolute bottom-0 left-0 h-1'></span> */}
                <span className={`h-1 w-0    bg-red-600 dark:bg-white absolute left-0 group-hover:w-full transition-[width] ease duration-300 -bottom-1 ${router.asPath === href ? 'w-full' : "w-0"}`}>  </span>
            </Link>
        )
    }
    return (
        <div className='flex flex-col '>
            <Topnav />
            <div className='grid grid-cols-4 h-20  '>
                <div className="logo col-span-1 bg-red-600 -mt-3 px-5 text-xl  text-white flex justify-end items-center font-serif font-bold">Blad Ai</div>
                <nav className='col-span-2 justify-center font-semibold hidden  font-serif  lg:flex items-center gap-3'>
                    <Customnav href={"/"} title={"Home"} className={'mr-5'} />
                    <Customnav href={'/about'} title={"About"} className={'mr-5'} />
                    <Customnav href={'/campaign'} title={"Campaign"} className={'mr-5'} />
                    <Customnav href={'/blog'} title={"Blog"} className={'mr-5'} />
                    <Customnav href={'/contact'} title={"Contact"} className={'mr-5'} />
                </nav>
                <div className='lg:hidden col-span-2 flex justify-center items-center'>
                    {
                        <FaBars className='font-bold text-3xl' />

                    }

                </div>
                <div className='flex  justify-center items-center gap-2'>
                    <FaSearch />
                    <select >
                        <option value="English">English</option>
                        <option value="Bangla">Bangla</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Navbar;