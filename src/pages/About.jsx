import React from 'react'

const About = ({info, information }) => {
  return (
    <div>        
      <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p style={{ "fontSize": "24px", "fontWeight": "500" }}>Career goals</p>
          <p>{information?.career_goals}</p>

        </div>

        <div className="row">
          <div className="col-lg-4" >
            <img src='../src/assets/img/imagecv.jpg' className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" >
            <h3>{information?.department}</h3>
            <p className="fst-italic">
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{information?.birth}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong><span>22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Gender:</strong><span>Femail</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>{information?.email}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{information?.phone}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Country:</strong> <span>{information?.country}</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{information?.degree}</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i><strong>Education:</strong></li>
                  <li><strong>1. {information?.education_1.name}</strong></li>
                  <li>- From: {information?.education_1.from_to}</li>
                  <li>- Major: {information?.education_1.major}</li>
                  <li><strong>2. {information?.education_2.name}</strong></li>
                  <li>- From: {information?.education_2.from_to}</li>
                  <li>- Major: {information?.education_2.major}</li>
                </ul>
              </div>
            </div>
            {/* <p>
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p> */}
          </div>
        </div>

      </div>
    </section></div>
  )
}

export default About