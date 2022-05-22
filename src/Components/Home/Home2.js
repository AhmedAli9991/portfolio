import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import EmailIcon from "@mui/icons-material/Email";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a FulStack Developer from Pakistan. I have always been passionate about problem solving 
              which eventually led me into Computer Science also a certified Otaku who loves
              <i>
                <b className="purple"> anime and manga </b>
              </i>
              <br />
              My field of Interest's are
              <i>
                <b className="purple"> FullStack Web development and Data Science </b>
              </i>
              <br />
              Whenever possible, I like to apply my passion to real world probelms 
              my favorite  <b className="purple">Backend Frameworks </b> are 
              <i> <b className="purple">FastAPI, Node.js and Express  </b>  </i>
               and for <b className="purple"> Frontend </b> 
                I like
              <i>
                <b className="purple"> React and Angular </b>
              </i>
              Currently a Student at Comsats University Islamabad but have hopes of having an impact 
              on the tech world 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              Feel free to <span className="purple"> Connect </span> with me
            </h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AhmedAli9991"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:ahmedalibalti2000@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <EmailIcon />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmed-ali-a8b415215/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              <a
                  href="https://stackoverflow.com/users/18118585/ahmed-ali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaStackOverflow />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
