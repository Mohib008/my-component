import React from "react";
import Tilt from 'react-tilt';
import NSP from "./NSP.png";
import "./Logo.css";


const Logo = () => {
    return (
      <div className="ma2 mt0">
        <Tilt className="Tilt br2 shadow-2" options={{ max : 40 }} style={{ height: 150, width: 150 }} >
           <div className="Tilt-inner pa3">
             <img style={{paddingTop: "5px", paddingBottom: "3px"}} alt="logo" src={NSP} />
            </div>
        </Tilt>
      </div>
    );
}


export default Logo;