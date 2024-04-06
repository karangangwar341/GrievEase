import React from 'react'
import { FcHome } from "react-icons/fc";
const ProfessionalCardHire = (props) => {
  return (
    <div className='flex shadow-lg m-3 rounded-lg bg-white/20'>
    <img src='https://content.jdmagicbox.com/comp/durg/e5/9999px788.x788.170916104749.x5e5/catalogue/friends-electrical-bhilai-sector-6-bhilai-electricians-9h4mzcda41.jpg' className='w-44 h-44 m-3 rounded-xl object-cover' alt='profile pic' />
    <section className="flex flex-col justify-between w-full">
        <div className="flex justify-between items-center mt-4 mx-3">
            <h1 className='text-lg font-bold text-gray-800'>Name</h1>
            <h1 className='text-lg font-semi-bold bg-white rounded-xl px-4 text-gray-800'>Services</h1>
            <p className="text-lg font-medium text-orange-950 py-3 flex items-center">
    <FcHome className='w-8 h-8 mr-2' />
    Locality
</p>

        </div>
        
        <p className="text-sm text-gray-700 mt-2">Bio: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, iste quos similique consequuntur officia omnis facere! Architecto rerum molestias obcaecati iure, ad debitis! Dicta tempora, numquam dolores qui voluptates eius!</p>
        <button className="ml-auto w-32 bg-orange-400 text-white mr-4 mb-3 px-4 py-2 mt-3 rounded-lg shadow-md hover:bg-orange-500 transition duration-300 ease-in-out">Contact</button>
    </section>
</div>

  )
}

export default ProfessionalCardHire