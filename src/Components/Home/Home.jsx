import React from 'react'
import { socialMedia } from '../../Constants';
import Button from '../Button/Button'
import { Type } from '../Content/Typewritter';
import classes from "./Home.module.css";
import { FaLinkedin } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/Theme";

const buttonClickHandler = () => {
    console.log("Sa");
    window.open(
        "https://drive.google.com/file/d/1diUf9LUJt5dHaF8Wkm54DJR5pq6AyzXn/view?usp=share_link"
    )
}
const Home = () => {
    const [{ themename }] = React.useContext(ThemeContext);
    return (
        <section id="#home">
            <div>
                <div className={classes.flexcontainer}>
                    <h1 data-aos="fade-right" className="mobileHead" >Hello, This is <span className={classes.about__name}> Santhosh Kumar R </span></h1>
                    <Type />

                    <p data-aos="fade-right" className={classes.p}> Possess a diverse set of technical skills encompassing both front-end and back-end development.
                        With proficiency in programming languages such as <b>Javascript, .Net, and SQL</b>, I have developed scalable and responsive web applications.
                        I have hands-on experience in designing and implementing complex databases,
                        integrating with <b>RESTful APIs</b>, and using web development frameworks such as <b>React,Typescript and Node.js</b>.</p>
                    <p data-aos="fade-right" className={classes.p}> I am holding Tier-2 dependent visa valid till March-2024(Exten to 2 Years) & immediate joiner without notice period </p>
                    <div className={classes.contactMain}>
                        <div
                            className={classes.contactcontainer}
                            data-aos="fade-right"
                        ><a
                            href="https://www.linkedin.com/in/santhoshkumar02ten/"
                            target="_blank"
                            rel="noreferrer"
                        >
                                <FaLinkedin className={classes.linkedin} />
                            </a>
                            <a
                                href="https://github.com/santhos-r/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <VscGithub className={classes.github} />
                            </a>
                            <a
                                href="mailto:santhosh02ten@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <CgMail className={classes.email} />
                            </a>
                            <a href="tel:+44-7767958640" target="_blank" rel="noreferrer">
                                <BsFillTelephoneFill className={classes.phone} />
                            </a>
                        </div>
                        <div className={classes.mailNumber} data-aos="fade-right">
                            <div>
                                <span>
                                    <BsFillTelephoneFill className={classes.phone} />
                                </span>
                                <span>
                                    <p className={classes.mailNumberp}>+44-7767958640</p>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <CgMail className={classes.email} />
                                </span>
                                <span>
                                    <p className={classes.mailNumberp}>santhosh02ten@gmail.com</p>
                                </span>
                            </div>

                        </div>
                    </div>

                    <Button btnName="Download CSV" btnClick={buttonClickHandler} type="button" />
                </div>

            </div>
        </section >

    )
}

export default Home
