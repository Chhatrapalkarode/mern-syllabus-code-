import React, { useEffect, useState } from "react";
import axios from "axios";
function Save(){
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
   
   
    const handleButtonsave=()=>{
        axios.post("http://localhost:6777/saveemp/"+ecode+"/"+ename+"/"+esal+"/"+dept)
        .then((res)=>{
            alert(res.data);
        })
        .catch((err)=>{
            alert(err);
        })
    }
    return(
        <div>
            
            <h2> save employ datail</h2>
           
            <table border={2}>
                <tr>
                    <td> employ code</td>
                    <td> <input type="text" onChange={handleEcode}/></td>
                </tr>
                <tr>
                    <td> employ name</td>
                    <td> <input type="text" onChange={handleEName}/></td>
                </tr>
                <tr>
                    <td> employ salary</td>
                    <td> <input type="Number" onChange={handleEsal}/></td>
                </tr>
                <tr>
                    <td> employ dept</td>
                    <td>
                   <select onClick={handleDept}>
                    <option value={"hr"}> hr</option>
                    <option value={"teacher"}> teacher</option>
                    <option value={"sales"}> sales</option>
                    <option value={"developer"}> developer</option>
                   </select>
                   </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button onClick={handleButtonsave}> save</button>
                        
                    </td>
                </tr>
            </table>
            </div>
    )
}export default Save