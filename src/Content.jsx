



import React from "react";
import "./Content.css";
import styled from 'styled-components';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BoltIcon from '@mui/icons-material/Bolt';
import BrushIcon from '@mui/icons-material/Brush';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import img2 from "./assets/img2.jpg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.jpg"
import img6 from "./assets/img6.jpg"
import img7 from "./assets/img7.jpg"
import img8 from "./assets/img8.jpg"
import img9 from "./assets/img9.jpg"
import img10 from "./assets/img10.jpg"
import garage from "./assets/garage.jpg"
import img11 from "./assets/img11.jpg"
import img12 from "./assets/img12.png"
import img13 from "./assets/img13.png"
import img14 from "./assets/img14.png"
import t1 from "./assets/t1.png"
import t2 from "./assets/t2.png"

export default function Content() {

    const StyledWrapper = styled.div`
  .card {
    text-align:center;
    position: relative;
    width: 20rem;
    height: 17rem;
    background-color: #000;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #000;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 0.2px white solid;
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card img{
    height: 16.5rem;
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #000;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #fff;
    font-weight: 700;

  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }`;


  return (
    <div className="Content" >
      <div className="page1">
          <div className="t1">
          <img src={t1}  alt="" />
          </div>
          <div className="t2">
          <img src={t2}  alt="" />
          </div>
          <div className="t3">
          <p>Welcome to Hot Wheels — where speed rules, gravity breaks, and only the bold survive. Born for thrill, built for chaos. This isn’t just a race... it’s a full-throttle fury.
          </p>
          <p className="p2">Hot Wheels. UNLEASH THE BEAST.</p>
          </div>
      </div>
      <div className="page2">
        {/* Bugatti Veyron */}
      <div className="car-section  cc">
        <div className="car-text">
          <h1>Bugatti Veyron</h1><br />
          <h3>
            <strong>Unmatched in power, unrivaled in prestige.</strong><br />
            The Bugatti Veyron isn’t just a car — it’s a legacy on wheels.
          </h3><br />
          <p>
            Wheel Type – RR6SPM <br />
            Color – White <br />
            Top speed – 431 km/h (267 mph) <br />
            Engine – 8.0L quad-turbocharged W16
          </p>
        </div>
        <div className="car-img">
          <img src={img2} alt="Bugatti Veyron" />
        </div>
      </div>

      {/* Porsche 911 */}
      <div className="car-section">
        <div className="car-img">
          <img src={img3} alt="Porsche 911" />
        </div>
        <div className="car-text">
          <h1>Porsche 911</h1><br />
          <h3>
            <strong>Timeless design meets relentless performance.</strong><br />
            The Porsche 911 — an icon redefined with every generation.
          </h3><br />
          <p>
            Wheel Type – Turbo S AeroDesign 20″/21″ Alloy <br />
            Color – Black Metallic Finish <br />
            Top Speed – 293 km/h (182 mph) <br />
            Engine – 3.0L Twin-Turbocharged Flat-6
          </p>
        </div>
      </div>

      {/* Aston Martin DBS Superleggera */}
      <div className="car-section cc">
        <div className="car-text">
          <h1>Aston Martin DBS Superleggera</h1><br />
          <h3>
            <strong>Elegance with an edge —</strong> where handcrafted luxury meets raw, untamed power.
          </h3><br />
          <p>
            Wheel Type – Forged Y-Spoke 21″ Alloy Wheels <br />
            Color – Satin Xenon Grey <br />
            Top Speed – 340 km/h (211 mph) <br />
            Engine – 5.2L Twin-Turbocharged V12
          </p>
        </div>
        <div className="car-img">
          <img src={img4} alt="Aston Martin DBS Superleggera" />
        </div>
        
      </div>
      </div>
{
    <div className="page3">
      <StyledWrapper>
      <div className="card">
        <img src={img5} alt="Card 1" />
        <div className="card__content">
          <p className="card__title"><DirectionsCarIcon/></p>
          <p className="card__title">Classic Collection</p>
          <p className="card__description">
          Timeless designs that started it all
          </p>
          <button className="gradient-btn btn1">Explore Cars </button>
        </div>
      </div>
      </StyledWrapper>

      <StyledWrapper>
      <div className="card">
        <img src={img6} alt="Card 2" />
        <div className="card__content">
          <p className="card__title"><BoltIcon/></p>
          <p className="card__title">Speed Machines</p>
          <p className="card__description">
          Ultra-fast limited editions
          </p>
          <button className="gradient-btn btn2">Upgrade</button>
        </div>
      </div>
      </StyledWrapper>

      <StyledWrapper>
      <div className="card">
        <img src={img7} alt="Card 3" />
        <div className="card__content">
          <p className="card__title"><BrushIcon/></p>
          <p className="card__title">Custom Creations</p>
          <p className="card__description">
          Unique designs by top artists
          </p>
          <button className="gradient-btn btn3">Get In Touch</button>
        </div>
      </div>
      </StyledWrapper>

    </div> }

    <div className="page4">
    <h1 className="title">Build Your Dream Car</h1>

<div className="main-content1">
  <div className="car-section">
    <img src={img11} alt="Car" className="car-image" />
  </div>

  <div className="options-panel">
    <div className="option-group">
      <h2>Body Style</h2>
      <div className="options">
        <div className="option-card">
          <img src={img12} alt="Classic" />
          <p>Classic</p>
        </div>
        <div className="option-card">
          <img src={img13} alt="Sports" />
          <p>Sports</p>
        </div>
        <div className="option-card">
          <img src={img14} alt="Muscle" />
          <p>Muscle</p>
        </div>
      </div>
    </div>

    <div className="option-group">
      <h2>Color</h2>
      <div className="color-options">
        <span className="color-circle red"></span>
        <span className="color-circle blue"></span>
        <span className="color-circle orange"></span>
        <span className="color-circle black"></span>
      </div>
    </div>
  </div>
</div>

    </div>


    <h1 className="title">Race Tournaments</h1>
    <div className="page5">
      
    <StyledWrapper>
      <div className="card">
        <img src={img8} alt="Card 1" />
        <div className="card__content">
          <p className="card__title"><DirectionsCarIcon/></p>
          <p className="card__title">Daily Races</p>
          <p className="card__title">$100 Prize Pool</p>
          <p className="card__description">
          Compete in daily races with players worldwide
          </p>
          <button className="gradient-btn btn4">Enter Race </button>
        </div>
      </div>
      </StyledWrapper>

      <StyledWrapper>
      <div className="card">
        <img src={img9} alt="Card 2" />
        <div className="card__content">
          <p className="card__title"><BoltIcon/></p>
          <p className="card__title">Weekly Championship</p>
          <p className="card__title">$1000 Prize Pool</p>
          <p className="card__description">
          Weekly championship series with exclusive rewards
          </p>
          <button className="gradient-btn btn5">Enter Championship</button>
        </div>
      </div>
      </StyledWrapper>

      <StyledWrapper>
      <div className="card">
        <img src={img10} alt="Card 3" />
        <div className="card__content">
          <p className="card__title"><BrushIcon/></p>
          <p className="card__title">Monthly Grand prix</p>
          <p className="card__title">$5000 Prize Pool</p>
          <p className="card__description">
          Monthly grand prix with special edition cars
          </p>
          <button className="gradient-btn btn6">Enter Grand Prix</button>


        </div>
      </div>
      </StyledWrapper>
    </div>

    <div className="page6">
    <h1 className="title">VR Garage Experience</h1>
      <div className="main-content">
        <img src={garage} alt="Garage" className="garage-img" />
        <div className="features">
          <div className="feature-card">
            <div className="icon">🕶</div>
            <h2>360° View</h2>
            <p>View your cars from every angle</p>
          </div>
          <div className="feature-card">
            <div className="icon">🖱</div>
            <h2>Interactive</h2>
            <p>Customize and modify in real-time</p>
          </div>
          <div className="feature-card">
            <div className="icon">🔗</div>
            <h2>Share</h2>
            <p>Share your collection with friends</p>
          </div>
        </div>
      </div>

    </div> 

    <div className="contact-section">
      <h1 className="title">CONTACT US</h1>
      <p>
        Got Questions or Cool Ideas?
        <br />
        We’d love to hear from you!
        <br />
        Reach out for support, suggestions, or just to say hi.
        <br />
        Your Hot Wheels journey starts with a message!
      </p>
      <button className="contact-button">CONTACT US</button>

      <footer>
        <div className="footer-left">
          <p>Hot Wheels Logo</p>
          {/* <p>© 2024 Hot Wheels. All rights reserved.</p> */}
        </div>

        <div className="footer-center">
          <p>Connect With Us</p>
          <div className="icons">
            <FaFacebook className="icon"/>
            <FaTwitter className="icon"/>
            <FaInstagram className="icon"/>
            <FaYoutube className="icon"/>
          </div>
        </div>

        <div className="footer-right">
          <p>Newsletter</p>
          <input type="email" placeholder="Enter your email" />
        </div>
      </footer>
    </div>

  </div>
  );
}
