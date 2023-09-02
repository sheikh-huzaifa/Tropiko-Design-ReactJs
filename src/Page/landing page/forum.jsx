import React from 'react'
import PropTypes from 'prop-types'
import img from "../../Assect/orange-dish.png"

const forum = props => {
  return (
    <div id="forum1">
        
        <form action="">
            <h1>Contact Us</h1>
            <input type="text" name="Name" placeholder="Name" className="secondary_btn"/>
            <input type="number" name="Number" className="secondary_btn" placeholder="Number"/>
            <input type="email" name="Mail" className="secondary_btn" placeholder="Email"/>
            <textarea name="Message" placeholder="Message" className="secondary_btn" maxlength="100" id="areatext"></textarea>
            <button className="primary_btn" id="forum_btn">Send</button>
        </form>
        <span id="forum_img"><img  src={img} alt=""/></span>
    </div>
  )
}

forum.propTypes = {}

export default forum