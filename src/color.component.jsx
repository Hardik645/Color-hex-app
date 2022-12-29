import { useState } from 'react';
import setHexValue from 'colornames';

const ColorComponent = () => {
  const [color, setColor] = useState("Empty Value");
  const [textcolor ,setTextColor] = useState("black");

  return (
    <>
      <div className="box" style={{backgroundColor: color, color: textcolor}}>
        {color.length ? color : "Empty Value"}
        <br />
        {setHexValue(color)}
      </div>
      <input type="text" className="box_input" placeholder="Enter Color Here" 
      onChange={(e)=>{
        setColor(e.target.value);
      }}
      />
      <button className="box_button" 
      onClick={()=>{
        textcolor==="black"
          ?setTextColor("white")
          :setTextColor("black")
      }}>Toggle Text Color</button>
    </>
  );
}

export default ColorComponent;