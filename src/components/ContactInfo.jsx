import React, { Component } from "react";
import contact from "../components/images/contactlogo.png";
import mailme from "../components/images/mailme.png";

class ContactInfo extends Component {
  render() {
    return (
      <section className="container-1">
        <img
          id="contactimg"
          src={contact}
          width="180"
          height="180"
          alt="contactlogo"
        />
        <h3>
          {" "}
          <strong>Rajeshwari Variar</strong>
        </h3>
        <h4>Email Id: variar.rajeshwari@gmail.com</h4>
        <a
          id="mail"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=variar.rajeshwari@gmail.com"
        >
          <img id="mailmelogo" src={mailme} alt="mail me" />
          Click Here To Send Mail
        </a>
        <h4>Contant Info: (+1)669-213-7659</h4>
        <a href="https://github.com/Rajeshwari21/">
          <span
            className="icon fa fa-github"
            style={{ color: "antiquewhite" }}
          ></span>
        </a>
        <a href="https://www.linkedin.com/in/rajeshwari-variar-93721458/">
          <span
            className="icon fa fa-linkedin-square"
            style={{ color: "antiquewhite" }}
          ></span>
        </a>
      </section>
    );
  }
}

export default ContactInfo;
