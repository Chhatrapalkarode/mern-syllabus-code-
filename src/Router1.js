import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { Link,Route,Routes } from "react-router-dom";
import Aboutr from "./Aboutr";
import Homer from "./Homer";

function Router1(){
    return(
         <Router>
        <div>
            <center>
                
                <Link to="/Homer">Home1</Link><span> </span>
                <Link to="/Aboutr">About</Link><span> </span>
                <Routes>
                    <Route path ="/Homer" element={<Homer/>}></Route>
                    <Route path ="/Aboutr" element={<Aboutr/>}></Route>

                </Routes>
            </center>
        </div>
       </Router>
    );
}export default Router1;
// import ReactDOM from 'react-dom/client'; no need to in  side  the index.js  file 
// import { BrowserRouter } from 'react-router-dom'; also no need the file inside the index.js






