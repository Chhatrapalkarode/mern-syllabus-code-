// using the useref make  props question 
import react from "react";
function Usinguseref(props){
    return(
        <div style={{backgroundColor:"grey"}}>
            <center>
                <h2 style={{color:"white"}}>  basic detail using useref </h2>
                <p style={{color:"white"}}> welcome city:-{props.name}</p>
                <p style={{color:"white"}}> city code :-{props.code}</p>
            </center>
        </div>

    );
}export default Usinguseref;