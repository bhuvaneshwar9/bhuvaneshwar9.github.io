// Home2.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> LET ME INTRODUCE MYSELF</span> 
            </h1>
            <p className="home-about-body" style={{color: "black"}}>
             <b style={{color: "black"}}></b>My journey with programming has been a fascinating adventure of continuous growth and discovery.
            <br />
            <br />
            I've developed strong proficiency in powerful languages including 
            <i>
            <b className="purple"> Python, Java, and TypeScript. </b>
            </i>
            <br />
            <br />
            My professional passion centers around creating innovative 
            <i>
          <b className="purple">Machine Learning solutions and Cloud-native applications</b>, with particular expertise in
          <b className="purple"> cyber-physical system security and quantum computing applications</b>.
          </i>
          <br />
          <br />
            I apply my technical skills to deliver measurable results, including 
          <b className="purple">ML-powered vulnerability detection systems</b> and
          <i>
            <b className="purple"> quantum machine learning models</b>
          </i>
          &nbsp; that exceed conventional benchmarks by
          <i>
        <b className="purple"> 15-40% in performance metrics</b>
          </i>
        </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bhuvaneshwar9"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/kalki45491"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bhuvaneswarreddyv/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ amrutheya "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

