import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const ProfileCard = ({ post }) => {
    const [totalCount, setTotalCount] = useState(post.likes);
    const [showDescription, setShowDescription] = useState(false);

    function handleLikes() {
        setTotalCount((count) => count + 1);
    }

    function toggleDescription() {
        setShowDescription(!showDescription);
    }

    return (
        <div className='p-3 bg-orange-400/60 shadow-md rounded-xl mb-3'>
            <div className='flex flex-row w-5em'>
                <div className='w-1/4 h-38 mr-5'>
                    <img src={post.image} alt={post.name} className='rounded-xl h-fit'/>
                </div>
                <div className='w-4/6'>
                    <div className='mb-1'>
                        <h2 className='text-2xl font-semibold'>{post.name}</h2>
                    </div>
                    <div>
                        <h3 className='bg-white w-1/4 rounded-2xl px-2'>{post.department}</h3>
                    </div>
                    <div className='detail pt-3 text-sm text-red-950'>
                        <h2>By: {post.by}</h2>
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
                <div className='p-3 pt-8'>
                    <div className='bg-white mb-4 w-12 rounded-full h-12 flex justify-center items-center p-1' onClick={handleLikes}>
                        <FaHeart />
                    </div>
                    <div className='pl-4'>
                        <p className='font-semibold text-md'>{totalCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
