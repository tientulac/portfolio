import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Portfolio = ({ infoProject, experience }) => {
  // console.log(infoProject);
  return (
    <div><section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
        </div>
        <div className="row">
          <div className="col-lg-12" >
          <div className="resume-item">
          {experience?.map((ex) => (
            <div className="resume-item">
              <h4 style={{fontWeight:"bold",color:"red"}}>{ex.name}</h4>
              <h5>{ex.from_to}</h5>
              <h6>TECH</h6>
              <p>Backend: {ex.tech.backend}</p>
              <p>Frontend: {ex.tech.frontend}</p>
              <p>Database: {ex.tech.database}</p>
              <p>process: {ex.tech.process}</p>
              <p>Design Pattern: {ex.tech.design_pattern}</p>
              <p>Cache: {ex.tech.cache}</p>
              <p>Design: {ex.tech.design}</p>
              <h6 style={{fontWeight: "bold",textAlign:"center"}}>-----PROJECT-----</h6>
              {ex.project.map(
                (pr) => (
                  <div>
                    <p style={{fontWeight: "bold"}}>{pr.name}</p>
                    <p>- Description: </p>
                    <p>{pr.description}</p>
                    <p>- Participants: {pr.group}</p>
                    <p>- Type: {pr.type}</p>
                    <p>- Job: {pr.role_participate}</p>
                  </div>
              ))}
            </div>
          ))}
          </div>
        </div>
      </div>


      </div>
    </section></div>
  )
}

export default Portfolio