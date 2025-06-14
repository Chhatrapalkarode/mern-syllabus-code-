import react,{useState} from "react";
import ReactDom from "react-dom/client";
import Propsecond from "./Propsecond";
function Propfirst(){
    const[rno1,setRollno]=useState();
    const[name1,setName]=useState();
    const[marks1,setMarks]=useState();
    const[dept1,setDept]=useState();
    const handleRollnoText=(evt)=>{
        setRollno(evt.target.value);
    };
    const handleNameText=(evt)=>{
        setName(evt.target.value);
    };
    const handleMarksText=(evt)=>{
        setMarks(evt.target.value);
    };
    const handleDeptText=(evt)=>{
        setDept(evt.target.value);
    };
    const handlebutton=()=>{
        const root=ReactDom.createRoot(document.getElementById("root"));
        var obj={
            rno:rno1,
            name:name1,
            marks:marks1,
            dept:dept1
        }
        
        root.render(<Propsecond data={obj}/>);
    }
    return(
        <div>
            <center>
                <table>
                    <tr>
                        <td> roll no</td>
                        <td> <input type="number" onChange={handleRollnoText}/></td>
                    </tr>

                    <tr>
                        <td> name</td>
                        <td> <input type="text" onChange={handleNameText}/></td>
                    </tr>

                    <tr>
                        <td> marks</td>
                        <td> <input type="number" onChange={handleMarksText}/></td>
                    </tr>

                    <tr>
                        <td> department </td>
                        <td> <input type="text" onChange={handleDeptText}/></td>
                    </tr>

                    <tr>
                        <td> button</td>
                        <td> <button type="submit" onClick={handlebutton}> click here </button></td>
                    </tr>
                </table>
            </center>
        </div>
    );
} export default Propfirst;