import React,{useState} from "react";
 export default function Uppercase(){
    const [text,setTexts]=useState("kaise hoga ye worrk ");
    const[lower,setLower]=useState("LOWER CASE  ")
    const handleTextstext=(evt)=>{
        
        setTexts(evt.target.value);
        // alert("evts")
    }
    const handlelower=(evt)=>{
        
        setLower(evt.target.value);
        // alert("lower")
    }
    const handleButtonevent=()=>{
        
        const  newtext=text.toUpperCase();
        setTexts(newtext);
        
    }
    const handlelowerButtonevent=()=>{
        
        const  newlower=lower.toLowerCase();
        setLower(newlower);
    }
    const handleclearlower=()=>{
        setLower("");
    }
    const handleclearupper=()=>{
        setTexts("");
    }

    return(
        <>
        <center>
            <h2  className=" bg-success"> upper case test </h2>
            <textarea value={text} onChange={handleTextstext}></textarea><br/>
            <h2 className="bg-primary"> lower case test </h2>
            <textarea className="bg-warning" value={lower} onChange={handlelower}></textarea><br/>
            <button  className="btn btn-secondary" onClick={handlelowerButtonevent}>lowercase button</button><br/>
            <button className="btn btn-primary" onClick={handleButtonevent}>Uppercase button </button><br/>
            <button className="btn btn-secondary" onClick={handleclearupper}> clear Uppercase button </button><br/>
            <button className="btn btn-primary" onClick={handleclearlower}> clear lower button </button><br/>
            <br/> <br/>
            <h4> text  for uppper case </h4>
            <p> <b>{text.split(" ").length}  </b>word and  <b>{text.length} </b>word length</p> 
            {/* <br/> <br/> */}
            <h4> text  for lower  case </h4>
            <p> {lower.split(" ").length}  word and {lower.length} word length </p> 
            <h4> preview</h4>
            {/* <p> {lower}</p> */}
            <textarea  value={lower}></textarea>
            <br/> <br/>
            <h4> preview upper case </h4>
            <p> {text}</p>
        </center>
        </>
    )
    }