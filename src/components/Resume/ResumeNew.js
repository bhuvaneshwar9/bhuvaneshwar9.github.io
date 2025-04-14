import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";

// Import resume PDF if it exists
// If this causes errors, you can comment it out temporarily
import pdf from "../../Assets/resume.pdf";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        {/* Remove PDF viewer temporarily if causing issues */}
        {/* <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={1.7} />
          </Document>
        </Row> */}
        
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h5>DevOps Engineer</h5>
              <h5>Ranvi Technologies, Hyderabad, India</h5>
              <p><em>January 2023 - May 2023</em></p>
              <ul>
                <li>Implemented hardware documentation repository reducing incident resolution time by 15%</li>
                <li>Established automated system update logging ensuring 99.9% uptime</li>
                <li>Conducted client meetings to diagnose hardware issues</li>
              </ul>
            </div>
            <div className="resume-item">
              <h5>Machine Learning Intern</h5>
              <h5>Quantera Analytics Solutions, Hyderabad</h5>
              <p><em>August 2021 - December 2021</em></p>
              <ul>
                <li>Developed CNN models for image classification achieving 92% accuracy</li>
                <li>Designed data preprocessing pipelines improving model generalization</li>
                <li>Applied optimization techniques reducing inference time by 35%</li>
              </ul>
            </div>
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h5>Master of Science in Computer Science</h5>
              <p><em>Texas Tech University, Lubbock, Texas</em></p>
              <p><em>August 2023 - May 2025</em></p>
            </div>
            <div className="resume-item">
              <h5>Bachelor of Technology in Computer Science and Engineering</h5>
              <p><em>Chaitanya Bharathi Institute of Technology, India</em></p>
              <p><em>August 2019 - May 2023</em></p>
            </div>
            <h3 className="resume-title">Certifications</h3>
            <div className="resume-item">
              <ul>
                <li>IBM DevOps Engineering (April 2025)</li>
                <li>Python Programming (August 2021)</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;