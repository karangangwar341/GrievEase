
import './Card2In.css'
const Card201=(props)=>{
    const SubmitHandler=()=>{
        console.log("hello");
    }
    return(
        <button onClick={SubmitHandler} className="inner-card2">
         
         <div className="inner-card2-content">
           <span ><img src={props.imgurl} alt="Logo2" className="logo2"  /></span> 
            <span><p1 className="name2">{props.name}</p1></span>
          </div>
        </button>
    )
}

export default Card201;