import React from 'react'
import classes from "./Skills.module.css";
import { SiJirasoftware, SiConfluence, SiJavascript, SiHtml5, SiExpress, SiPostgresql, SiTypescript } from "react-icons/si"
import { DiCss3, DiDotnet, DiScrum } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { BsFiletypeSql, BsFiletypeJson, BsFiletypeXml } from "react-icons/bs";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";


const Skills = () => {
  return (
    <section id="#skills">
      <div className="section main">
        <h2 className="section__title different">Skills</h2>
        <div className={classes.techsection}>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>

          <div>
            <BsFiletypeSql />
            <h5>MS SQL</h5>
          </div>

          <div>
            <SiPostgresql />
            <h5>PostgreSQL</h5>
          </div>
          <div>
            <DiDotnet />
            <h5>.NET</h5>
          </div>
          <div>
            <SiTypescript />
            <h5>TypeScript</h5>
          </div>
          <div>
            <SiExpress />
            <h5>ExpressJS</h5>
          </div>
          <div>
            <TbApi />
            <h5>WebAPI</h5>
          </div>

          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          {/* <div>
            <BsFiletypeJson />
            <h5>JSON</h5>
          </div>
          <div>
            <BsFiletypeXml />
            <h5>XML</h5>
          </div>
          <div>
            <SiJirasoftware />
            <h5>Jira</h5>
          </div>
          <div>
            <DiScrum />
            <h5>Agile Scrum</h5>
          </div>
          <div>
            <SiConfluence />
            <h5>Confluence</h5>
          </div>
          <div>
            <FaAws />
            <h5>Cloud</h5>
          </div> */}
        </div>
      </div>
    </section >
  )
}

export default Skills
