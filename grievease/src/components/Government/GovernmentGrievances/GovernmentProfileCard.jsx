import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { database } from "../../../firebase";
import { updateDoc,doc } from "firebase/firestore";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";

const GovernmentProfileCard = ({ post ,change,show}) => {
    const [showDescription, setShowDescription] = useState(false);
    const handleStatus = async () =>{
        const grievanceRef = doc(database, "grievances", post.id);
        await updateDoc(grievanceRef, { status: change });
        window.location.reload();
    };
    

    function toggleDescription() {
        setShowDescription(!showDescription);
    }

    return (
        <div className='p-3 bg-orange-400/60 shadow-md rounded-xl mb-3'>
            <div className='flex flex-row w-5em'>
                <div className='w-1/4 h-auto mr-5'>
                    <img src={post.image} alt={post.name} className='rounded-xl h-36 w-36'/>
                </div>
                <div className='w-4/6'>
                    <div className='mb-1'>
                        <h2 className='text-2xl font-semibold'>{post.title}</h2>
                    </div>
                    <div>
                        <h3 className='bg-white w-1/4 rounded-2xl px-2'>{post.department}</h3>
                    </div>
                    <div className='detail pt-3 text-sm text-red-950'>
                        <h2>By: {post.name}</h2>
                        <h3>{post.date}</h3>
                        <p className='flex flex-row items-center cursor-pointer' onClick={toggleDescription}>
                            Description
                            {showDescription ? <MdKeyboardArrowUp className='ml-1'/> : <MdKeyboardArrowDown className='ml-1'/>}
                        </p>
                        {showDescription && (
                            <div>
                                <p>{post.description}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className=' pt-8 flex flex-col justify-center items-center '>
                    <div><p>Status:{post.status}</p></div>
                    {show && <button onClick={handleStatus}><TbArrowBigRightLinesFilled/> {change}</button>}
                    
                </div>
            </div>
        </div>
    );
}

export default GovernmentProfileCard;
