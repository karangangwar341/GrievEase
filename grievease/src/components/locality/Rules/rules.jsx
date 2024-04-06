import React from "react";


const Rules = () => {
    return (
        <div className="rules max-w-4xl mx-auto px-4 py-8">
            <hr className="line mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Rules and Regulations for the<br />Grievance Submission Portal</h2>

            <div className="text-lg text-gray-800">
                <p className="intro font-semibold">Introduction</p>
                <p>Welcome to our Grievance Submission Portal. This article outlines the rules and regulations governing the submission process, ensuring that every grievance is handled efficiently and fairly.</p>
                <br />
                <p className="reason font-semibold">Why We Need Rules and Regulations</p>
                <p>Rules and regulations are essential to maintain order and clarity in the grievance redressal process. They safeguard against misuse and ensure the system’s integrity.</p>
                <br />
                <p className="guidelines font-semibold">Submission Guidelines</p>
                <ul className="list-disc pl-6">
                    <li>Each grievance should be unique and not reported twice by the same person to prevent redundancy.</li>
                    <li>Only the concerned department must be tagged along with the grievances to avoid miscommunication.</li>
                    <li>If you are not aware of the concerned department, lodge it as miscellaneous.</li>
                    <li>Grievances must be specific and actionable, with clear details of the issue and any supporting evidence. Action will be taken on the user if he makes fake complaints.</li>
                </ul>
                <br />
                <p className="excluded font-semibold">Excluded Categories</p>
                <ul className="list-disc pl-6">
                    <li>RTI Matters</li>
                    <li>Religious matters</li>
                    <li>Suggestions</li>
                    <li>Personal issues</li>
                    <li>Grievances of Government employees concerning their service matters, including disciplinary proceedings.</li>
                </ul>
            </div>
        </div>
    )
}

export default Rules;
