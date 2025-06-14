
import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./Card";
export default function Ifelse2(){
     const button=()=>{
     var d=5;
      var a=14;
      var b=10;

     if(d==5){
          
       const root=ReactDOM.createRoot(document.getElementById("root"));    
       root.render( <Card/>)
        
       
     }
     else{
         
         alert("else ")
     }

     }
    return(
     <div>
         <h2> if else condtion check </h2>
         <button onClick={button}>click</button>
     </div>
    )
    
  }