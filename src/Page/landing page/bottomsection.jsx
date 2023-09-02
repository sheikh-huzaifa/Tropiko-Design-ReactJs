import React from 'react'
import PropTypes from 'prop-types'
import img1 from "../../Assect/fb.png"
import img2 from "../../Assect/twitter.png"
import img3 from "../../Assect/49408.png"
import img4 from "../../Assect/instagram.png"

const bottomsection = props => {
  return (
    <div id="bottom_section">
        <div>
            <h1>Fruits</h1>
            <p>Randomised Words Which Don't Even Slightly Believable.If You Are Going To Use A Passage Of Lorem Ipsum</p>
        </div>
        <div>
            <h1>Services</h1>
            <p>Randomised Words Which Don't Even Slightly Believable.If You Are Going To Use A Passage Of Lorem Ipsum</p>
        </div>
        <div>
            <h1>List</h1>
            <p>Randomised Words Which Don't Even Slightly Believable.If You Are Going To Use A Passage Of Lorem Ipsum</p>
        </div>
        <div>
            <h1>Follow up</h1>
                <img src={img1} alt="" className='me-1'/>
                <img src={img2} alt="" className='me-1'/>
                <img src={img3} alt="" className='me-1'/>
                <img src={img4} alt="" className='me-1'/>
            <h1>Subscribe Now</h1>
            <input type="text"/>
            <br/>
            <button className="primary_btn" id="bottom_section_btn">Subscribe</button>
        </div>
    </div>
  )
}

bottomsection.propTypes = {}

export default bottomsection