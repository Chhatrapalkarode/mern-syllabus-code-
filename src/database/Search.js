import React,{useState} from "react";
import axios from "axios";

function Search()
{
    const[BId,setBId]=useState();
    const[BName,setBName]=useState();
    const[BPrice,setBPrice]=useState();

    const handleBIdText=(evt)=>{
        setBId(evt.target.value);
    }
    const handleSearchButton=()=>{
        axios.get("http://localhost:9669/book/search/"+BId).then((res)=>{
           
            setBId(res.data.BId);
            setBName(res.data.BName);
            setBPrice(res.data.BPrice);
          
        }).catch((err)=>{
            alert(err);
        });
    }
    return(
        <div>
            <center>
                <h4 style={{backgroundColor:"green",color:"white"}}>Search Book Details By Id</h4>
                <table>
                    <tr>
                        <td>Enter Book Id</td>
                        <td>
                            <input type="number" onChange={handleBIdText} value={BId}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Book Name</td>
                        <td>
                            <input type="text" value={BName}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Book Price</td>
                        <td>
                            <input type="number" value={BPrice}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit" onClick={handleSearchButton}>Search</button>
                        </td>
                    </tr>

                </table>
            </center>
        </div>
    );
}export default Search;
