import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [validated, setValidated] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    
    if (formElement.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);
    setLoading(true);
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_e0jrf3p', // Replace with your EmailJS service ID
      'template_5eqpqmn', // Replace with your EmailJS template ID
      form.current,
      'UHFd1RFOKdMlPpsVv' // Replace with your EmailJS public key
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setValidated(false);
        setLoading(false);
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text);
        setSubmitStatus("error");
        setLoading(false);
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      });
  };

  return (
    <Container fluid className="contact-section" id="contact">
      <Container>
        <h1 className="project-heading">
          Get In <strong className="purple">Touch</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "40px" }}>
          Feel free to contact me for opportunities or just to say hello!
        </p>
        
        <Row className="contact-content">
          <Col md={5} className="contact-info">
            <div className="contact-card">
              <div className="contact-card-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Dallas, TX</p>
                </div>
              </div>
              
              <div className="contact-card-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>bhuvaneshwarreddy7@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-card-item">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+1 (806)-702-1833</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col md={7} className="contact-form">
            <div className="form-container">
              <Form ref={form} noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="contactForm.Name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    required 
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="contactForm.Email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    required 
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-4" controlId="contactForm.Message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    placeholder="Type your message here" 
                    required 
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a message.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit"
                  className="contact-submit-btn"
                  disabled={loading || submitStatus === "success"}
                >
                  {loading ? "Sending..." : 
                   submitStatus === "success" ? "Message Sent!" : 
                   "Send Message"}
                </Button>
                
                {submitStatus === "success" && (
                  <div className="text-success mt-3">
                    Your message has been sent successfully!
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="text-danger mt-3">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;