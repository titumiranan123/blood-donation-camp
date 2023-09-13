import React from 'react';
import Heading from '../Heading/Heading';
import Servicecard from '../servicecard/Servicecard';
import img1 from '../../assets/service-1.jpg'
import img2 from '../../assets/service-2.jpg'
import img3 from '../../assets/service-3.jpg'

const Services = () => {
    return (
        <div>
            <Heading title={"WHAT WE DO"} heading={"Our Best Services"} />
            <div>
                <Servicecard countno={'01'} heading={"Blood Donation"} image={img1} />
                <Servicecard className={"flex-row-reverse"} countno={'02'} heading={"Health Check"} image={img2} />
                <Servicecard countno={'03'} heading={"Blood Bank"} image={img3} />
            </div>
        </div>
    );
};

export default Services;