import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I'm <span className="purple">Marco Antonio </span>
            from <span className="purple"> São Paulo, Brazil.</span>
            <br />
            I am a Full Stack Developer with a passion for technology and problem-solving.
            <br />
            I’m currently focused on building solutions in various areas, including full-stack development, machine learning  and database management, .
            <br/>
            I am a graduate of FIAP.
            <br />
            Throughout my journey, I've gained solid expertise in:
          </p>
          <ul>
          <li className="about-activity">
              <ImPointRight /> Backend and frontend development (Flask, Django, Spring Boot, React, Asp.Net)
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> Database design and implementation (MySQL, Oracle, SQL Server, PostgreSQL)
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> Data analysis and machine learning (Python, Pandas, Scikit-Learn)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
