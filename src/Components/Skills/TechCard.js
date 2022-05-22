import React from "react";
import Card from "react-bootstrap/Card";
import MovieIcon from "@mui/icons-material/Movie";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
function TechCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Below are some of the <span className="purple">Tools and Technologies </span>
            I'm skilled with I am always <span className="purple"> open to learn </span>
            <span className="purple"> New Technologies and Expand my current skillset </span>
            I have always found that I pick up stuff quickly I am a pretty <span className="purple"> 
            Quick Learner </span> I am always open to learn new stuff and tackle new probelms
            
          </p>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Learning is a Treasure that will follow it's owner everywhere!"{" "}
          </p>
          <br />
          <footer className="blockquote-footer"> Chineese Proverb</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default TechCard;
