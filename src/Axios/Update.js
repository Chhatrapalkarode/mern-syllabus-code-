import React,{useState} from "react"
import axios from "axios"
function Update(){
   const[ecode,setEcode]=useState();
       const[ename,setEname]=useState();
       const[esal,setEsal]=useState();
       const[dept,setDept]=useState();
       
       const handleEcode=(evt)=>{
           setEcode(evt.target.value)
       }
       const handleEName=(evt)=>{
           setEname(evt.target.value)
       }
       const handleEsal=(evt)=>{
           setEsal(evt.target.value)
       }
       const handleDept=(evt)=>{
           setDept(evt.target.value)
       }
       const handleSearchButton=()=>{
        axios.get("http://localhost:6767/searchemp/"+ecode).then((res)=>{
            if(res.data.ecode!=undefined){
                setEcode(res.data.ecode);
                setEname(res.data.ename);
                setEsal(res.data.esal);
                setDept(res.data.dept);
            }
            else{
                alert("data is not saved ")
            }
        }).catch((err)=>{
            alert(err)
        })
       }

      const handleUpdateButton=()=>{
        var obj={
            ecode:ecode,
            ename:ename,
            esal:esal,
            dept:dept
        }
        axios.put("http://localhost:6777/updateemp",obj).then((res)=>{
            alert(res.data);
        }).catch((err)=>{
            alert(err);
        })
      }
      return(
        <div>
            <center>
                <h2> update data </h2>
                <table>
                    <tr>
                        <td>
                            employ code 
                        </td>
                        <td> <input type="text" onChange={handleEcode}/></td>
                        <td> <button type="submit" onClick={handleSearchButton}> search button </button></td>
                    </tr>
                    <tr>
                    <td> employ name</td>
                    <td> <input type="text" onChange={handleEName}/></td>
                    </tr>
                    <tr>
                    <td> employ salary</td>
                    <td> <input type="text" onChange={handleEsal}/></td>
                    </tr>
                    <tr>
                    <td> employ department </td>
                    <td> <select onClick={handleDept}>
                    <option value="hr">HR</option>
                     <option value="it">IT</option>
                     <option value="iit">IIT</option>
                     <option value="teacher">Teacher</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td> <button onClick={handleUpdateButton}>update button</button></td>
                    </tr>
                </table>
            </center>
        </div>
      )
      
}export default Update;