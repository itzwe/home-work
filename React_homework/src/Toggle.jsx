import { useState } from "react";
import "./styles/main.css";

function Toggle({background}) {
  const [left, setLeft] = useState(0);
  const [bgColor, setBgColor] = useState("#CCCCCC");

  const handleClick = () => {
    if (left === 0) {
      setLeft(39);
      setBgColor(background);
 
    } else {
      setLeft(0);
      setBgColor("#CCCCCC");
    }
  };

  const style = {
    left: `${left}px`
  };

  const bgStyle = {
    backgroundColor: bgColor
  };

  return (
    <div className="toggleBG" style={bgStyle}>
      <button className="toggleFG" onClick={handleClick} style={style}></button>
    </div>
  );
}

export default Toggle;
