import React ,{useState} from "react";

import './react.css'
export default function Onmouse(){
const [salary,setNum1]=useState();
const [tax,setNum2]=useState();
// const [extra,setNum3]=useState();
const [total,setNum4]=useState();
const [bonous,setNum5]=useState();
const handleNum1=(e)=>{
setNum1(parseInt((e.target.value)));
}
const handleNum12=(e)=>{
setNum2(parseInt(e.target.value));
}
const handleNum5=(e)=>{
    setNum5(parseInt(e.target.value));
    }

const handleSalary=()=>{
    // var c=parseInt(1000);
    // setNum3(c)
    var d=parseInt(salary-(salary/100*tax)+bonous);
    setNum4(d)

}

const handlemouse=()=>{
    alert("mouse event are work ");
}
// const handlecolor=()=>{
//   {{  Color:"red"}}
// }
return(
    <div className="container display-6">
        <h2 className="display-5 bg-primary"> mouseover event and salary count </h2>
        <p className="salary"> total salary <input className="bg-secondary" type="text" value={salary} onChange={handleNum1}/></p>
        <p className="salary"> tax <input className="bg-secondary"  type="text" value={tax} onChange={handleNum12}/></p>
        <p className="salary"> bonous <input  className="bg-secondary" type="text" value={bonous} onChange={handleNum5} /></p>
        
       
        <p className="salary">  salary before reduct tax :<input  className="bg-secondary"type="text" placeholder="$" value={salary+bonous}/></p>
        <p className="salary">  received bonous:<input className="bg-secondary" type="text" value={bonous}/></p>
        <p className="salary"> after tax slary :<input  className="bg-secondary" type="text" value={total}/></p>
        <button  className="btn btn-success "   onClick={handleSalary}>ok</button>
        


        {/* only practice use his button  */}
        <br/>  <br/>  <br/>  <br/>
        check button: <button onMouseOver={handlemouse}>check </button>
        {/* <button onClick={handlecolor}>color</button> */}
        </div>
    
)
}