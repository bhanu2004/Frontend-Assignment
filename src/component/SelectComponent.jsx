import React, { useEffect } from 'react'

function SelectComponent({setOrder,data,level0,level1,display}) {
  const handleUpdate = (value)=>{
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
  useEffect(()=>{
    if(data.validate.defaultValue){
      handleUpdate(data.validate.defaultValue);
    }
  },[])
  return (
    <div className={`select ${data.level==0?'section-container':""} ${(display==false && !data.validate.required)?"hidden":""}`}>
        <span>{data.label}</span>
        <select onChange={(e)=>handleUpdate(e.target.value)}>
            {data.validate.options.map((item)=>{
                return <option value={item.value}>{item.label}</option>
            })}
        </select>
    </div>
  )
}

export default SelectComponent