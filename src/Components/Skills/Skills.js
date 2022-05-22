import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Frontend from "./Frontend";
import TechCard from "./TechCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Backend from "./Backend"
import Database from "./Database"
function Skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
             Some of the<strong className="purple">Tools and Technologies </strong>
             I am skilled at
            </h1>
            <TechCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Backend/>
        <Frontend />
        <Database/>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default Skills;
