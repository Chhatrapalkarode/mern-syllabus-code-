import React, { useEffect, useState } from "react";
import axios from "axios";
function Show(){
    const[slist,setSlist]=useState([]);
   
    useEffect(()=>{
        axios.get("http://localhost:6777/showemp").then((res)=>{
            setSlist(res.data);
            // alert(res.data)
        }).catch((err)=>{
            alert(err);
            alert("network issue")
        })
    })
   
    return(
        <div>
            <center>
                <h4>employ list</h4>
                <table>
                    <tr>
                        <th> employ code </th>
                        <th>employ nmae</th>
                        <th> employ salary</th>
                        <th> employ dept</th>
                       
                    </tr>
                 {slist.map((item)=>(
                        <tr>
                            <td>{item.ecode}</td>
                            <td>{item.ename}</td>
                            <td> {item.esal}</td>
                            <td> {item.dept}</td>
                        </tr>
                        
                      ))}
                 
                </table>
            </center>
        </div>
    )
}export default Show