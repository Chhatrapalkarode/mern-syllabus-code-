
import React from "react";
// import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Save from "./Save";
import Delete from "./Delete";
import Update from "./Update";
import Search from "./Search";
import Show from "./Show";

function Mainpage() {
    return (
         <Router>
           
        <div>
            <center>
            <h2> employ data </h2>
                <nav>
                    <Link to="/Save" className="m-4 ">Save</Link>
                    <Link to="/Delete" className="m-4 ">Delete</Link>
                    <Link to="/Update"className="m-4 ">Update</Link>
                    <Link to="/Search"className="m-4 ">Search</Link>
                    <Link to="/Show"className="m-4 ">Show</Link>
                </nav>
                <Routes>
                    <Route path="/Save" element={<Save />} />
                    <Route path="/Delete" element={<Delete />} />
                    <Route path="/Update" element={<Update />} />
                    <Route path="/Search" element={<Search />} />
                    <Route path="/Show" element={<Show />} />
                </Routes>
            </center>
        </div>
        </Router>
    );
}

export default Mainpage;
