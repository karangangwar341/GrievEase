import React from 'react';
import Card1 from './lefty/card1/Card1';
import Card2 from './lefty/card2/Card2';
import Upper from './Right/upper';
import Lower from './Right/Lower';
import './main.css';
import { Outlet } from "react-router";
import Center from './center/Center';
import Nav from './home/header';
import ProfessionalButtons from './Right/right_bottom/ProfessionalButtons';

const Main = () => {
    return (
        <div className="main">
            <div>
                <Nav />
            </div>
           <div className='flex'>
           <div className="left">
                <Card2 />
                <Card1 />
            </div>
            <div className="middle">
                <Center />
                <Outlet />
            </div>
            <div className="right">
               <ProfessionalButtons/>
                <Lower />
                <Upper />
            </div>
           </div>
        </div>
    );
}


export default Main;
