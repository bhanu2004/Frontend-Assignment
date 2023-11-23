import React, { useEffect, useState } from 'react'
import InfoComponent from './InfoComponent';
import setOrderFn from './setOrderFn';
function InputComponent({setOrder,data,level0,level1,display}) {
  const [inputData, setInputData] = useState("");

  const handleUpdate = (e)=>{
    setInputData(e.target.value);
    const value = e.target.value;
    setOrderFn(level0,level1,setOrder,data,value);
  
  }
  useEffect(()=>{
    if(data.validate.defaultValue){
      handleUpdate(data.validate.defaultValue);
    }
    else setInputData("");
  },[data])
  return (
    <div className={`input ${data.level==0?'section-container':""} ${(display==false && !data.validate.required)?"hidden":""}`}>
        <span className='label-container'>
          {data.label.replace("_"," ")} {data.validate?.required && <span className='redStar'>*</span>}
          {data.description && <InfoComponent label={data.label} desc={data.description}/>}
        </span>
        
        <input type="text" value={inputData} disabled={data.validate?.immutable} onChange={(e)=>handleUpdate(e)} placeholder={data.placeholder?data.placeholder:`Enter ${data.label}`}/>
    </div>
  )
}

export default InputComponent