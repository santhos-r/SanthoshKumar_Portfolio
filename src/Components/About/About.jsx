import React from 'react'
import { profile } from '../../Assets'
import classes from "./About.module.css"

const About = () => {
  return (
    <section id="#about">
      <h2 className="section__title different"> About</h2>
      <div className={classes.div}>
        <div className={classes.div1}>
          <p> I have ten years of diligent experience and two or more years of experience working with technologies like React,
            Node, Redux, Express, and the fundamentals of JavaScript. In my previous role as a Senior Engineer, I oversaw an
            agile team of eight individuals who created the best React products in the market by adhering to object-oriented
            design principles. </p>
        </div>
        <div className={classes.subdiv}>
          <div className={classes.div2}>
            <img className={classes.imgdiv} src={profile} alt="Profile" />
          </div>
          <div className={classes.div3}>
            Test2
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
