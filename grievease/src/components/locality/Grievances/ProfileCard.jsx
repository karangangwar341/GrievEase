import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdWidthFull } from "react-icons/md";
import { database } from "../../../firebase";
import { updateDoc, doc } from "firebase/firestore";

const ProfileCard = ({ post }) => {
    const [totalCount, setTotalCount] = useState(post.Upvotes);
    const [showDescription, setShowDescription] = useState(false);
    const [isCommentOpen, setIsCommentOpen] = useState(false);

    const toggleCommentSection = () => {
        setIsCommentOpen(!isCommentOpen);
    };

    const handleLikes = async () => {
        setTotalCount((count) => count + 1);
        const grievanceRef = doc(database, "grievances", post.id);
        await updateDoc(grievanceRef, { Upvotes: post.Upvotes + 1 });
        console.log(post.id);
    }

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className='p-3 bg-orange-400/60 shadow-md rounded-xl mb-3'>
            <div className='flex flex-row w-5em'>
                <div className='w-1/4 h-auto mr-5'>
                    <img src={post.image} alt={post.name} className='rounded-xl h-36 w-36' />
                </div>
                <div className='w-4/6'>
                    <div className='mb-1'>
                        <h2 className='text-2xl font-semibold'>{post.title}</h2>
                    </div>
                    <div>
                        <h3 className='bg-white w-44 mb-6 rounded-2xl px-2'>{post.department}</h3>
                    </div>
                    <div className='detail pt-3 text-sm text-red-950'>
                        <h2>By: {post.name}</h2>
                        <h3>{post.date}</h3>
                        <p className='flex flex-row items-center cursor-pointer' onClick={toggleDescription}>
                            Description
                            {showDescription ? <MdKeyboardArrowUp className='ml-1' /> : <MdKeyboardArrowDown className='ml-1' />}
                        </p>
                        {showDescription && (
                            <div>
                                <p>{post.description}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className=' pt-8 flex flex-col justify-center items-center '>
                    <div className='bg-white mb-4 w-12 rounded-full h-12 flex justify-center items-center p-1' onClick={handleLikes}>
                        <FaHeart />
                    </div>
                    <div className=''>
                        <p className='font-semibold text-md'>{totalCount}</p>
                    </div>
                </div>
            </div>
            <div className='mt-1'>
                <div className=" relative text-left flex">
                    <button onClick={toggleCommentSection} type="button" className="ml-auto w-64 flex bg-white text-orange-950 items-center mr-4 mb-3 px-4 py-2 mt-3 rounded-lg shadow-md hover:bg-orange-500 transition duration-300 ease-in-out">
                        Open Comment Section
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M3 10a7 7 0 1114 0 7 7 0 01-14 0zm7-5a1 1 0 00-1 1v2a1 1 0 002 0V6a1 1 0 00-1-1zm0 8a1 1 0 100 2 1 1 0 000-2z" />
                        </svg>
                    </button>

                    {isCommentOpen && (
                       <div style={{ width: "100%", height: 400 }} className="z-10 mt-14 origin-top-right absolute right-0 rounded-md shadow-lg bg-white/40 ring-1 ring-black ring-opacity-5 backdrop-blur-md">
                  
                  
                  
                  
                       </div>
                   
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
