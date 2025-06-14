// useref example :- use the  useref  they are reduce the code and they use hook property  and they are  the data data by refrence 

 import react,{useRef, useState} from "react";
 function Userefexample(){
    const ecode=useRef();
    const ename=useRef();
    const esal=useRef();
    const sum=useRef();
    
    const handlesubmitButton=()=>{
        // document.write("employ code="+ecode.current.value+"name="+ename.current.value+"salary="+esal.current.value); //option 
       alert("employ code="+ecode.current.value+"name="+ename.current.value+"salary="+esal.current.value); //option 
    }
    const handleclearbutton=()=>{
        ecode.current.value=("");
        ename.current.value=("");
        esal.current.value=("");
    }
    const handlesum=()=>{
        sum.current.value= parseInt(ecode.current.value)+parseInt(esal.current.value);
    }
    return(
        <div>
            <center>
                <h2> using the useref methode </h2>
                <br></br>
                <br></br>
                <table>
                    <tr>
                        <td> code </td>
                        <td> <input type="text" ref={ecode}/></td>
                    </tr>
                    <tr>
                        <td> name </td>
                        <td> <input type="text" ref={ename}/></td>
                    </tr>
                    <tr>
                        <td> salary </td>
                        <td> <input type="text" ref={esal}/></td>
                        </tr>
                        <tr>
                            <td> button</td>
                            <td> <button type=" submit" onClick={handlesubmitButton}>submit</button></td>
                        </tr>
                        <tr>
                            <td> clear data </td>
                            <td> 
                                <button type="submit" onClick={handleclearbutton}>clear button </button>
                            </td>
                        </tr>
                         <tr>
                            <td> sum</td>
                            <td> <input type="text" ref={sum}/></td>
                            <td> 
                                <button type="submit" onClick={handlesum}>sum button </button>
                            </td>
                        </tr>
                       
                            
                        
                </table>
            </center>
        </div>
    );
 }export default Userefexample;