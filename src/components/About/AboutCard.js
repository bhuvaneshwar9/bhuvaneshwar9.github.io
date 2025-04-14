import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bhuvaneswar reddy vangimalla </span>
            from <span className="purple"> Dallas,TX</span>
           
            I have completed masters in texas tech university
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Therapist
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Believe Yourself"{" "}
          </p>
          <footer className="blockquote-footer">Bhuvaneswar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;