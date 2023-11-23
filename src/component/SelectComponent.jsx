import React, { useEffect } from 'react'
import InfoComponent from './InfoComponent'
import setOrderFn from './setOrderFn'

function SelectComponent({setOrder,data,level0,level1,display}) {
  const handleUpdate = (value)=>{
    
    setOrderFn(level0,level1,setOrder,data,value);
  }
  useEffect(()=>{
    if(data.validate.defaultValue){
      handleUpdate(data.validate.defaultValue);
    }
  },[data])
  return (
    <div className={`select ${data.level==0?'section-container':""} ${(display==false && !data.validate.required)?"hidden":""}`}>
        <div className='label-container'>
          <span>{data.label.replace("_"," ")} {data.validate?.required && <span className='redStar'>*</span>}</span>
          {data.description && <InfoComponent label={data.label} desc={data.description}/>}
        </div>
        
        <select onChange={(e)=>handleUpdate(e.target.value)} disabled={data.validate?.immutable}>
            {data.validate.options.map((item)=>{
                return <option key={item.value} value={item.value}>{item.label}</option>
            })}
        </select>
    </div>
  )
}

export default SelectComponent