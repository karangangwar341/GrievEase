import React, { useState } from 'react'
import Shift from './Shift'
import home from '../../../assets/home.jpg'

const Sample = () => {
    const[showSignUp,setShowSignup]=useState(false)
  return (
    <div className='w-screen h-screen flex justify-center items-center align-middle'>
        <div className=' flex w-3/5 h-2/3 bg-white/0 shadow-orange-50 rounded-xl gap-24'>
            <img className='w-3/5 h-full rounded-full shadow-sm' src={home} alt="imgae"></img>
            <div className='flex justify-evenly items-center '> 
            <Shift/>
        </div>
        </div>
       
    </div>
  )
}

export default Sample