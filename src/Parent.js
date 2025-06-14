import React, { useState,useContext } from "react";
import Childa from "./Component.js/Childa";
import { createContext } from "react";
import Childb from "./Component.js/Childb";
import ReactDom from "react-dom/client";

//  step:1  create context
//  step:2 wrap all the child inside the provider
//  step:3 pass the value
//  step:4 consumer ke ander ja kar consume karo 
const usercontext=createContext();
function Parent(){
    const [user,setUser]=useState("pintu");
    const [user1,setUser1]=useState();
    const handleUsertext = (evt) => {
        setUser(evt.target.value);
    };
    const handleUsertext1 = (evt) => {
        setUser1(evt.target.value);
    };
    
   
    
       
    
    
    return(
        <div>
            <input type="text" onChange={handleUsertext}  value={user}/>
            <p> no 2  <input type="text" onChange={handleUsertext1}  /></p>
            
            <button onClick={()=>{setUser(user1)}}> ok12</button>
            <usercontext.Provider value={(user)}>
            
            <Childa />
        </usercontext.Provider>
        
        </div>
    )
}export default Parent;
export {usercontext}

// chap gpt 

// import React, { useState } from "react";
// import { usercontext } from "./usercontext"; // usercontext ko import karein
// import Childa from "./Component.js/Childa"; // Childa component ko import karein
// import Childb from "./Component.js/Childb"; // Childb component ko import karein

// function Parent() {
//   const [user, setUser] = useState("pintu");

//   const handleUsertext = (evt) => {
//     setUser(evt.target.value);
//   };

//   return (
//     <usercontext.Provider value={user}> {/* Context mein user ka value pass karenge */}
//       <div>
//         <input type="text" onChange={handleUsertext} />
//         <button onClick={() => console.log(user)}>Check User</button>
//         <Childa /> {/* Childa component ko render karenge */}
//         <Childb /> {/* Childb component ko render karenge */}
//       </div>
//     </usercontext.Provider>
//   );
// }

// export default Parent;
