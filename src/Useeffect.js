import React, { useEffect, useState } from "react";
function Useeffect(){
    const[num,setNum]=useState(1);
    const handleNumtext=(evt)=>{
        setNum(evt.target.value);
    }
   const handlebuttuon=()=>{
    setNum(num +1)
   }
    useEffect(()=>{

   
        alert("baad me ")

       },[])
   
    return(
        <div>
            <p> value num  <input type=" number" onChange={handleNumtext} value={num}/></p>
            {/* <button onClick={handlebuttuon}>ok </button> */}
            <button onClick={handlebuttuon}>kaha</button>
        </div>
    )
}export default Useeffect




