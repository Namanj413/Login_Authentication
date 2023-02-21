import React from "react";
import { Link } from 'react-router-dom'
import './FourOFour.css';
import Lost from "../images/lost.jpg";
function FourOFour() {
  return (
    <>
      <div
        style={{
          minHeight:"120vh",
          height: "130vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "-12%",
          marginBottom: "0%",
          backgroundImage: `url(${Lost})`,
        }}
      >
        <br />
        <div>
          <div
            className="warning"
            style={{
              textAlign: "center",
              // color:"grey",
              marginTop: "25%",
              textShadow: "initial",
              padding: "5px",
              textSizeAdjust: "22px",
            }}
          >
          <br/>
            
            <h1 className="warning" style={{marginTop:"-3%",fontSize:"150px"}}>404 </h1>
            <br/>
            <h1 className="warning" style={{fontSize:"70px"}}>PLANET NOT FOUND</h1>
            
            <h4  className="warning" style={{marginTop:"14%",fontSize:"40px"}}>Don't panic and watch your oxygen level</h4>
          <br/>

            <Link to="/">
          
              <button
                type="button"
                class="btn btn-outline-secondary"
                style={{
                  color: "white",
                }}
                to="/"
              >
                GO BACK TO SAFE ZONE
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FourOFour;
