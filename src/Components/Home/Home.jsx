import React from 'react'
import { socialMedia } from '../../Constants';
import Button from '../Button/Button'
import { Type } from '../Content/Typewritter';
import classes from "./Home.module.css";


const buttonClickHandler = () => {
    console.log("Sa");
    window.open(
        "https://drive.google.com/file/d/1diUf9LUJt5dHaF8Wkm54DJR5pq6AyzXn/view?usp=share_link"
    )
}
const Home = () => {
    return (
        <section id="#home">
            <div className={classes.flexcontainer}>
                <h1 className="mobileHead">Hello, This is <span className={classes.about__name}> Santhosh Kumar R </span></h1>
                <Type />

                <p className={classes.p}> Possess a diverse set of technical skills encompassing both front-end and back-end development.
                    With proficiency in programming languages such as Javascript, .Net, and SQL, I have developed scalable and responsive web applications.
                    I have hands-on experience in designing and implementing complex databases,
                    integrating with RESTful APIs, and using web development frameworks such as React and Node.js.</p>
                <p className={classes.p}>Additionally, my knowledge of DevOps practices and agile methodologies enables me to collaborate effectively
                    with cross-functional teams to deliver high-quality software products.</p>

                <div className={classes.icons}>
                    {socialMedia.map((social, index) => (
                        <img className={classes.img}
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            onClick={() => window.open(social.link)}
                        />
                    ))}
                </div>
                <Button btnName="Download CSV" btnClick={buttonClickHandler} type="button" />
            </div>
        </section>

    )
}

export default Home
