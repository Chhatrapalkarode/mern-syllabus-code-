import react from "react";
function Propsecond(props)
{
    return(
       <div>
         <h2> detail page </h2>
        <p> ROLLno:-{props.data.rno}</p>
        <p>   student name :-{props.data.name}</p>
        <p> student marks :-{props.data.marks}</p>
        <p> department :-{ props.data.dept}</p>
       <p> thank you </p>
       </div>
    );
    
}export default Propsecond;