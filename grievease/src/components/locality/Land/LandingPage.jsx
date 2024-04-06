import React from 'react';
import icon from '../../../assets/icon.png';
import arrow from '../../../assets/arrow.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="bg-gradient-to-br from-orange-300 to-orange-500 min-h-screen flex justify-center items-center">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left w-full md:w-3/4 lg:w-2/3">
                <section className="md:w-2/3">
                    <h1 className=" text-5xl text-orange-700 font-bold leading-tight mb-4"><span className='text-orange-900'>Grievances</span> become<br className="md:hidden" />solutions <span className='text-orange-900'>here</span></h1>
                    <p className="text-black/70 text-lg font-medium  md:text-base lg:text-lg xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae.</p>
                    <Link to='/next'><button className="rounded-full mt-24 px-6 py-3 text-lg bg-orange-600 text-white shadow-lg flex items-center justify-center">
                        <span className="mr-2">Get Started</span>
                        <img src={arrow} alt="Arrow" className="w-6 h-6" />
                    </button></Link> </section>
                <section className="md:w-1/3">
                    <img src={icon} alt="Icon" className="hidden md:block mx-auto mb-4" />
                </section>
            </div>
        </div>
    );
};

export default LandingPage;
