import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import "./Home.css";
import Content from "./Content.jsx";

export default function Home() {

    return (
        <div className="Home">

            <Navbar className="navbar"/>
            <Content/>
      
        </div>
    );
}
