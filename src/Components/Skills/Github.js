import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
       My Github <strong className="purple">Contributions</strong>
      </h1>
      <GitHubCalendar
        username="AhmedAli9991"
        blockSize={15}
        blockMargin={5}
        
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
