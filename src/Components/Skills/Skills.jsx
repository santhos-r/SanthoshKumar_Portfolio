import React from 'react'
import classes from "./Skills.module.css";
import { SiJirasoftware, SiConfluence, SiJavascript, SiHtml5, SiExpress, SiPostgresql, SiTypescript } from "react-icons/si"
import { DiCss3, DiDotnet, DiScrum } from "react-icons/di";
import { VscGithub } from "react-icons/vsc";
import { BsFiletypeSql } from "react-icons/bs";
import { FaReact, FaNodeJs, FaAws } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { SiSap, SiMicrosoftoffice } from "react-icons/si"

const Skills = () => {
  return (
    <section id="#skills">
      <div className="section main">
        <h2 className="section__title different">Skills</h2>
        <div className={classes.techsection} >
          <div data-aos="flip-left">
            <FaReact />
            <h5>React</h5>
          </div>
          <div data-aos="flip-left">
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div data-aos="flip-left">
            <BsFiletypeSql />
            <h5>MS SQL</h5>
          </div>

          <div data-aos="flip-left">
            <SiPostgresql />
            <h5>PostgreSQL</h5>
          </div>
          <div data-aos="flip-left">
            <DiDotnet />
            <h5>.NET</h5>
          </div>
          <div data-aos="flip-left">
            <SiTypescript />
            <h5>TypeScript</h5>
          </div>
          <div data-aos="flip-left">
            <SiExpress />
            <h5>ExpressJS</h5>
          </div>
          <div data-aos="flip-left">
            <TbApi />
            <h5>WebAPI</h5>
          </div>
          <div data-aos="flip-left">
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div data-aos="flip-left">
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div data-aos="flip-left">
            <DiCss3 />
            <h5>CSS</h5>
          </div>
          <div data-aos="flip-left">
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div data-aos="flip-left">
            <DiScrum />
            <h5>Agile Scrum</h5>
          </div>
          <div data-aos="flip-left">
            <SiJirasoftware />
            <h5>Jira</h5>
          </div>
          <div data-aos="flip-left">
            <SiConfluence />
            <h5>Confluence</h5>
          </div>
          <div data-aos="flip-left">
            <SiSap />
            <h5>ERP-SAP</h5>
          </div>
          <div data-aos="flip-left">
            <FaAws />
            <h5>Cloud</h5>
          </div>
          <div data-aos="flip-left">
            <SiMicrosoftoffice />
            <h5>Microsoft</h5>
          </div>
          {/*
          
         */}
        </div>
      </div>
    </section >
  )
}

export default Skills
