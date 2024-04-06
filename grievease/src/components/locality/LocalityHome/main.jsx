import React from 'react';
import Card1 from './lefty/card1/Card1';
import Card2 from './lefty/card2/Card2';
import Upper from './Right/upper';
import Lower from './Right/Lower';
import './main.css';
import { Outlet } from "react-router";
import Center from './center/Center';
import Nav from './home/header';

const Main = () => {
    return (
        <div className="main">
            <div className="left">
                <Card2 />
                <Card1 />
            </div>
            <div className="middle">
                <Center />
                <Outlet />
            </div>
            <div className="right">
                <Upper />
                <Lower />
            </div>
            <div>
                <Nav />
            </div>
        </div>
    );
}

export default Main;
