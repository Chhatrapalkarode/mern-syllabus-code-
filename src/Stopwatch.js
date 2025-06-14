 import react, { useRef, useState } from "react";
 function Stopwatch(){
     const [time,setTime]=useState(0);
      let timeref=useRef(null);
     function start() {
    
        timeref.current = setInterval(() => {
        
          setTime(time => time + 1);  // Use prevTime to correctly update the state
        }, 1000);
       }
    
  
     function stop(){
        clearInterval((timeref.current));
        timeref.current=null;
       

     }
     function reset(){
        stop(); //  First stop the timer if it's running
         setTime(0);
     }
     return(
         <div>
             <h1> Stopwatch   {time}   second </h1>
             <button onClick={start}>start</button>
             <button onClick={stop}>stop</button>
             <button onClick={reset}> reset</button>
         </div>
     )

 }export default Stopwatch


