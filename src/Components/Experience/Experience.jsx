import React, { useContext, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import { experience } from '../../Constants';
import { ThemeContext } from "../../Context/Theme";

const Experience = () => {

    const [{ themename }] = useContext(ThemeContext);
    const [linecolor, setlinecolor] = React.useState(
        themename === "light" ? "#23283e" : "#fcfcfc"
    );

    useEffect(() => {
        if (themename === "dark") {
            setlinecolor("#fcfcfc");
        } else {
            setlinecolor("#23283e");
        }
    }, [themename]);

    return (
        <section id="#experience">
            <div className="section main">
                <h2 className="section__title different" data-aos="zoom-in-up">Experience</h2>
                <VerticalTimeline lineColor={linecolor}>
                    {
                        experience.map((exp, index) => (
                            <VerticalTimelineElement
                                key={exp.id}
                                className="vertical-timeline-element--work"
                                data-aos="fade-right"
                                contentStyle={{
                                    boxShadow: `var(--shadow)`,
                                    border: "3px solid var(--clr-primary)",
                                    backgroundColor: `var(--clr-bg)`,
                                    textAlign: "center",
                                    color: `var(--clr-fg-alt)`,
                                }}
                                contentArrowStyle={{
                                    borderRight: "16px solid  var(--clr-primary)",
                                }}
                                date={exp.duration}
                                iconStyle={{
                                    border: ` 3px solid var(--clr-primary)`,
                                    backgroundColor: `var(--clr-bg)`,
                                    color: `var(--clr-primary)`,
                                }}
                                icon={exp.type === "Employee" ? <WorkIcon /> : <SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title" >{exp.Role}</h3>
                                <h4 className="vertical-timeline-element-subtitle" >{exp.Industry}</h4>
                                <h5> {exp.info} </h5>
                            </VerticalTimelineElement >
                        ))
                    }
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default Experience
