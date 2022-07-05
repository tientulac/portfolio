import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Portfolio = ({ infoProject }) => {
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
          <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
              <hr />
            </div>
          </div>
        </div>


      </div>
    </section></div>
  )
}

export default Portfolio