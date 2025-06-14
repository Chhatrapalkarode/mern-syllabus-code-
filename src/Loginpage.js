//  theory explain :

/*
The getElementById('root') function grabs this div element where your React app will be displayed.
2. ReactDOM.createRoot():
ReactDOM.createRoot() is a new method introduced in React 18.
It initializes a "root" container in which React will manage and render your app's UI.
In simpler terms, it sets up a container (root) where React will render the components, and it prepares React to
 use new features like concurrent rendering for better performance.

*/


import React from "react";
import react,{useState} from "react";
import Home from "./home";
import Errorpage from "./Errorpage";
// import ReactDom from "react-dom\client";
import ReactDOM from "react-dom/client";
function Loginpage(){
    const [uid1,setUid1]=useState();
    const[upass1,setUpass1]=useState();
    const [uid,setUid]=useState();
    const[upass,setUpass]=useState();
    const handleUid1Text=(evt)=>{
        
        setUid1(evt.target.value);
    };
    const handleUpass1Text=(evt)=>{
        setUpass1(evt.target.value);
    };



    // 
    const handleUidText=(evt)=>{
        
        setUid(evt.target.value);
    };
    const handleUpassText=(evt)=>{
        setUpass(evt.target.value);
    };
    const handleLoginpageButton=()=>{
        const root = ReactDOM.createRoot(document.getElementById('root'));
        if(uid==uid1 && upass==upass1){
            root.render(<Home/>);

        }
        else{
            root.render(<Errorpage/>)
        }
    }
    return(
        <div> 
            <center>
                <h2> login page </h2>
                <table>
                <tr>
                        <td>
                             create the user id 
                        </td>
                        <td>  <input type=" text " onChange={handleUid1Text}/></td>
                    </tr>
                    <tr>
                        <td>  create the  password </td>
                        <td> <input type="password " onChange={handleUpass1Text}/></td>
                    </tr>

                    {/*  */}
                    <tr>

                   
                  
                        <td>
                            enter the valid  uer id 
                        </td>
                        <td>  <input type=" text " onChange={handleUidText}/></td>
                    </tr>
                    <tr>
                        <td>  enter the valid password </td>
                        <td> <input type="password " onChange={handleUpassText}/></td>
                    </tr>
                    <tr> <td> </td>
                        <td> <button type="submit" onClick={handleLoginpageButton}>click  </button></td>
                    

                    </tr>
                </table>
            </center>
        </div>
    );
} export default Loginpage;

