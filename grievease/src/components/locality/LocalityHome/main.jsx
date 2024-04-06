import Card1 from './lefty/card1/Card1';
import Card2 from './lefty/card2/Card2';
import Upper from './Right/upper';
import Lower from './Right/Lower';
import './main.css';
import CardComponent from '../GrievanceForm/FormCard';
import ProfileCard from '../Grievances/ProfileCard';
//import Rules from '../Rules/rules';
//import Process from '../process/process';
const Main=()=>{
    return(
        
        <div className="main">
            
            <div className="left">
               
               <Card2></Card2>
               <Card1></Card1>
                
            </div>
            <div className="middle">
                <ProfileCard/>
                {/*<Process/>*/}
                {/*<Rules/>*/}
            </div>
            <div className="right">
                <Upper></Upper>
                <Lower></Lower>
            </div>
        </div>
    )
    }
    
    export default Main;