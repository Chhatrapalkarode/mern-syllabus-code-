
// import React, { useContext } from "react";
// import Parent from "../Parent";
import React, { useContext } from "react";
import { usercontext } from "../Parent";

function Childb(){
    const user=useContext(usercontext);
    return(
        <div> 
          
           child b: {user}
        </div>
    )

}export default Childb;


//  chat gpt 

// import React, { useContext } from "react";
// import { usercontext } from "../usercontext"; // usercontext ko import karein

// function Childb() {
//   const user = useContext(usercontext); // Context se user value ko access karte hain

//   return (
//     <div>
//       <h1>Child B: {user}</h1> {/* User data ko display karte hain */}
//     </div>
//   );
// }

// export default Childb;
