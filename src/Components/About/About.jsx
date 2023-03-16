import React from 'react'
import { profile } from '../../Assets'
import classes from "./About.module.css"
import AddToQueue from "@material-ui/icons/AddToQueue";
import { myRoles } from '../../Constants';



const About = () => {
  return (
    <section id="#about">
      <div className="section" data-aos="zoom-in-up">
        <h2 className="section__title different"> About</h2>
        <div className={classes.div}>
          <div className={classes.div1} data-aos="zoom-in-up">
            <p className={classes.p}>
              Solid understanding of the fundamentals of HTML, CSS, and JavaScript,<br />
              as well as experience with front-end frameworks of React, TypeScript and <br />
              back-end frameworks like Node.js,strong knowledge in database <br />
              management and server-side technologies of Express.js.</p>
            <p> The term describes me in the name of :</p>
            <div className={classes.datacontainer}>
              {
                myRoles.map((newRole, index) => (
                  <React.Fragment key={index}>
                    <h5 className={classes.different} >
                      <span className={classes.icons}>
                        <AddToQueue />
                      </span>
                      {newRole.role}
                    </h5>
                  </React.Fragment>
                ))
              }
            </div>
          </div>
          <div className={classes.subdiv}>
            <div className={classes.div2}>
              <img className={classes.imgdiv} src={profile} alt="Profile" />
            </div>

          </div>
        </div>
      </div>

    </section >
  )
}

export default About
