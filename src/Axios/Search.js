import React, { useState } from "react";
// import axios from "axios";
import axios from "axios";
function Search(){
    const [ecode,setEcode]=useState();
    const [ename,setEName]=useState();
    const [esal,setESal]=useState();
    const [dept,setDept]=useState();
    const [dept1,setDept1]=useState();
    const handleEcodetext=(evt)=>{
        setEcode(evt.target.value);
    }
   
    const handleSearchButton=()=>{
    
        axios.get("http://localhost:6777/searchemp/" + ecode)
        .then((res)=>{ 

            if(res.data.ecode!==undefined){
                setEcode(res.data.ecode);
                setEName(res.data.ename);
                setESal(res.data.esal);
                setDept(res.data.dept);
               
            }
            else{
                alert("data is not find ")
            }

        }).catch((err)=>{
            alert("Network inside : " + err.message);
            // alert(err)
           
        })



    }
    return(
        <div>
            <center>
                <h2> serach data bu employ ecode </h2>
                <table>
                    <tr>
                        <td> employ code </td>
                        <td> <input type="text" onChange={handleEcodetext}/></td>
                    
                    </tr>
                    <tr>
                            <td> name</td>
                        <td> 
                        {ename }
                        </td>
                    </tr>
                  
                        <tr>
                            <td> salary</td>
                        <td> {esal }</td>
                    </tr>
                    <tr>
                        <td> employ dept </td>
                       <td> {dept}</td>
                    
                    </tr>
                    <tr>
                        <td></td>
                        <td><button onClick={handleSearchButton}>search</button></td>
                    </tr>
                </table>
            </center>
        </div>
    )
}export default Search;