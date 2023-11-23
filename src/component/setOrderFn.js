
const setOrderFn = (level0,level1,setOrder,data,value)=>{
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
export default setOrderFn;