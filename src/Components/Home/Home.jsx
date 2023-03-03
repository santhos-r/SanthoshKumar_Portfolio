import React from 'react'
import { socialMedia } from '../../Constants';
import Button from '../Button/Button'
import { Type } from '../Content/Typewritter';
import classes from "./Home.module.css";

const Home = () => {
    return (
        <section id="#home">
            <div className={classes.flexcontainer}>
                <h1 className="mobileHead">Hello, This is <span className={classes.about__name}> Santhosh Kumar R </span></h1>
                <Type />
                <p className={classes.about__desc}>
                    Passionate and creative Full Stack Developer having proficiency in
                    MERN Stack. Attired with a variety of tools & technologies and keen to
                    learn new one. Worked on wordpress since last 3 years and delivered
                    15+ projects till now.
                </p>
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
                <Button />
            </div>
        </section>

    )
}

export default Home
