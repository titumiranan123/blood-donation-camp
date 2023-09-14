import React from 'react';
import Heading from '../Heading/Heading';
import Teamcard from '../Teamcard/Teamcard';
import img1 from '../../assets/doctor-1.jpg'
import img2 from '../../assets/doctor-2.jpg'
import img3 from '../../assets/doctor-3.jpg'

const Team = () => {
    return (
        <div className='mt-10 mb-10 flex justify-between items-center flex-col '>
            <Heading title={'TEAM MEMBERS'} heading={"Meet Volunteers"} />
            <div className='grid grid-cols-1 mt-10 md:grid-cols-3  gap-10'>
                <Teamcard img={img3} />
                <Teamcard img={img2} />
                <Teamcard img={img1} />

            </div>

        </div>
    );
};

export default Team;