import React from 'react'
import { Link } from "react-router-dom";

const ProfessionalButtons = () => {
  return (
    <div className='flex flex-col gap-3'> 
        <button className='w-full font-bold text-orange-900 py-3 text-xl bg-white/20 focus:bg-white/40 rounded-lg focus:shadow-lg hover:bg-white/30'>
            Hire Proffesional
        </button>
       
        <Link to='/home/regester'><button className='w-full font-bold text-orange-900 py-3 text-xl bg-white/20 focus:bg-white/40 rounded-lg focus:shadow-lg hover:bg-white/30'> 
            Be a Proffesional
        </button></Link>

    </div>
  )
}

export default ProfessionalButtons