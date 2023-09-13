import React from 'react';
import Card from './Card';

const Firstsection = () => {
    return (
        <div className='flex flex-wrap md:flex-wrap gap-4 justify-center  '>
            <Card className={"bg-black"} heading={'Become a Donor'} />
            <Card className={"bg-red-600"} heading={'Become a Donor'} />
            <Card className={"bg-black"} heading={'Become a Donor'} />
        </div>
    );
};

export default Firstsection;