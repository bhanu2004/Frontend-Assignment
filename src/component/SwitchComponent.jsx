import React, { useState } from 'react'
import Switch from 'react-switch';
function SwitchComponent({name,setOrder,data,level0,level1}) {
    const [clicked, setClicked] = useState(false);
    const handleClick = ()=>{
        let value;
        if(clicked==false) value=true;
        else value = false;

        setClicked(value);

        if(!level0){
            setOrder((prevData)=>({...prevData,[data.jsonKey]:value}))
          }
          else if(!level1){
            setOrder((prevData)=>({
              ...prevData,
              [level0]:{...prevData[level0],[data.jsonKey]:value}
            }))
          }
          else{
            setOrder((prevData)=>({
              ...prevData,
              [level0]:{
                ...prevData[level0],
                [level1]:{
                  ...prevData[level0][level1],[data.jsonKey]:value
                }
              }
            }))
          }
    }
  return (
    <div className={`switch-component ${data.level==0?'section-container':""}`}>
        <span>{data.label}</span>
        <div className={`switch ${clicked?"clicked":""}`} onClick={handleClick}>
            <div className="switch-btn"></div>
        </div>

    </div>
  )
}

export default SwitchComponent