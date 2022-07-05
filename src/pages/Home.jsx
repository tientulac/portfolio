import React from 'react'
import About from "./About";
import Fact from "./Fact";
import Skill from "./Skill";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import SoftSkill from './SoftSkill';
import information from '../information/information.json'

const Home = ({ info, skill, resume, infoProject, softSkill }) => {
  // console.log(info);
  return (
    <div >
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center" style={{
        backgroundImage: `url(${info?.image})`
      }}>
        <div className="hero-container">
          <h1>{information?.full_name}</h1>
          <p>{information?.slogan}</p>
        </div>
      </section>
      <About info={info} information={information} />
      {/* <Fact /> */}
      <Skill skill={skill} />
      <SoftSkill softSkill={softSkill} />
      <Resume resume={resume} />
      <Portfolio infoProject={infoProject} />
      {/* <Testimonials /> */}
      <Contact info={info} />
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </div>
  )
}

export default Home