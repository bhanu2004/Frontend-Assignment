import React, { useState } from 'react'
import { FaCircleInfo } from "react-icons/fa6";
function InfoComponent({label,desc}) {
    const [infoClick, setInfoClick] = useState(false);
  return (
    <div className='info-container' onMouseOut={()=>setInfoClick(false)} onMouseOver={()=>setInfoClick(true)}>
        <FaCircleInfo />
    {infoClick && <div className='info-box'>
        <p className="info-head">{label}</p>
        <p className='info-desc'>{desc}</p>
    </div>}
    </div>
  )
}

export default InfoComponent