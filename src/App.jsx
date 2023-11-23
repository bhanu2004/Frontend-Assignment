import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import GroupSection from './component/GroupSection';

function App() {
  const [order, setOrder] = useState({}); 
  const [data, setData] = useState();
  const [jsonData, setJsonData] = useState();
  
  // useEffect(()=>{
  //   console.log(order);
  // },[order])
 
  const handleConvert = ()=>{
    try{
      let currD = JSON.parse(jsonData);
    setOrder({});
    setData(currD);
    }
    catch(err){
      alert("Invalid JSON !!")
    }
    
  }

  const handleSubmit = ()=>{
     let path = [];
    removeExtra(data,path);
    console.log(JSON.stringify(order));
    alert('check console to see submitted data');
  }

  const removeExtra = (data,path)=>{
    for( let x of data){
      if(x.uiType=='Group'){
        path.push(x.jsonKey);
        removeExtra(x.subParameters,path);
        path.pop();
      }
      if(x.uiType=='Ignore'){
        const value = x.conditions[0].value;
        const currValue = accessDeepProp(order,x.conditions[0].jsonKey);
        if(value!=currValue){
          path.push(x.jsonKey);
          removeData(path);
          path.pop();
        }
        
      }
    }
  }
  function accessDeepProp(obj, path) {
    const properties = path.split(".");
    for (let i = 0; i < properties.length; i++) {
      if (!obj) return null;
      obj = obj[properties[i]];
    }
    return obj;
  }
  const removeData = (path)=>{
    if(path.length==1){
      const temp = Array.from(path);
      setOrder((prevData)=>{
        const copy = {...prevData};
        delete copy[temp[0]];
        return copy;
      })
    }
    else if(path.length==2){
      const temp = Array.from(path);
      setOrder((prevData)=>{
        const copy = {...prevData};
        delete copy[temp[0]][temp[1]];
        return copy;
      })
    }
  }


  return (
    <div className="container">
      <div className="left-panel">
        <textarea placeholder='Enter JSON data...' name="" id="" cols="30" rows="10" value={jsonData} onChange={(e)=>{setJsonData(e.target.value)}}></textarea>
        <button className='convert' onClick={()=>handleConvert()}>Create</button>
      </div>
      <div className="right-panel">
        <div className='right-form-container'>
        <GroupSection data={data} order={order} setOrder={setOrder}/>
        </div>
        
        <div className='button-container'>
        <button className='convert' onClick={()=>{setData([]);setJsonData({});}}>Cancel</button>
        <button className='convert' onClick={()=>handleSubmit()}>submit</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
