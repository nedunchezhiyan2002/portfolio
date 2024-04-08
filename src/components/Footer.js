import "./FooterStyles.css"

import React from 'react'
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{
                        color: "white",
                        marginRight:"2rem"
                    }}/>
                    <div>
                        <p>123 Housing Socity</p>
                        <p>India</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{
                        color: "white",
                        marginRight:"2rem"
                        }}/>
                        9345828463
                    </h4>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{
                        color: "white",
                        marginRight:"2rem"
                        }}/>
                    info@gmail.com
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is Anonymous studying in anonnymoys institute</p>
                <FaFacebook size={20} style={{
                        color: "white",
                        marginRight:"1rem"
                        }}/>
                <FaTwitter size={20} style={{
                        color: "white",
                        marginRight:"1rem"
                        }}/>
                <FaLinkedin size={20} style={{
                        color: "white",
                        marginRight:"1rem"
                        }}/>
            </div>
        </div>
    </div>
  )
}

export default Footer