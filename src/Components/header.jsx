import React from 'react'
import PropTypes from 'prop-types'
import img1 from "../Assect/logo.png"
import img2 from "../Assect/search-icon.png"

const header = props => {
  return (
    <nav id="navbar">
            <span id="logo">

                <span>
                    <img  src={img1} alt=""/>
                </span>
                <span id="logo_heading">TROPIKO</span>

            </span> 
            
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="#fresh_fruit">Fruits</a></li>
                <li><a href="#our_service">Service</a></li>                
                <li><a href="#forum1">Contact Us</a></li>                

            </ul>
            <img id="img_search" src={img2} alt=""/>
            <button className="primary_btn" id="nav_btn">Get a Quatos</button>
        
        </nav>
  )
}

header.propTypes = {}

export default header