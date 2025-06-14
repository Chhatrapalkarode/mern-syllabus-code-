import react from "react";
import PropType from 'prop-types'
import propTypes from "prop-types";
function Kunal(props)
{
    return(
       <div>
         <h2> detail 2nd  page and type  </h2>
        <p> ROLLno:-{props.rno}</p>
        <p>   student name :-{props.name}</p>
        <p> student marks :-{props.marks}</p>
        <p> department :-{ props.dept}</p>
       <p> thank you </p>
       </div>
    );
    
 }
//  used to check the type 
Kunal.propTypes={
  rno:propTypes.number,
  name:propTypes.number,
  marks:propTypes.number,
  dept:propTypes.number
};
  export default Kunal;
