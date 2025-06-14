import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';


import { Router } from 'react-router-dom';


import { BrowserRouter } from 'react-router-dom';
import Student from './Student';

// import Search from './database/Search';
import Search from './Axios/Search';
import Test from './Axios/Test';
import Show from './Axios/Show';
import Save from './Axios/Save';
import MyComponent from './Mycomponent';
import Mycal from './Mycal';
import Colors from './Colors';
import Ifelse4 from './Ifelse4';
import Userefexample from './Userefexample';
import Router1 from './Router1';
import Resume from './Resume';
import Onmouse from './Onmouse';
import Uppercase from './Uppercase';
import Useeffect from './Useeffect';
import Update from './Axios/Update';
import Usinguserefs from './Usinguserefs';










const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Usinguserefs/>
<Show/>
<Search/>
<Save/>
<Update/>

{/* <Save/> */}
    <Router1/>
    <Resume/>
   <Userefexample/>
    {/* <Save/> */}
   {/* <Search/>  */}
   {/* <Show/> */}
   {/* <Test/>
  
   {/* <Kunal rno={"12"} name={"pk"} marks={4220} dept={"it"}/> */}
  
   
  <Mycal/>
  <Colors/>
  <Ifelse4/>
  <Student/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
