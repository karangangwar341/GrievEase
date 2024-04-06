import React, { useState } from 'react';

const ProfessionalCard = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [selectedService, setSelectedService] = useState("");

    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        setProfileImage(file);
    };

    const handleServiceChange = (event) => {
        setSelectedService(event.target.value);
    };

    return (
        <div className="bg-white/20 p-8 mx-32 rounded-md shadow-xl">
            <h2 className="text-2xl font-bold text-orange-950 mb-2">User Profile</h2>
            <form className='flex flex-col justify-center'>
                <div className='flex gap-2 justify-evenly'>
                    <div className="mb-2 w-full">
                        <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">First Name</label>
                        <input required type="text" id="firstName" name="firstName" className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500 bg-white" />
                    </div>
                    <div className="mb-2 w-full">
                        <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">Last Name</label>
                        <input required type="text" id="lastName" name="lastName" className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500 bg-white" />
                    </div>
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500 bg-white" />
                </div>

                <div className="mb-2">
                    <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
                    <input required type="text" id="mobile" name="mobile" className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500 bg-white" />
                </div>
                <div className="mb-2">
                    <label htmlFor="services" className="block text-gray-700 font-semibold mb-2">Services</label>
                    <select id="services" name="services" className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500" onChange={handleServiceChange}>
                        <option value="">Select a service...</option>
                        <option value="Water">Water</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Gas">Gas</option>
                        <option value="Internet">Internet</option>
                    </select>
                </div>
                <div className='flex justify-evenly'>
                    <div className="mb-2">
                        <label htmlFor="profileImage" className="block text-gray-700 font-semibold mb-2">Profile Image</label>
                        <input type="file" id="profileImage" name="profileImage" onChange={handleProfileImageChange} accept="image/*" className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500 bg-white" />
                    </div>
                    <div>
                        {profileImage && (
                            <div className="mb-2">
                                <label className="block text-gray-700 font-semibold mb-2">Preview</label>
                                <img src={URL.createObjectURL(profileImage)} alt="Profile" className="w-32 h-32 rounded-md" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="mb-2">
                    <label htmlFor="bio" className="block text-gray-700 font-semibold mb-2">Bio</label>
                    <textarea required id="bio" name="bio" className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500 "></textarea>
                </div>
                <div className='flex justify-evenly'>
                    <button className=" bg-orange-400 text-white px-8 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-blue-600" type="reset">Reset</button>
                    <button type="submit" className="  bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-blue-600">Save</button>
                </div>
            </form>
        </div>
    );
};

export default ProfessionalCard;
