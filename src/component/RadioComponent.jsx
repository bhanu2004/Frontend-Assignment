import React, { useEffect, useState } from 'react'
import setOrderFn from './setOrderFn';

function RadioComponent({setOrder,data,level0,level1,display}) {
  
    const [pizza_type, setPizzaType] = useState(data.defaultValue);
    useEffect(()=>{
      if(data.validate.defaultValue){
        handleUpdate(data.validate.defaultValue);
      }
    },[data])
    const handleUpdate = (value)=>{
 
      setPizzaType(value);
      setOrderFn(level0,level1,setOrder,data,value);
      
    }

  return (
    <div className={`radio ${data.level==0?'section-container':""} ${(display==false && !data.validate.required)?"hidden":""}`}>
        {data.validate.options.map((item)=>{
            return (
                <div key={item.value} className={`options ${item.value==pizza_type?"selected":""}`} onClick={()=>{if(!data.validate?.immutable){handleUpdate(item.value)}}}>{item.label}</div>
            )
        })}
    </div>
  )
}

export default RadioComponent