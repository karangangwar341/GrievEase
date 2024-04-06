import './LowerIn.css'
const LowerIn=(props)=>{
 
    const SubmitHandler=()=>{
        console.log("hello");
    }
    return(
        <button onClick={SubmitHandler}className="innerinfo">
         
         <div className="innerinfocontent focus:bg-white/10">
           <span ><img src={props.imgurl} alt="Logo" className="icon"  /></span> 
            <span><p className="item">{props.name}</p></span>
            <span className="arrow"><p>&rarr;</p></span>
          </div>
        </button>
    )
}

export default LowerIn;