import React, { useState } from "react";
import axios from "axios";
function Test(){
    const [ecode,setEcode]=useState()
    const [ename,setEname]=useState();
    const [esal,setEsal]=useState();
    const [dept,setDept]=useState();
    const handleecode=(evt)=>{
        setEcode(evt.target.value)
    }
    const handleename=(evt)=>{
        setEname(evt.target.value)
    }
    const handlesal=(evt)=>{
        setEsal(evt.target.value)
    }
    const handledept=(evt)=>{
        setDept(evt.target.value)
    }
    
    const [slist,setSList]=useState()
    // const handleButtonshow=()=>{
        axios.get("http://localhost:6777/showemp").then((res)=>{
            setSList(res.data)
        }).catch((err)=>{
            alert(err)
        })
        const handleSave=()=>{
            // var obj={
            //     ecode:ecode,
            //     ename:ename,
            //     esal:esal,
            //     dept:dept
            // }
            axios.post("http://localhost:6777/saveemp/"+ecode+"/"+ ename+"/"+ esal+"/"+ dept).then((res)=>{
                alert(res.data)
            }).catch((err)=>{
                alert(err)
            })
        }
        // const handleSave=()=>{
        //     axios.post("http://localhost:6777/saveemp/"+ecode+"/"+ename+"/"+esal+"/"+dept)
        //     .then((res)=>{
        //         alert(res.data);
        //     })
        //     .catch((err)=>{
        //         alert(err);
        //     })
        // }
    
    return(
        <div>
            <center>
                <div> save data </div>
                <table>
                    <tr>
                    <td>ecode</td>
                    <td><input type="text" onChange={handleecode} value={ecode}/></td>

                    </tr>
                    <tr>
                        <td>ename</td>
                        <td><input type="text" onChange={handleename} value={ename}/></td>
                        </tr>
                        <tr>
                        <td>ename</td>
                        <td><input type="text" onChange={handlesal} value={esal}/></td>
                        </tr>
                        <tr>
                        <td>ename</td>
                        <td><input type="text" onChange={handledept} value={dept}/></td>
                    </tr>
                    <tr>
                        <td>button </td>
                        <td><button type="submit" onClick={handleSave}>save button</button></td>
                    </tr>
                </table>
               
               
                 <h2> show data </h2>
                <table>
                <tr>
                    <th>ecode</th>
                    <th> ename</th>
                    <th>essal</th>
                    <th>dept</th>
                    
                </tr>
                
                {
                    slist.map((item)=>(
                        <tr>
                        <td>{item.ecode}</td>
                        <td>{item.ename}</td>
                        <td>{item.esal}</td>
                        <td>{item.dept}</td>
                      </tr>

                        
                    ))
                }
                
                </table>
            </center>
        </div>
    )
}export default Test