import React, { useState } from 'react';
import {database, auth} from '../.././firebase';
import {collection, addDoc } from "firebase/firestore";

const ProfessionalCard = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        services: '',
        profileImage: '',
        bio: '',
        uid: auth.currentUser.uid,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64String = event.target.result;
                setFormData({ ...formData, profileImage: base64String });
            };
            reader.readAsDataURL(file);
        }
    
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(database, 'WorkingProfessional'), formData);
            console.log('Document added with ID: ', docRef.id);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
        console.log(formData);
    };

    return (
        <div className="bg-white/20 p-8 mx-32 rounded-md shadow-xl">
            <h2 className="text-2xl font-bold text-orange-950 mb-2">Working Profile</h2>
            <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
                {/* Form fields */}
                {/* First Name */}
                <div className='flex gap-2 justify-evenly'>
                    <div className="mb-2 w-full">
                        <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">First Name</label>
                        <input
                            required
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            id="firstName"
                            className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500 bg-white"
                        />
                    </div>
                    {/* Last Name */}
                    <div className="mb-2 w-full">
                        <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">Last Name</label>
                        <input
                            required
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            id="lastName"
                            className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500 bg-white"
                        />
                    </div>
                </div>
                {/* Email */}
                <div className="mb-2">
                    <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        id="address"
                        className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500 bg-white"
                    />
                </div>
                {/* Mobile Number */}
                <div className="mb-2">
                    <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">Mobile Number</label>
                    <input
                        required
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        id="mobile"
                        className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500 bg-white"
                    />
                </div>
                {/* Services */}
                <div className="mb-2">
                    <label htmlFor="services" className="block text-gray-700 font-semibold mb-2">Services</label>
                    <select
                        id="services"
                        name="services"
                        value={formData.services}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Select a service...</option>
                        <option value="Water">Water</option>
                        <option value="Electricity">Electricity</option>
                        <option value="Gas">Gas</option>
                        <option value="Internet">Internet</option>
                    </select>
                </div>
                {/* Profile Image */}
                <div className='flex justify-evenly'>
                    <div className="mb-2">
                        <label htmlFor="profileImage" className="block text-gray-700 font-semibold mb-2">Profile Image</label>
                        <input
                            type="file"
                            name="profileImage"
                            onChange={handleProfileImageChange}
                            accept="image/*"
                            className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500 bg-white"
                        />
                    </div>
                </div>
                {/* Bio */}
                <div className="mb-2">
                    <label htmlFor="bio" className="block text-gray-700 font-semibold mb-2">Bio</label>
                    <textarea
                        required
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md focus:shadow-lg shadow-white focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                {/* Buttons */}
                <div className='flex justify-evenly'>
                    <button
                        className="bg-orange-400 text-white px-8 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-blue-600"
                        type="reset"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfessionalCard;
