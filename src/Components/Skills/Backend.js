import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJsBadge, DiPython, DiNodejs,DiGo } from "react-icons/di";
import { SiFastapi,SiExpress} from "react-icons/si";

function Backend() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
		 <strong className="purple">Backend Technologies</strong>
	   </h1>
			<Col xs={4} md={2} className="tech-icons">
				<DiJsBadge />
				<p>JavaScript</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPython/>
				<p>Python</p>
			</Col>
            <Col xs={4} md={2} className="tech-icons">
				<DiGo/>
				<p>Go</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
				<p>Node js</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFastapi />
				<p>FastAPI</p>
			</Col><Col xs={4} md={2} className="tech-icons">
				<SiExpress />
				<p>Express</p>
			</Col>
		</Row>
	);
}

export default Backend;
