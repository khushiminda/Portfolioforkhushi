import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">KHUSHI MINDA </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            
            <br />
            I am pursuing BTech (ECE) in Electronics and Communications at MAIT.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Debating
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Focus on the boring stuff👁️!"{" "}
          </p>
          <footer className="blockquote-footer">Khushi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
