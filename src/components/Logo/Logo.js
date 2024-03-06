import React from "react";
import Tilt from 'react-parallax-tilt';
import Duck from './Logo.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt 
             perspective={2000}
             tiltMaxAngleX={3}
             tiltMaxAngleY={3}
             maxTilt={5} 
             >
                <div className="Tilt br2 shadow-2"style={{ height: '150px', width:'150px'}}>
                    <img alt="logo" src={Duck}></img>
                </div>
            </Tilt>
        </div>
      
    )
}

export default Logo