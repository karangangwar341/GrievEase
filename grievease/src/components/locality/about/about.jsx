import React from 'react';

const About = () => {
    return (
        <div className="bg-gradient-to-b from-white/10 to-gray-300/20 py-12 px-6 sm:px-12 lg:px-24 rounded-lg shadow-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8">About Us</h1>
            <div className="text-lg text-gray-700">
                <p className="mb-6">
                    GrievEase is your platform to voice concerns and find solutions. Here's a quick overview of the features: 
                </p>
                <ul className="list-disc list-inside mb-8">
                    <li><strong>Submit Your Complaint:</strong> Click on the "Grievance Form" to submit your complaint. Your concerns matter, and we are here to address them promptly.</li>
                    <li><strong>Check Reported Grievances:</strong> Explore "Grievances Reported" to stay updated on issues reported in your locality. Together, we can make a positive impact in our community.</li>
                    <li><strong>Update Profile:</strong> Click on the dropdown icon in the header to update your profile details.</li>
                    <li><strong>LogOut:</strong> Click on the logout icon to log out.</li>
                    <li><strong>Rules and Regulation:</strong> Click on "Rules regarding grievances" to go through our rules and regulations.</li>
                </ul>
                <p className="font-semibold">Thank you for joining GrievEase. Your contributions help build a better, more responsive community!</p>
            </div>
        </div>
    );
}

export default About;
