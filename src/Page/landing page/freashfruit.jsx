import React from 'react'
import PropTypes from 'prop-types'
import img1 from "../../Assect/orange.png"
import img2 from "../../Assect/grapes.png"
import img3 from "../../Assect/gauva.png"

const freashfruit = props => {
  return (
    <div >
        <div id="fresh_fruit">
            <h1>Fresh Fruit</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolores id impedit, rerum a eos aspernatur quae voluptatum odit?</p>
        </div>
        <div id="orange">
            <div>
                <h1>Best Freash Orange</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi laborum, enim dicta veritatis nihil illo, distinctio numquam magnam harum dolores impedit pariatur explicabo sed expedita deserunt tenetur cumque reiciendis suscipit.</p>
                <button className="primary_btn">Buy Now</button>
            </div>
            <span>
                <img src={img1} alt=""/>
            </span>
        </div>
        <div id="graphes">
            <div>
                <h1>Best Freash Graphes</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi laborum, enim dicta veritatis nihil illo, distinctio numquam magnam harum dolores impedit pariatur explicabo sed expedita deserunt tenetur cumque reiciendis suscipit.</p>
                <button className="primary_btn">Buy Now</button>
            </div>
            <span>
                <img src={img2} alt=""/>
            </span>
        </div>
        <div id="guava">
            <div>
                <h1>Best Freash Guava</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi laborum, enim dicta veritatis nihil illo, distinctio numquam magnam harum dolores impedit pariatur explicabo sed expedita deserunt tenetur cumque reiciendis suscipit.</p>
                <button className="primary_btn">Buy Now</button>
            </div>
            <span>
                <img src={img3} alt=""/>
            </span>
        </div>
    </div>
  )
}

freashfruit.propTypes = {}

export default freashfruit