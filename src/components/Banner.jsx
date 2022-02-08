import React, { Component } from "react";
import logo from "../components/images/profile_image.png";

class Banner extends Component {
  render() {
    return (
      <section className="container-banner">
        <a href="#home">
          <img
            id="profilepic"
            src={logo}
            width="170"
            height="170"
            alt="profilepic"
          />
        </a>
        <h1> Hi! I'm Rajeshwari Variar </h1>
        <p id="paragarph1">SOFTWARE ENGINEER</p>
      </section>
    );
  }
}

export default Banner;
