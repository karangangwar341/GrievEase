import './Card1In.css';

export default function Card1In({ imgurl, text }) {
  const SubmitHandler = () => {
    // Handle submission
  };

  return (
    <button onClick={SubmitHandler} className="inner-card">
      <div className="inner-card-content">
        <span>
          <img src={imgurl} alt="Logo" className="logo" />
        </span>
        <span>
          <p1 className="name">{text}</p1>
        </span>
      </div>
    </button>
  );
}
