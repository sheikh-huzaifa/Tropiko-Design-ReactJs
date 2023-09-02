import React from 'react'
import PropTypes from 'prop-types'
import img1 from "../../Assect/card-item-1.png"
import img2 from "../../Assect/card-item-2.png"
import img3 from "../../Assect/card-item-3.png"

const ourservices = props => {
  return (
    <div>
    <div id="our_service">
        <span>  <h1 align="center">Our Services</h1>
                
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel praesentium rerum inventore ea!</p>
        </span>
    </div>
    <div id="our_service_box">
        <span>
            <img src={img1} alt=""/>
            <h4>Orange</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque recusandae suscipit quia ipsa eum, provident architecto error maiores, omnis eos dolorum officiis cupiditate. Voluptate iusto exercitationem ad, eaque laborum odit.</p>
        </span>
        <span>
            <img src={img2} alt=""/>
            <h4>Grapes</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque recusandae suscipit quia ipsa eum, provident architecto error maiores, omnis eos dolorum officiis cupiditate. Voluptate iusto exercitationem ad, eaque laborum odit.</p>
        </span> 
        <span>
            <img src={img3} alt=""/>
            <h4>Guava</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque recusandae suscipit quia ipsa eum, provident architecto error maiores, omnis eos dolorum officiis cupiditate. Voluptate iusto exercitationem ad, eaque laborum odit.</p>
        </span>
    </div >
    <div className='text-center mt-3 mb-4' ><button class="primary_btn" >Read More</button></div>
    </div> 
    
  )
}

ourservices.propTypes = {}

export default ourservices