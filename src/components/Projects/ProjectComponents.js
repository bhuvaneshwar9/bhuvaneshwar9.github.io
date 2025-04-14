// Create a new file named "ProjectsComponent.js" in your components/Projects folder
// with this content:

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quantum from "../../Assets/Projects/quantum.png";
import cps from "../../Assets/Projects/cps.png";
import crypto from "../../Assets/Projects/crypto.png";

function ProjectComponents() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quantum}
              isBlog={false}
              title="Quantum ML for SUSY Classification"
              description="Engineered quantum ML system for classifying supersymmetric particles, achieving ROC AUC scores of 0.70—exceeding classical benchmarks by 15%. Created interactive dashboard visualizing performance metrics across different quantum configurations."
              ghLink="https://github.com/bhuvaneshwar9/Quantum-learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cps}
              isBlog={false}
              title="Vulnerability Assessment on CPS"
              description="Developed ML-powered vulnerability detection system with 90% accuracy—40% higher than traditional systems. Implemented anomaly detection for zero-day threats, reducing false positives by 35%."
              ghLink="https://github.com/bhuvaneshwar9/Averex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Averex - Cryptocurrency Exchange"
              description="Built cryptocurrency platform with secure transactions and KYC verification, increasing trading volume by 40%. Implemented real-time price tracking and comprehensive security measures processing 2M+ transactions."
              ghLink="https://github.com/bhuvaneshwar9/Vulnerability-detection-on-cyber-physical-system"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectComponents;