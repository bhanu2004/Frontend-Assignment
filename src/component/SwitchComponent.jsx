import React, { useEffect, useState } from 'react'
import InfoComponent from './InfoComponent';
import setOrderFn from './setOrderFn';
function SwitchComponent({setOrder,data,level0,level1}) {
    const [clicked, setClicked] = useState(data.validate?.defaultValue);
    useEffect(()=>{
      if(data.validate?.defaultValue!=undefined){
        handleClick(data.validate.defaultValue);
      }
    },[data])

    const handleClick = (value)=>{
        setClicked(value);
        setOrderFn(level0,level1,setOrder,data,value);
       
    }
  return (
    <div key={data.jsonKey} className={`switch-component ${data.level==0?'section-container':""}`}>

        <input disabled={data.validate?.immutable} type="checkbox" name="#" id="" onChange={(e)=>{handleClick(!clicked)}} checked={clicked} />
        <div className='label-container'>
        <span>
            <label htmlFor="#">{data.label.replace("_"," ")}</label>
            {data.validate?.required && <span className='redStar'>*</span>}
        </span>
          {data.description && <InfoComponent label={data.label} desc={data.description}/>}
        </div>
        

    </div>
  )
}

export default SwitchComponent