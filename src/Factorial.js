import react,{useState} from "react";
function Factorial(){
    const [num,setNum1]=useState();
    const [res,setRes]=useState();
    const handleNum1Text=(evt)=>{
        setNum1(evt.target.value);
    }
    const handleSumButton=()=>{
        var i,f=1;
        for(i=1;i<=num;i++){
            f=f*i;
            

        }
        setRes(f);
       
    }
    const handleClear=()=>{
        setNum1("");
        setRes("");
    }
    return(
        <div>
            <center>
                <table border={2}>
                    <tr>
                        <td> enter the n value</td>
                        <td>
                            <input type="number" onChange={handleNum1Text} 
                            value={num} />
                        </td>
                        </tr>
                        <tr>
                            <td>
                                result 
                            </td>
                            <td>
                                <input type="text" value={res}/>
                            </td>
                        </tr>
                        <tr> 
                            <td> <button onClick={handleSumButton}> click here </button></td>
                        </tr>
                        <tr>
                    <td>
                        <button onClick={handleClear}>clear</button>
                    </td>
                        </tr>
                </table>
            </center>
        </div>
    );


} export default Factorial;