
const Button = ({ textcolor, text, backgroundcolor,onClick, hovcol}) => {
    return (
      <div>
        <button onClick={(e) => onClick(e)}
          className={`font-bold rounded-3xl hover:${hovcol} ${textcolor} ${backgroundcolor} px-6 py-3`}
        >
          {text}
        </button>
      </div>
    );
  };
  
  export default Button;
  