import Card1 from './lefty/card1/Card1';
import Card2 from './lefty/card2/Card2';
import Upper from './Right/upper';
import Lower from './Right/Lower';
import './main.css';
import { Outlet } from "react-router";
import Center from './center/Center';
const Main=()=>{
    return(
        
        <div className="main">
            <div className="left">
               
               <Card2></Card2>
               <Card1></Card1>
                
            </div>
            <div className="middle">
               
                <Center/>
                <Outlet></Outlet>
            </div>
            <div className="right">
                <Upper></Upper>
                <Lower></Lower>
            </div>
        </div>
    )
    }
    
    export default Main;