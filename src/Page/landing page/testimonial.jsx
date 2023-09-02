import React from 'react'
import PropTypes from 'prop-types'
import img from "../../Assect/client.png"

const testimonial = props => {
  return (
    <div id="testimonial">
        <h1>Testimonial</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero tenetur, praesentium sint illo mollitia ducimus? Esse, eaque! Quis temporibus reiciendis magni ipsa accusantium quam et dolorem eveniet. Sint, voluptatibus dicta!</p>
        <img src={img} alt=""/>
        <h2>Johnhex</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, repudiandae accusantium. Animi debitis perferendis aliquid laborum, veritatis voluptatibus cupiditate. Debitis doloremque, possimus mollitia necessitatibus quasi fugit architecto error sit sint.</p>
    </div>
  )
}

testimonial.propTypes = {}

export default testimonial