import React from 'react';

const Contact = () => {
    return (
        <div className='bg-red-600 lg:px-40 p-4 md:px-20 md:py-10 lg:py-20 flex justify-between md:flex-nowrap flex-wrap gap-10 items-center'>
            <div className='text-white space-y-4 text-lg '>
                <h1 className="text-4xl text-white">Let&apos;s change the world , Join us Now !</h1>
                <p className='font-thin'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself , because it is pain , but occasionally <br />
                    circumstances occur in which tail and pain can procure real pleasure.</p>
            </div>
            <div>
                <button className='bg-white hover:scale-[1.2]  ease duration-150 font-bold text-black py-4 px-8'>Contact Us</button>
            </div>
        </div>
    );
};

export default Contact;