import react,{useState} from "react";
import Usinguseref from "./Usinguseref";
import ReactDom from "react-dom/client";
import { useRef } from "react";
function Usinguserefs(){
    const name1=useRef();
    const code1=useRef();
    // const add=useRef();
    // const handleadd=()=>{
    //     add.current.value=name1.current.value+code1.current.value
    // }
    const handlesubmitButton=()=>{
        const root=ReactDom.createRoot(document.getElementById("root"));
        root.render(<Usinguseref name={name1.current.value} code ={code1.current.value}/>)
    };
    return(
        <div style={{backgroundColor:"gray"}} >
            <center>          
            <h2> using useref </h2>
            <table>
                <tr>
                    <td style={{color:"red"}}> enter the city name </td>
                    <td> <input type="text" ref={name1}/></td>
                </tr>
                <tr>
                    <td  style={{color:"blue"}}> enter the city code </td>
                    <td > <input type=" text " ref={code1}/></td>
                </tr>
                <tr>
                   <td>
                   <button onClick={handlesubmitButton}> click here </button>
                   </td>
                </tr>
                {/* <tr>
                    <td> result
                    </td>
                    <td> <input type=" text" ref={add}/></td>
                </tr>
                 <tr>
                   <td>
                   <button onClick={handleadd}> click here to add  </button>
                   </td>
                </tr> */}
            </table>
            </center>  
            </div>
    );
}export default Usinguserefs;