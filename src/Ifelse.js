import React, { useState } from "react";
export default function Ifelse(){
  const [num1,setNum1]=useState("change");
  const[city,setCity]=useState(["bhopal","nagpur","cwaa","indore"])
  const handleButton=()=>{
    var g=[12,235,3,412,5];
    var p=[];
    var o=[];
    // var res;
   
    g.map((item)=>{
     
   
    if(item%2==0){
      
      p.push(item)
    
    //  setNum1("yes this is work "+p)
    }
    else{
      o.push(item)
      // setNum1("odd"+o)
     
    }
  //  also do this 
   setNum1(`even ${p.join(",")} and  odd =${o.join("/")}`)
    // setNum1(res)
  })
  }
  return(
    <div>
      <p> hello</p>
      <p> value:=<input type="text" value={num1}/></p>
      <button onClick={handleButton}> ok</button>

    <h2> city </h2>
     <p> {city.map((item)=>(
      <p> {item}</p>
     ))}</p>
     </div>
  )
}