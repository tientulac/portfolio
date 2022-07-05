import React, { useEffect, useState } from 'react';

const Skill = ({ skill }) => {
  return (
    <div>
      <section id="skills" className="skills section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
          <div className="col-lg-12 pt-4 pt-lg-0 content" >
            <div className="row">
            <div className="col-lg-6">
                <h5>Language</h5>
                <ul>
                  <li style={{ listStyleType: "none" }}><i className="bi bi-chevron-right"></i> <strong>BackEnd : .NET, Java, Nodejs, PHP</strong></li>
                  <li style={{ listStyleType: "none" }}><i className="bi bi-chevron-right"></i> <strong>FrontEnd : Angular</strong></li>
                </ul>
                <h5>Database</h5>
                <ul>
                  <li style={{ listStyleType: "none" }}><i className="bi bi-chevron-right"></i> <strong>Relational : MSSQL, MySQL</strong></li>
                  <li style={{ listStyleType: "none" }}><i className="bi bi-chevron-right"></i> <strong>Non-Relational : MongoDB</strong></li>
                </ul>
                <h5>SCM</h5>
                <ul>
                  <li style={{ listStyleType: "none" }}><i className="bi bi-chevron-right"></i> <strong>Git, Github ,GitLab</strong></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h5>Library</h5>
                <ul>
                  <li style={{ listStyleType: "none" }}><i className="bi bi-chevron-right"></i> <strong>Jquery, Rxjs</strong></li>
                </ul>
                <h5>Web framework</h5>
                <ul>
                  <li style={{ listStyleType: "none" }}><i className="bi bi-chevron-right"></i> <strong>Express, Laravel</strong></li>
                </ul>
                <h5>Process</h5>
                <ul>
                  <li style={{ listStyleType: "none" }}><i className="bi bi-chevron-right"></i> <strong>Align Scrum, 4 steps</strong></li>
                </ul>
              </div>
            </div>
          </div>



          {/* </div> */}

          {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

          <div className="progress">
            <span className="skill">PHP <i className="val">80%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">WordPress/CMS <i className="val">90%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className="progress">
            <span className="skill">Photoshop <i className="val">55%</i></span>
            <div className="progress-bar-wrap">
              <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div> */}

        </div >

      </section >
    </div >
  )
}

export default Skill