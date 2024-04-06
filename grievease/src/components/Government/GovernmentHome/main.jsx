import Card1 from './lefty/card1/Card1';
import Card2 from './lefty/card2/Card2';
import Upper from './right/upper';
import Lower from './right/Lower';
import './main.css';
import { Outlet } from "react-router";
import Center from './center/Center';
import Nav from './header/header';

const GovernmentMain = () => {
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
                <Upper />
                <Lower />
            </div>
           </div>
        </div>
    );
}


export default GovernmentMain;
