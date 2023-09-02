import React from 'react'
import PropTypes from 'prop-types'
import img from "../../Assect/slide-img.png"

const herosection = props => {
  return ( 
    <div id="header_section" className='mb-3 pb-4'>
            <span>
                <h1>Welcome To <br/> Our Fruits Shop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloribus sapiente illo. Obcaecati sapiente molestias voluptatibus id, vel porro magnam. Modi libero, vitae minima dolorem earum rerum voluptatibus magnam. Provident.</p>
                <button className="primary_btn mx-2" id="head_btn1">SHOP NOW</button>
                <button className="primary_btn mx-2" id="head_btn2">CONTACT US</button>
            
            </span>
            <img id="head_img" src={img} alt=""/>

        </div>
  )
}

herosection.propTypes = {}

export default herosection