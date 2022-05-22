import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJsBadge, DiReact, DiAngularSimple, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiRedux } from "react-icons/si";

function Frontend() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
		 <strong className="purple">Frontend Technologies</strong>
	   </h1>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
				<p>React</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiAngularSimple />
				<p>Angular</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiHtml5 />
				<p>HTML</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiCss3 />
				<p>CSS</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJsBadge />
				<p>JavaScript</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRedux />
				<p>Redux</p>
			</Col>
		</Row>
	);
}

export default Frontend;
