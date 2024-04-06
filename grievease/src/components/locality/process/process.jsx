import React from 'react';
import './process.css';
import ProcessImg from "./transparent.png";

const Process = () =>{
    return (
        <div className='process-body'>
            <h1 className='process-h1'>Our Process Flow</h1>
            <div className='process-img'>
                <img src={ProcessImg} alt="flowchart" className='ProcessFlowImage'/>
            </div>
        </div>
    )
}

export default Process;