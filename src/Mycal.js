import React,{useState} from "react";
function Mycal(){
    //declare variable or state
    const [num1,setsum1]=useState();
    const [num2,setsum2]=useState();
    const [res,setRes]=useState();
    //num1 is the variable name and setNum1 is a methode name 
    // efine event 
    const handlesum1Text=(evt)=>{
        setsum1(parseInt(evt.target.value));
    }
    const handlesum2Text=(evt)=>
       {
         setsum2(parseInt(evt.target.value));

       }
    const handleSumButton=()=>{
        setRes(num1+num2);
    }
    const handleClearButton=()=>{
        setsum1("");
        setsum2("");
        setRes("");
    }
    return (
        <div>
            <center>
                <h4> function Component</h4>
                <table border={2}>
                    <tr>
                        <td> enter the first name </td>
                        <td> <input type="number" onChange={handlesum1Text} value={num1}/>
                        </td>
                    </tr>
                    <tr>
                        <td> enter the second no </td>
                        <td>
                            <input type="number" onChange={handlesum2Text} value={num2}/>
                        </td>
                    </tr>
                    <tr>
                        <td> rssult</td>
                        <td>
                            <input type="text"  value={res}/>
                        </td>
                    </tr>
                    <tr>
                        <td> button </td>
                        <td>
                            <button type="submit" onClick={handleSumButton}> sum botton</button>
                        </td>
                        <td>
                            <button type="submit" onClick={handleClearButton}> clear botton</button>
                        </td>
                    </tr>
                </table>
            </center>
        </div>
    );
    
}export default Mycal;