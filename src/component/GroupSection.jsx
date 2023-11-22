import React, { useState } from 'react'
import InputComponent from './InputComponent';
import RadioComponent from './RadioComponent';
import SelectComponent from './SelectComponent';
import SwitchComponent from './SwitchComponent';

 function GroupSection({data,level0Key,order, setOrder, level1key}) {
    // console.log("d",data);
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
        // console.log("item",item);
        // item = data
        // const [hidden, setHidden] = useState(true);
        // console.log("l0",level0Key);
        const grName = "abc";
        const name = `${grName!=null?grName:""}.${item.jsonKey}`;
        if(item.uiType=='Input'){
          if(item.level==0){
            return <div>
              <InputComponent 
              setOrder={setOrder} 
              data={item}
              display={showClicked}/>
              </div>
          }
          else{
            return <InputComponent level0={level0Key}
            setOrder={setOrder}
            data={item}
            display={showClicked}/>
          }
          
        }
        else if(item.uiType=='Radio'){
          if(item.level==0){
            return <div className='section-container'>
              <RadioComponent 
              setOrder={setOrder} 
              data={item}
              display={showClicked}/>
              </div>
          }
          else{
            return <RadioComponent level0={level0Key}
            setOrder={setOrder}
            data={item}
            display={showClicked}/>
          }
          // return <RadioComponent name={name} setOrder={setOrder} level0={level0Key} level1={level1key} data={item}/>
        }
        else if(item.uiType=='Select'){
          if(item.level==0){
            return <div>
              <SelectComponent 
              setOrder={setOrder} 
              data={item}
              display={showClicked}/>
              </div>
          }
          else{
            return <SelectComponent level0={level0Key}
            level1={level1key}
            setOrder={setOrder}
            data={item}
            display={showClicked}/>
          }
          //return <SelectComponent name={name} setOrder={setOrder} level0={level0Key} level1={level1key} data={item}/>
        }
        else if(item.uiType=="Switch"){
          if(item.level==0){
            return <div>
              <SwitchComponent 
              setOrder={setOrder} 
              data={item}
              display={showClicked}/>
              </div>
          }
          else{
            return <SwitchComponent level0={level0Key}
            level1={level1key}
            setOrder={setOrder}
            data={item}
            display={showClicked}/>
          }
          return <SwitchComponent name={name} setOrder={setOrder} level0={level0Key} level1={level1key} data={item} />
        }
        else if(item.uiType=='Group'){
        //   console.log("itemd",item.subParameters)
          return <div className={`${item.level==0?'section-container':""}`}>
            { item.level==0 && <p className='group-head'>{item.label} {item.reqired && <span className='redStar'>*</span>}</p>}
            <GroupSection data = {item.subParameters} order={order} setOrder={setOrder} level0Key={item.jsonKey}/>
            {/* {item.subParameters.map((subItem)=>{
              return handleData(subItem,item.jsonKey)
            })} */}
            
          </div>
        }
        else{
          const jsonKey = item.conditions[0].jsonKey;
          if(level0Key==null) level0Key=item.jsonKey;
          else level1key=item.jsonKey;
          const propValue = accessDeepProp(order,jsonKey);
          if(propValue == item.conditions[0].value){
            
            const grName = item.jsonKey;
            return <div className={`${item.level==0?'section-container':""}`}>
              {item.level==0 && <p className='group-head'>{item.label} {item.reqired && <span className='redStar'>*</span>}</p>}
              <GroupSection data={item.subParameters} order={order} setOrder={setOrder} level0Key={level0Key} level1key={level1key} />
              {/* {item.subParameters.map((subItem)=>{
                return  
              })} */}
            </div>
          }
          else{
            const delProp = item.conditions[0].value;
            
            if(level0Key && !level1key){
                if(order[level0Key]!=undefined && order[level0Key][level1key]!=undefined){
                    setOrder((prevData)=>{
                        const copy = {...prevData};
                        delete copy[level0Key];
                        return copy;
                      })
                      console.log("2 called");
                }
              
            }
            else if(level0Key && level1key){  
              if(order[level0Key]!=undefined && order[level0Key][level1key]!=undefined ){
                if(order[level0Key]!=undefined)console.log("leev0",order[level0Key]);
                if(order[level0Key]!=undefined && order[level0Key][level1key]!=undefined)console.log("leev1",order[level0Key][level1key]);
                 setOrder((prevData)=>{
                    console.log("prev",prevData);
                  const copy = {...prevData};
                  delete copy[level0Key][level1key];
                  return copy;
                })
                console.log("2 called", level0Key," ",level1key);
              
              }
              
            }
            console.log("abd",order)
          }
        }
      }

  return (
    <div>
        {data?.map((item)=>{
            // console.log("itemd",item);
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