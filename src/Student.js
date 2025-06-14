
import react,{useState} from "react";
function Student(){
    const [rno,setSrno]=useState();
    const [sname,setSname]=useState();
    const[smark,setSmark]=useState();
    const[slist,setSlist]=useState([]);
    
    const handleSrnoText=(evt)=>{
        setSrno(evt.target.value);
    }
    const handleSnameText=(evt)=>{
        setSname(evt.target.value);
    }
    const handleSmarkText=(evt)=>{
        setSmark(evt.target.value);
    }
    const handlesumbit=()=>{
        var obj={
            RollNo:rno,
            Studentname:sname,
            Studentmark:smark
        };
       slist.push(obj);
        // setSlist([...slist, obj]);
    }
    
        const handleStudentb=()=>{
            setSrno("");
            
        }
        const handleresule=()=>{
            setSlist([]);
        }
    
    return(
        <div >
            <center>
                <div> roll no </div>
                <div> <input type=" number" onChange={handleSrnoText} value={rno}/></div><br></br>
                <div> student name </div>
                <div> <input type=" text " onChange={handleSnameText} value={sname}/></div><br></br>
                <div> student marks </div>
                <div> <input type="number" onChange={ handleSmarkText} value={smark}/></div>
                <br></br>
               
                <div> button result  </div>
                <div> <button onClick={handlesumbit}> click here </button></div><br>
                </br>
                <div> student clear button </div>
               <div> <button onClick={handleStudentb}>student button </button></div>
               <div> result  clear button </div>
               <div> <button onClick={handleresule}>result button </button></div>
               <div> <h4> student list </h4></div>
               <table>
                <tr>
                    <th> RollNo</th>
                    <th> sname</th>
                    <th> mark</th>

                </tr>
                {
                    slist.map((item)=>(
                        <tr>
                            <td>
                                {item.RollNo}
                            </td>
                            <td> {item.Studentname}</td>
                            <td> { item.Studentmark}</td>
                        </tr>
                    ))
                }
               </table>

            </center>
        </div>
    );
}export default Student;