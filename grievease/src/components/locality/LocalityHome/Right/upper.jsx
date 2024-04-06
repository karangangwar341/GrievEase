import "./Upper.css";
const Upper = () => {
  const submitHandler = () => {
    console.log("hii");
  };
  return (
    <div className="feed">
      <div>
        <button onClick={submitHandler} className="btn">
          Meetups &rarr;
        </button>
      </div>
      <p className="para">This feature is coming soon.....</p>
      <p className="para1">On place for local community meetings info.....</p>
    </div>
  );
};

export default Upper;
