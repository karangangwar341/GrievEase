import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './SignIn';

const Shift = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const switchToSignUp = (event) => {
        setIsSignIn(false);
        event.preventDefault();
    };

    const switchToSignIn = (event) => {
        setIsSignIn(true);
        event.preventDefault();
    };

    return (
        <div className="App border-white border-2 rounded-2xl p-2">
            <div >
                <div className={`inset-0 flex justify-center items-center w-full`}>
                    {isSignIn ? (
                        <div >
                            <Login />
                            <p className='mt-6'>Don't have an account? <button className="button button-flat hover:bg-orange-200 text-orange-900 font-medium text-sm px-2  mr-1 rounded-lg focus:outline-none" onClick={switchToSignUp}>Sign Up</button></p>
                        </div>
                    ) : (
                        <div>
                            <SignUp />
                            <p className='mt-6 text-center'>Already have an account? <button className="button button-flat hover:bg-orange-200 text-orange-900 font-medium text-sm px-2  mr-1 rounded-lg focus:outline-none" onClick={switchToSignIn}>Sign In</button></p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Shift;
