import React, { useState } from "react";
import Homer from "./Homer";
import Home from "./home";
import ReactDOM from "react-dom/client"
export default function Ifelse4 (){
    const[num,setNum1]=useState();
    const numbutton=(evt)=>{
        setNum1(evt.target.value);

    }
    function hello(){
    if(num=="homer"){
       
         const root=ReactDOM.createRoot(document.getElementById("root"));    
               root.render( <Homer/>)
    }
    else if(num=="home"){
         const root=ReactDOM.createRoot(document.getElementById("root"));    
               root.render( <Home/>)
    }
    else{
        alert("wrong enter value")
    }
}
    return(
        <div>
            <h2> check condition </h2>
            <p>value:<input type="text" onChange={numbutton} /></p>
            <button onClick={hello}>check</button>
        </div>
    )
}