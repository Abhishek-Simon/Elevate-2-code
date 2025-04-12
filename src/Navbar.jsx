// import React from 'react';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">HotWheels</div>
//       <ul className="nav-links">
//         <li><a href="#" className="active">HOME</a></li>
//         <li><a href="#">COLLECTIONS</a></li>
//         <li><a href="#">CONFIGURATOR</a></li>
//         <li><a href="#">TOURNAMENTS</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;







import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import t3 from "./assets/t3.png"


const Navbar = () => {
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  const toggleSidePanel = () => {
    setSidePanelOpen(!sidePanelOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={t3} alt="" />
        </div>
        <ul className="nav-links">

          <a href = "#" class="link"><li>Home</li></a>
          <a href = "#" class="link"><li>Collections</li></a>   
          <a href = "#" class="link"><li>Configurator</li></a>
          <a href = "#" class="link"><li>Tournaments</li></a>
        </ul>
        <div className="menu-icon" onClick={toggleSidePanel}>
          <FaBars />
        </div>
      </nav>

      {/* Side Panel for Mobile */}
      <div className={`side-panel ${sidePanelOpen ? "open" : ""}`}>
        <div className="close-btn" onClick={toggleSidePanel}>
          <FaTimes />
        </div>
        <ul>
          <li className="hh">Home</li>
          <li className="hh">Collections</li>
          <li className="hh">Configurator</li>
          <li className="hh">Tournaments</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
