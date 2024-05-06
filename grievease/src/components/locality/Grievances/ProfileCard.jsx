import { useState, useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { database, auth } from "../../../firebase"; // Adjust the import path as necessary
import { updateDoc, doc, arrayUnion, getDoc, onSnapshot} from "firebase/firestore";

const ProfileCard = ({ post }) => {
    const [totalCount, setTotalCount] = useState(post.Upvotes);
    const [showDescription, setShowDescription] = useState(false);
    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const grievanceRef = doc(database, "grievances", post.id);

    useEffect(() => {
        const fetchUserData = async () => {
            if (auth.currentUser) {
                setCurrentUser(auth.currentUser);
            }
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        
        const fetchComments = async () => {
            const grievanceDoc = await getDoc(grievanceRef);
            if (grievanceDoc.exists()) {
                setComments(grievanceDoc.data().comments || []);
            }
        };
        fetchComments();
    }, [post.id]);

    useEffect(() => {
        const unsubscribe = onSnapshot(grievanceRef, (doc) => {
            if (doc.exists()) {
                setComments(doc.data().comments || []);
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, [grievanceRef]);

    const toggleCommentSection = () => {
        setIsCommentOpen(!isCommentOpen);
    };

    const handleLikes = async () => {
        setTotalCount((count) => count + 1);
        await updateDoc(grievanceRef, { Upvotes: totalCount });
    }

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    const addComment = async () => {
        if (!currentUser) return; // Ensure user is logged in

        const newCommentObj = {
            text: newComment,
            author: currentUser.displayName || "Anonymous",
            timestamp: new Date().toISOString(),
        };

        await updateDoc(grievanceRef, {
            comments: arrayUnion(newCommentObj),
        });

        setComments((currentComments) => [...currentComments, newCommentObj]);
        setNewComment('');
    };

    return (
        <div>
        <div className='p-3 bg-orange-400/60 shadow-md rounded-xl mb-1'>
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
            
        </div>
        <div className='mt-0 mb-8'>
                <div className=" relative text-left flex">
                    <button onClick={toggleCommentSection} type="button" className="ml-auto w-56 flex bg-white text-orange-950 items-center mr-4 mb-3 px-4 py-2 mt-3 rounded-lg shadow-md hover:bg-orange-500 transition duration-300 ease-in-out">
                        {isCommentOpen? "Close Comment Section":"Open Comment Section"}
                    </button>
                    {isCommentOpen && (
                        <div style={{ width: "100%", height: 400 }} className="z-10 mt-14 origin-top-right absolute right-0 rounded-md shadow-lg bg-white/50 p-6 ring-1 ring-black ring-opacity-5 backdrop-blur-md">
                            <div style={{ height: 320, overflowY: 'scroll', msOverflowStyle: 'none', scrollbarWidth: 'none' }} className='overflow-y-scroll'>
                                {comments.map((comment, index) => (
                                    <div key={index} className="comment flex justify-between">
                                        <p className='bg-white/90 m-1 w-fit pr-12 pl-3 rounded-lg'>{comment.text}</p>
                                        <div className=''>
                                            <p className='bg-orange-400/60 m-1 w-fit pr-12 pl-3 rounded-lg'>{comment.author}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className='flex mt-2 gap-1'>
                            <input
                                type="text"
                                className='rounded-2xl'
                                value={newComment}
                                style={{ background: "#ffffff" }}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a comment..."
                            />

                            <button className='bg-orange-400 hover:bg-orange-500 hover:shadow-sm px-8 rounded-xl' onClick={addComment}>Submit</button>
                                </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
