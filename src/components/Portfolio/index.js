import React from 'react'; 
//import ProjectCards from '../../components/Project'
import 'bootstrap/dist/css/bootstrap.min.css';



function Portfolio () {  

    return (
      <section id="my-work" class="my-work">
      <div class="title">
          <h2>My Work</h2>
      </div>
      <section class="container-grid-wrapper">
          <section class="container-grid">
              
              <a href="https://diegoserve.github.io/run-buddy/" class="grid-box run-buddy">
                  <div class="project-label">
                      <h3>Run Buddy</h3>
                      <p>HTML/CSS</p>
                  </div>
              </a>
              
              <a href="https://github.com/DiegoServe/cat-adoption-blog" class="grid-box cat-shack">
                  <div class="project-label">
                      <h3>The Cat Shack</h3>
                      <p>HTML/CSS/Javascript/Handlebars</p>
                  </div>
              </a>

              <a href="https://github.com/DiegoServe/robot-gladiators" class="grid-box robot-gladiators">
                  <div class="project-label">
                      <h3>Robot Gladiators</h3>
                      <p>Javascript</p>
                  </div>
              </a>

              <a href="https://diegoserve.github.io/work-day-scheduler/" class="grid-box workday-scheduler">
                  <div class="project-label">
                      <h3>Workday Scheduler</h3>
                      <p>Javascript/Moment.js</p>
                  </div>
              </a>

                
              <a href="https://diegoserve.github.io/weather-dashboard/" class="grid-box weather-dashboard">
                  <div class="project-label">
                      <h3>Weather Dashboard</h3>
                      <p>Javascript/API</p>
                  </div>
              </a>
              
          </section>
      </section>
  </section>
  )
}

export default Portfolio;