import axios from "axios";
// import React from "react";
import React,{ useState } from "react";

const Save = () =>{
    const[BId, setBId] = useState();
    const[BName,setBName] =useState();
    const[BPrice,setBPrice]=useState();

    const handleBIdText = (evt) =>{
        setBId(evt.target.value);
    };
    const handleBNameText = (evt) =>{
        setBName(evt.target.value);
    };
    const handleBPriceText = (evt) =>{
        setBPrice(evt.target.value);
    };

    const handleSaveButton =()=>{
        var obj = {
            BId: BId,
            BName: BName,
            BPrice: BPrice,
        };
        axios.post("http://localhost:9669/book/save",obj).then((res)=>{
            alert("Data saved successfully");
        }).catch((err)=>{
            alert(err);
        });
      
    };
    return(
        <div>
            <center>
                <h4 style={{backgroundColor: "green"}}>Save Book Details</h4>
                <table border={1}>
                    <tr>
                        <td>Book ID</td>
                        <td>
                            <input type="number" onChange={handleBIdText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Book Name</td>
                        <td>
                            <input type="text" onChange={handleBNameText}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Book Price</td>
                        <td>
                            <input type="number" onChange={handleBPriceText}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit" onClick={handleSaveButton}>Save</button>
                        </td>
                    </tr>
                     </table>
            </center>
        </div>
    )
}
export default Save;
