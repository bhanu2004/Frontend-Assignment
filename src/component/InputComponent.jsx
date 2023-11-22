import React, { useState } from 'react'

function InputComponent({setOrder,name,data,level0,display}) {
  // const [order,setOrder] = useState();
  const handleUpdate = (e)=>{
    if(!level0){
      setOrder((prevData)=>({...prevData,[data.jsonKey]:e.target.value}))
    }
    else{
      setOrder((prevData)=>({
        ...prevData,
        level0:{...prevData.level0,[data.jsonKey]:e.target.value}
      }))
    }
  }
  return (
    <div className={`input ${data.level==0?'section-container':""} ${(display==false && !data.validate.required)?"hidden":""}`}>
        <span>{data.label} {data.validate?.required && <span className='redStar'>*</span>}</span>
        <input type="text" onChange={(e)=>handleUpdate(e)} placeholder={data.placeholder?data.placeholder:`Enter ${data.label}`}/>
    </div>
  )
}

export default InputComponent