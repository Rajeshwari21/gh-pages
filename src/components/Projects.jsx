import React, { Component } from "react";
import sonymax2 from "../components/images/sony_max2.jpeg";
import nestle from "../components/images/nestle.jpeg";
import hm from "../components/images/hospital_management.jpeg";
import bayer from "../components/images/bayer.jpeg";
import cypress from "../components/images/cypress.jpeg";


class Projects extends Component {
  render() {
    return (
      <section className="projects">
        <h1 id="Portfolio">Projects</h1>
        <p>Some of the projects done by me.</p>

        <div className="container">
          <a href="https://www.claritin.com/">
            <img src={bayer} width="200" height="200" alt="" title="Bayer" />
            <p>Bayer Consumer end</p>
          </a>
          <a href="https://www.sonymax2.tv/">
            <img
              src={sonymax2}
              width="200"
              height="200"
              alt=""
              title="Sonymax2"
            />
            <p>Sonymax2 entertainment platform</p>
          </a>
          <a href="https://www.nestle.com/jobs">
            <img src={nestle} width="200" height="200" alt="" title="Nestle" />
            <p>Nestle jobs portal</p>
          </a>
          <a
            href="https://github.com/Rajeshwari21/hospital-checkin"
          >
            <img
              src={hm}
              width="200"
              height="200"
              alt=""
              title="Hospital checkin"
            />
            <p>A hospital checkin system</p>
          </a>
          <a href="https://secure.cypress.com/cart">
            <img
              src={cypress}
              width="200"
              height="200"
              alt=""
              title="Cypress"
            />
            <p>Cypress shopping platform.</p>
          </a>
        </div>
      </section>
    );
  }
}

export default Projects;