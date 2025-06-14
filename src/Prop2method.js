import { useRef } from "react"


export const Prop2method=()=>{
    const names=useRef();
    const handleButton=()=>{
        alert(`welcome  ${names.current.value}`)
    }
    return(
        <div>
            <button onClick={handleButton}>click</button>
        </div>
    )

 }
function check(props){
    return(
        <div>
            <p> hello and :{props.name}</p>
           
        </div>
    )
}
// }



