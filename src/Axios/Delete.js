import React, { useState } from "react";
import axios from "axios";
function Delete(){
    const[ecode,setEcode]=useState();
    const handleEcode=(evt)=>{
        setEcode(evt.target.value);

    }
const handleButton=()=>{
    axios.delete("http://localhost:6777/deleteemp/"+ecode)
    .then((res)=>{
        alert("work")
        alert(res.data)
    })
    .catch((err)=>{
        alert(err)
        alert("not  work ")
    })
}
return(
    <div>
        <center>
        <h2> delete data by  employ ecode </h2>
            <table border={2}>
               
                <tr>
                    <td> employ code </td>
                    <td> <input type="text" onChange={handleEcode}/></td>
                </tr>
                <tr>
                    <td></td>
                    <td> <button onClick={handleButton}> delete button </button></td>
                </tr>
            </table>
        </center>
    </div>
)
}export default Delete