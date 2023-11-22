import React, { useEffect, useState } from 'react'

function RadioComponent({name,setOrder,data,level0,level1,display}) {
  
    const [pizza_type, setPizzaType] = useState(data.defaultValue);
    useEffect(()=>{
      if(data.validate.defaultValue){
        handleUpdate(data.validate.defaultValue);
      }
    },[])
    const handleUpdate = (value)=>{
      setPizzaType(value);
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
    <div className={`radio ${data.level==0?'section-container':""} ${(display==false && !data.validate.required)?"hidden":""}`}>
        {data.validate.options.map((item)=>{
            return (
                <div className={`options ${item.value==pizza_type?"selected":""}`} onClick={()=>{handleUpdate(item.value)}}>{item.label}</div>
            )
        })}
    </div>
  )
}

export default RadioComponent