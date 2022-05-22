import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiMongodb, DiPostgresql, DiRedis} from "react-icons/di";
import { SiFirebase,SiMysql} from "react-icons/si";

function Backend() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
		<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
		 <strong className="purple">Databases</strong>
	   </h1>
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
				<p>MongoDB</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPostgresql/>
				<p>Postgres</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMysql />
				<p>My SQL</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
				<p>Firebase</p>
			</Col><Col xs={4} md={2} className="tech-icons">
				<DiRedis />
				<p>Redis</p>
			</Col>
		</Row>
	);
}

export default Backend;
