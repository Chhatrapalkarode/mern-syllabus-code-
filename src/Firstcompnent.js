
import react,{useState} from "react";
import ReactDom from  "react-dom/client";
import Secondcomponent from "./Secondcomponent";
function Firstcomponent(){
    const[sname,setSname]=useState();
    const handleSnameText=(evt)=>{
        setSname(evt.target.value);
    }
const handlesubmitButton=()=>{
    const root=ReactDom.createRoot(document.getElementById('root'));
    root.render(<Secondcomponent name5 ={sname}/>);
}
return (
    <div> <center><h4> 
        this is first page </h4>
        <table>
            <tr>
                <td>
                    enter the name 
                </td>
                <td>
                    <input type="text" onChange={handleSnameText}/>

                </td>
            </tr>
            <tr>
                <td>
                    <button onClick={handlesubmitButton}>submit</button>
                </td>
            </tr>
        </table>
        
        </center>
        
        </div>
);
}export default Firstcomponent;