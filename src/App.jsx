import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import formData from './data';
import InputComponent from './component/InputComponent';
import RadioComponent from './component/RadioComponent';
import SelectComponent from './component/SelectComponent';
import SwitchComponent from './component/SwitchComponent';
import GroupSection from './component/GroupSection';

function App() {
  const [order, setOrder] = useState({}); 
  const [data, setData] = useState(formData);
// useEffect(()=>{
//   console.log("adb",order);
// },[order]);



  // const handleData = (item,level0Key, level1key)=>{
  //   // const [hidden, setHidden] = useState(true);
  //   console.log("l0",level0Key);
  //   const grName = "abc";
  //   const name = `${grName!=null?grName:""}.${item.jsonKey}`;
  //   if(item.uiType=='Input'){
  //     if(item.level==0){
  //       return <div className='section-container'>
  //         <InputComponent 
  //         setOrder={setOrder} 
  //         data={item}/>
  //         </div>
  //     }
  //     else{
  //       return <InputComponent level0={level0Key}
  //       setOrder={setOrder}
  //       data={item}/>
  //     }
      
  //   }
  //   else if(item.uiType=='Radio'){
  //     if(item.level==0){
  //       return <div className='section-container'>
  //         <RadioComponent 
  //         setOrder={setOrder} 
  //         data={item}/>
  //         </div>
  //     }
  //     else{
  //       return <RadioComponent level0={level0Key}
  //       setOrder={setOrder}
  //       data={item}/>
  //     }
  //     // return <RadioComponent name={name} setOrder={setOrder} level0={level0Key} level1={level1key} data={item}/>
  //   }
  //   else if(item.uiType=='Select'){
  //     if(item.level==0){
  //       return <div className='section-container'>
  //         <SelectComponent 
  //         setOrder={setOrder} 
  //         data={item}/>
  //         </div>
  //     }
  //     else{
  //       return <SelectComponent level0={level0Key}
  //       setOrder={setOrder}
  //       data={item}/>
  //     }
  //     //return <SelectComponent name={name} setOrder={setOrder} level0={level0Key} level1={level1key} data={item}/>
  //   }
  //   else if(item.uiType=="Switch"){
  //     if(item.level==0){
  //       return <div className='section-container'>
  //         <SwitchComponent 
  //         setOrder={setOrder} 
  //         data={item}/>
  //         </div>
  //     }
  //     else{
  //       return <SwitchComponent level0={level0Key}
  //       setOrder={setOrder}
  //       data={item}/>
  //     }
  //     return <SwitchComponent name={name} setOrder={setOrder} level0={level0Key} level1={level1key} data={item} />
  //   }
  //   else if(item.uiType=='Group'){
      
  //     return <div className={`${item.level==0?'section-container':""}`}>
  //       { item.level==0 && <p className='group-head'>{item.label} {item.reqired && <span className='redStar'>*</span>}</p>}
  //       {item.subParameters.map((subItem)=>{
  //         return handleData(subItem,item.jsonKey)
  //       })}
  //       <div>button</div>
  //     </div>
  //   }
  //   else{
  //     const jsonKey = item.conditions[0].jsonKey;
  //     if(level0Key==null) level0Key=item.jsonKey;
  //     else level1key=item.jsonKey;

  //     const propValue = accessDeepProp(order,jsonKey);
  //     if(propValue == item.conditions[0].value){
        
  //       const grName = item.jsonKey;
  //       return <div className={`${item.level==0?'section-container':""}`}>
  //         {item.level==0 && <p className='group-head'>{item.label} {item.reqired && <span className='redStar'>*</span>}</p>}
  //         {item.subParameters.map((subItem)=>{
  //           return handleData(subItem,level0Key,level1key);
  //         })}
  //       </div>
  //     }
  //     else{
  //       const delProp = item.conditions[0].value;
  //       if(!level0Key && order[delProp]){
  //           setOrder((prevData)=>{
  //           const copy = {...prevData};
  //           delete copy[delProp];
  //           return copy;
  //         })
  //       }
  //       else if(level0Key && !level1key){
  //         setOrder((prevData)=>{
  //           const copy = {...prevData};
  //           delete copy[level0Key];
  //           return copy;
  //         })
  //       }
  //       else if(level0Key && level1key){  
  //         if(order[level0Key]!=undefined && order[level0Key][level1key]!=undefined ){
  //           setOrder((prevData)=>{
  //             const copy = {...prevData};
  //             delete copy[level0Key][level1key];
  //             return copy;
  //           })
          
  //         }
          
  //       }
  //       console.log("abd",order)
  //     }
  //   }
  // }
  return (
    <div className="container">
      <div className="left-panel">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <div className="right-panel">
        <GroupSection data={data} order={order} setOrder={setOrder}/>
        {/* {data?.map((item)=>{
          return handleData(item)
        })} */}
      </div>
    </div>
  );
}

export default App;
