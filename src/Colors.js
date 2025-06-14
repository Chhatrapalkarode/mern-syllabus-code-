import { useState } from "react";

export default function Colors(){
    const color="blue";
    const[bg,setBg]=useState(color);
    const[name,setNmae]=useState("click me")
    const handlecolor=()=>{
        setBg("red");
        setNmae("name changed")
        
    }
    const handledouble=()=>{
        setBg("green");
        setNmae("again change")
    }
    return(
        <div style={{backgroundColor:bg}}>
            <center>
            <button onClick={handlecolor} onDoubleClick={handledouble}  >{name}</button>
            </center>
        </div>
    )

}

