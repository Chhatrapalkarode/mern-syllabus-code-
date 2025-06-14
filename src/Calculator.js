import react,{useState} from "react";
function Calculator(){
    const [optr,setOptr]=useState();
    const [num1,setNum1]=useState();
    var [data,setData]=useState();
    const handleNumberButton=(evt)=>{
        if(evt.target.name=="btn1"){
            setData(data+"1")
        }
        
        if(evt.target.name=="btn2"){
            setData(data+"2")
        }
        
        if(evt.target.name=="btn3"){
            setData(data+"3")
        }
        
        if(evt.target.name=="btn4"){
            setData(data+"4")
        }
        
        if(evt.target.name=="btn5"){
            setData(data+"5")
        }
        
        if(evt.target.name=="btn6"){
            setData(data+"6")
        }
        
        if(evt.target.name=="btn7"){
            setData(data+"7")
        }
        
        if(evt.target.name=="btn8"){
            setData(data+"8")
        }
        if(evt.target.name=="btn9"){
            setData(data+"9")
        }
        
        if(evt.target.name=="btn0"){
            setData(data+"0")
        }
        
    }
    const handleoptrButton=(evt)=>{
        setNum1(parseInt(data))
        setData("");
        if(evt.target.name=="btn+"){
            setOptr("+");

        }
        if(evt.target.name=="btn-"){
            setOptr("-");

        }
        if(evt.target.name=="btn*"){
            setOptr("*");

        }
        if(evt.target.name=="btn/"){
            setOptr("/");

        }
        if(evt.target.name=="btn="){
            setOptr("=");

        }
    }
    const handleEqualButton=()=>{
        var num2=(parseInt(data));
        var num3;
        setData("")
        switch(optr){
            case "+":
            num3=num1+num2;
            break;
            case "-":
                num3=num1-num2;
                break;
            case "*":
                 num3=num1*num2;
                break;
            case "/":
              num3=num1/num2;
              break;
            default:
                alert("invalid operator ");
                break;
                    


        }
        setData(num3)

    }
     const handleClearButton=()=>{
        setData("")
     }
     return(
        <div>
            <center>
                <table border={2}>
                    <tr>
                        <td>
                            <input type="text" value={data}/>
                        </td>
                    </tr>
                </table>
                <table border={2}>
                    <tr>
                        <td>
                            <button type="submit" onClick={handleNumberButton} name="btn1">1</button>
                            </td>
                           <td> <button type="submit" onClick={handleNumberButton} name="btn2"> 2</button></td>
                           <td> <button type="submit" onClick={handleNumberButton} name="btn3"> 3</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button type="submit" onClick={handleNumberButton} name="btn4"> 4</button>
                        </td>
                        <td>
                        <button type="submit" onClick={handleNumberButton} name="btn5"> 5</button>
                        </td>
                        <td>
                        <button type="submit" onClick={handleNumberButton} name="btn6">6 </button>
                        </td>
                    </tr>
                    <tr>
                        <td> 
                        <button type="submit" onClick={handleNumberButton} name="btn7">7</button> </td>
                        <td>  <button type="submit" onClick={handleNumberButton} name="btn8"> 8</button></td>
                        <td>  <button type="submit" onClick={handleNumberButton} name="btn9"> 9</button></td>
                        {/* <td>  <button type="submit" onClick={handleNumberButton} name="btn0"> 0</button></td> */}
                    </tr>
                    <tr>
                    <td>  <button type="submit" onClick={handleNumberButton} name="btn0"> 0</button></td>
                        <td>
                        <button type="submit" onClick={handleoptrButton}  name="btn+" >+</button>
                        </td>
                        <td>
                        <button type="submit" onClick={handleoptrButton}  name="btn-" >-</button>
                        </td>
                       
                       </tr>
                        <tr>
                        <td>
                        <button type="submit" onClick={handleoptrButton}  name="btn*" >*</button>
                        </td>
                        

                        <td>
                        <button type="submit" onClick={handleoptrButton}  name="btn/" >/</button>
                        </td>
                        <tr>
                            <td> <button type="submit" onClick={handleEqualButton}> =</button></td>
                        </tr>

                        </tr>
                        
                        <tr>
                            <td></td>
                            <td></td>
                            <td> <button type="submit" onClick={handleClearButton}> clear</button></td>
                           
                        </tr>
                        

                    
                </table>
            </center>
        </div>
     );
}export default Calculator;