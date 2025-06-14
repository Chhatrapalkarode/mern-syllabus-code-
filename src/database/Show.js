import axios from "axios";
import React,{useEffect, useState} from "react";

const Show=()=>
{
    const[blist,setBlist]=useState([]);

// useEffect(() => {
    axios.get("http://localhost:9669/book/show")
        .then((res) => {
            setBlist(res.data);
        })
        .catch((err) => {
            alert(err);
        });
// }, []);

return(
    <div>
        <center>
            <h4>Show BookDetalis</h4>
            <table>
                <tr>
                    <th>Book Id</th>
                    <th>Book Name</th>
                    <th>Book Price</th>
                </tr>
               {blist.map((item)=>(
            <tr>
               <td>{item.BId}</td>
               <td>{item.BName}</td>
               <td>{item.BPrice}</td>
            </tr>
        ))}
            </table>
        </center>
    </div>
);
};
export default Show;
