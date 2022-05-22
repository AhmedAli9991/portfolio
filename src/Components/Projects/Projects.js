import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictac from "../../Assets/Projects/TIC-TAC-TOE.png";
import CVS from "../../Assets/Projects/CVS.png";
import Version from "../../Assets/Projects/Version.png";
import Blog from "../../Assets/Projects/Blog.png";
import Expenses from "../../Assets/Projects/Expenses.png";
import Doctor from "../../Assets/Projects/Doctor.png";
import Covid from "../../Assets/Projects/Covid.jpeg";
import Task from "../../Assets/Projects/Task.png";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					Some of my <strong className="purple">Projects </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on.
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={CVS}
							title="Centralized Version Control System"
							description="this project manages various documents a user 
							creates as repositories user can make versions and also add
							other users as collaborators in the project it has been made using the MERN stack"
							techstack="React | Express | Nodejs | MongoDB"
							git="https://github.com/AhmedAli9991/Document-CVS-Centralized-Verion-Control-System-Full-stack-APP"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Blog}
							title="Blog Creator"
							description="This is a complete blog creation App which user can use to build blogs after
							 they register and other can also vist and view the blog"
							techstack="React | FastAPI | MongoDB | ChakraUI"
							git="https://github.com/AhmedAli9991/Blog-Creator-Fullstack-Application"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Expenses}
							title="Expense Tracker"
							description="Transactions and budgeting web app which helps users manage their expenses 
							and predict what there expense will be if they follow same trend users must make an account on the 
							Appto use it"
							techstack="React | FastAPI | Postgres"
							git="https://github.com/AhmedAli9991/Expense-Tracker-App"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Version}
							title="Simple Version Control"
							description="This is a FullStack Simple Version Control application made using the MERN stack"
							techstack="React | Express | Nodejs | MongoDB"
							git="https://github.com/AhmedAli9991/Version-Control-Fullstack-APP"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Doctor}
							title="Doctor Apointments"
							description="this is a an App for Patients and doctors Admin registers doctors
							and user registers himself the user can then book appointments and reschedule or remove 
							appointments himself the app manages the doctors Schedule"
							techstack="HTML | CSS | Laravel | MySQL"
							git="https://github.com/AhmedAli9991/Doctor-Appointment-Web-App"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Task}
							title="Task Manager"
							description="this is a task manager app made using the MERN stack it
							 manages tasks of multiple users and authenticates them using JWTs one version was built with React 
							 and an other was built with Angular as frontend"
							techstack="React/Angular | Express | Nodejs | MongoDB"
							git="https://github.com/AhmedAli9991/Task-manager"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Covid}
							title="CovidApp"
							description="A simple App which Tracks take cases of covid 19 Globally an for individual 
							countries it uses third party Api."
							techstack="React Native"
							git="https://github.com/AhmedAli9991/Covid-APP-React-Native"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={tictac}
							title="Tic Tac Toe"
							description="A simple game where two players can play TIC TAC TOE 
							and get the winner or draw."
							techstack="React Native"
							git="https://github.com/AhmedAli9991/TicTacToe-ReactNative"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
