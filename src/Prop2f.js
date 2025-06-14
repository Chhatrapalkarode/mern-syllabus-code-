import react from "react";

function Prop2f(props)
{
    return(
       <div>
         <h2> detail 2nd  page </h2>
        <p> ROLLno:-{props.rno}</p>
        <p>   student name :-{props.name}</p>
        <p> student marks :-{props.marks}</p>
        <p> department :-{ props.dept}</p>
       <p> thank you </p>
       </div>
    );
    
} export default Prop2f;

