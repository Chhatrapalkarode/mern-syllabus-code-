import { useState } from "react";

export default function Ifelse5(){
    const [num,setNum]=useState()
    const test=(evt)=>{
        setNum (parseInt(evt.target.value))

    }
    const button=()=>{
      setNum ( num>=18 && "yes can be vote")
    }
    return(
        <div>
            <p><input type="text" onChange={test} value={num}/></p>
            {/* <button onClick={button}>lo</button> */}   
           <p>check:{num>=18 && ("yes can be vote")}</p>
        </div>
    )
}

// chek onclick

// import { useState } from "react";
// export default function Ifelse5(){
//         const [num,setNum]=useState(1)
       
//         return(
//             <div>
//                 <p> count is={num}</p>
//                 <button onClick={()=>{setNum(num*5)}}>check</button>
//             </div>
//         )
//     }