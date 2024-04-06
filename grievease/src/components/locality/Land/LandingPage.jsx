import React from 'react';
import icon from '../../../assets/icon.png';
import arrow from '../../../assets/arrow.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="bg-gradient-to-br from-orange-300 to-orange-500 min-h-screen flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left w-full mx-16">
            <section className="md:w-2/3 md:mr-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-orange-700 font-bold leading-tight mb-6">
                    <span className='text-orange-900'>Grievances</span> become<br/>solutions <span className='text-orange-900'>here</span>
                </h1>
                <p className="text-black text-md md:text-xl lg:text-xl font-medium mb-8">
                    Elevate your community experience with GrievEase, where your concerns are heard,
                    and solutions are crafted collaboratively.<br/> Join us in building a smarter,
                    more connected neighborhood. Sign up now, because positive change begins with you!
                </p>
                <Link to='/next'>
                    <button className="rounded-full px-8 py-4 text-lg md:text-xl bg-orange-600 text-white shadow-lg flex items-center justify-center hover:bg-orange-700 transition duration-300 ease-in-out">
                        <span className="mr-2">Get Started</span>
                        <img src={arrow} alt="Arrow" className="w-6 h-6" />
                    </button>
                </Link>
            </section>
            <section className="md:w-2/4">
                <img src={icon} alt="Icon" className="hidden md:block mx-auto mb-4" />
            </section>
        </div>
    </div>
    );
};

export default LandingPage;


