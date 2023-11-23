import React, { useEffect, useState } from 'react'
import InputComponent from './InputComponent';
import RadioComponent from './RadioComponent';
import SelectComponent from './SelectComponent';
import SwitchComponent from './SwitchComponent';
import InfoComponent from './InfoComponent';

 function GroupSection({data,level0Key,order, setOrder, level1key}) {
    let copyData = data;
    if(data!=undefined)copyData.sort((a,b)=> {return a.sort-b.sort;})

    const [showHiddenBtn, setShowHiddenBtn] = useState(false); 
  const [showClicked, setShowClicked] = useState(false);

    function accessDeepProp(obj, path) {
        const properties = path.split(".");
        for (let i = 0; i < properties.length; i++) {
          if (!obj) return null;
          obj = obj[properties[i]];
        }
        return obj;
      }
     
    const handleData = (item)=>{

        if(item.disable==true) return <></>
        if(item.uiType=='Input'){
          return <InputComponent key={item.jsonKey} level0={level0Key}
            setOrder={setOrder}
            data={item}
            display={showClicked}/>
     
        }
        else if(item.uiType=='Radio'){
          return <RadioComponent key={item.jsonKey} level0={level0Key}
            level1={level1key}
            setOrder={setOrder}
            data={item}
            display={showClicked}/>
          
        }
        else if(item.uiType=='Select'){
          return <SelectComponent key={item.jsonKey} level0={level0Key}
            level1={level1key}
            setOrder={setOrder}
            data={item}
            display={showClicked}/>
          
        }
        else if(item.uiType=="Switch"){
          return <SwitchComponent key={item.jsonKey} level0={level0Key}
            level1={level1key}
            setOrder={setOrder}
            data={item}
            order={order}
            display={showClicked}/>
          
        }
        else if(item.uiType=='Group'){
          return <div key={item.jsonKey} className={`${item.level==0?'section-container':""}`}>
            <p className='group-head'>
              {item.label.replace("_"," ")}
              {item.validate?.required && <span className='redStar'>*</span>}
              {item.description && <InfoComponent label={item.label} desc={item.description}/>}
            </p>

            <GroupSection data = {item.subParameters} order={order} setOrder={setOrder} level0Key={item.jsonKey}/>

            
          </div>
        }
        else if(item.uiType=='Ignore'){
          const jsonKey = item.conditions[0].jsonKey;
          if(level0Key==null) level0Key=item.jsonKey;
          else level1key=item.jsonKey;
          const propValue = accessDeepProp(order,jsonKey);


          if((item.conditions[0].op=="==" && propValue == item.conditions[0].value) || 
          (item.conditions[0].op==">=" && propValue >= item.conditions[0].value) || 
          (item.conditions[0].op=="<=" && propValue <= item.conditions[0].value) || 
          (item.conditions[0].op=="<" && propValue < item.conditions[0].value) ||
          (item.conditions[0].op==">" && propValue > item.conditions[0].value) ||
          (item.conditions[0].op=="!=" && propValue != item.conditions[0].value)){
            
            const grName = item.jsonKey;
            return <div key={data.jsonKey} className={`${item.level==0?'section-container':""}`}>
              {item.level==0 && <p className='group-head'>{item.label} {item.reqired && <span className='redStar'>*</span>}</p>}
              <GroupSection data={item.subParameters} order={order} setOrder={setOrder} level0Key={level0Key} level1key={level1key} />
           
            </div>
          }
          
        }
      }
      useEffect(()=>{
        setShowHiddenBtn(false);
        setShowClicked(false);
      },[data]);

  return (
    <div>
        {copyData?.map((item)=>{
            if(showHiddenBtn==false && item.validate.required==undefined){
                setShowHiddenBtn(true);
            }
          return handleData(item)
        })}
        {showHiddenBtn && <div className='switch-component'>
        <span>Show advanced fields</span>
        <div className={`switch ${showClicked?"clicked":""}`} onClick={()=>setShowClicked(!showClicked)}>
            <div className="switch-btn"></div>
        </div>

    </div>}
    </div>
  )
}

export default GroupSection