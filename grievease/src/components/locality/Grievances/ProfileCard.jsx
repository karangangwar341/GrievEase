import Image from '../../../assets/potholes.png';
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const ProfileCard = () => {
    const [totalCount, setTotalCount] = useState(0);
    const [showDescription, setShowDescription] = useState(false);

    function handleLikes() {
        setTotalCount((totalCount) => totalCount + 1);
    }

    function toggleDescription() {
        setShowDescription(!showDescription);
    }

    return (
        <div className='p-4 bg-orange-400 rounded-xl m-5'>
            <div className='flex flex-row w-5em'>
                <div className='w-1/3 mr-5'>
                    <img src={Image} alt='potholes' className='rounded-xl'/>
                </div>
                <div className='w-4/6'>
                    <div className='mb-1'>
                        <h2 className='text-3xl font-semibold'>Faulty Street Lights</h2>
                    </div>
                    <div>
                        <h3 className='bg-white w-1/4 rounded-2xl px-2'>Department</h3>
                    </div>
                    <div className='detail pt-10 font-medium text-re-900'>
                        <h2>By: Ayush Sahu</h2>
                        <h3>Today</h3>
                        <p className='flex flex-row items-center cursor-pointer' onClick={toggleDescription}>
                            Description
                            {showDescription ? <MdKeyboardArrowUp className='ml-1'/> : <MdKeyboardArrowDown className='ml-1'/>}
                        </p>
                        {showDescription && (
                            <div>
                                <p>Description content goes here.. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat eum minus quo blanditiis neque consequatur nihil fugiat, obcaecati saepe alias totam accusamus error placeat cum temporibus deleniti quia perspiciatis expedita..</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='p-3'>
                    <div className='bg-white mb-4 w-12 rounded-full h-12 flex justify-center items-center p-1' onClick={handleLikes}>
                        <FaHeart />
                    </div>
                    <div className='pl-4'>
                        <p className='font-semibold text-xl'>{totalCount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
