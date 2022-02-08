import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Banner />
      <br />
      <AboutMe />
      <br />
      <hr />
      <h1 className="skillheader">My Skills</h1>
      <hr />
      <Skills />
      <hr />
      <h1 className="workexperience">Work Experience</h1>
      <hr />
      <WorkExperience />
      <hr />
      <Projects />
      <hr />
      <h1 id="contactnav" className="contact">
        Contact Information
      </h1>
      <hr />
      <ContactInfo />
    </div>
  );
}

export default App;
