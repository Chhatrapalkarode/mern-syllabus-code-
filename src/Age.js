

import React, { useRef } from "react"; //1
//  one also be use 1 and 2 
// import react,{useRef, useState} from "react";  // 2

function Age(){
const age=useRef();
 const handlckeck=()=>{
    alert(age.current.value > 18 ? "ok" : "NO"); //ternary operator (condition ? trueCase : falseCase)

   

    
   
 }
 return(
    <div>
        <p> Enter the age </p>
        <p> <input type="text" ref={age}/></p>
        <p> <button onClick={handlckeck}>click button</button></p>
    </div>
 );
}export default Age;

/**
  if(age.current.value>18){
        alert("you are watch ")
    }
    else{
        alert("not watch ")
    }
 */

