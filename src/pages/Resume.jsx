import React from 'react'

const Resume = ({resume}) => {
  // console.log(resume);  
  return (
    <div> <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6" >
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>HNUE (Hanoi National University of Education)</h4>
              <h5>2018 - 2022</h5>
              <p>Major: Math - IT</p>
              <p style={{color: "red",fontWeight: "bold"}}>Graduated</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6" >
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>FPT Aptech Ha Noi</h4>
              <h5>2020 - 2022</h5>
              <ul>
                <li>Sem1: HTML, CSS, Nodejs, MSSQL</li>
                <li>Sem2: Java, PHP Laravel</li>
                <li>Sem3: C#</li>
                <li>Sem4: Android, Java Spring boot</li>
              </ul>
              <p style={{color: "red",fontWeight: "bold"}}>Graduated</p>
            </div>
          </div>
        </div>

      </div>
    </section></div>
  )
}

export default Resume