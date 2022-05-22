import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiVisualstudiocode,
	SiPostman,
	SiHeroku,
	SiGithub,
	SiGit
} from "react-icons/si";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
		 		<strong className="purple">Other Tools</strong>
	   		</h1>
			<Col xs={4} md={2} className="tech-icons">
				<SiGit />
				<p>Git</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGithub />
				<p>Github</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
				<p>Postman</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiHeroku />
				<p>Heroku</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
				<p>VS Code</p>
			</Col>
		</Row>
	);
}

export default Toolstack;
