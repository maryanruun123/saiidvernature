import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const HospitalServices = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5 text-primary">Hospital Services</h2>

      {/* Departments and Treatments */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-primary fs-3">
                Departments and Available Treatments
              </Card.Title>
              <div className="fs-5">
                We offer specialized care in various departments, providing a
                wide range of treatments:
                <ul>
                  <li>Cardiology: Heart disease treatment and prevention</li>
                  <li>
                    Orthopedics: Joint replacement and sports injury management
                  </li>
                  <li>Neurology: Treatment of neurological disorders</li>
                  <li>Pediatrics: Comprehensive child healthcare</li>
                  <li>Maternity Care: Prenatal and postnatal care</li>
                  <li>Oncology: Cancer treatment and support</li>
                  <li>
                    General Surgery: A wide range of surgical interventions
                  </li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Facilities Information */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-primary fs-3">
                Our Facilities
              </Card.Title>
              <div className="fs-5">
                Our hospital features state-of-the-art facilities designed to
                provide exceptional patient care:
                <ul>
                  <li>Inpatient and outpatient services</li>
                  <li>Emergency services with rapid response capabilities</li>
                  <li>Advanced diagnostic imaging and laboratory services</li>
                  <li>Comprehensive rehabilitation programs</li>
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Patient Testimonials */}
      <Row>
        <Col>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-primary fs-3">
                Patient Testimonials and Success Stories
              </Card.Title>
              <div className="fs-5">
                Hear directly from our patients about their experiences at our
                hospital:
                <div className="my-3">
                  <p className="mb-0">
                    "I received excellent care at the cardiology department. The
                    staff's expertise and attention to detail were crucial to my
                    recovery."
                  </p>
                  <footer className="blockquote-footer mt-2">
                    Jane Doe, Cardiology Patient
                  </footer>
                </div>
                <div className="my-3">
                  <p className="mb-0">
                    "The maternity services provided a comforting and safe
                    delivery experience. I am grateful for the professional
                    care."
                  </p>
                  <footer className="blockquote-footer mt-2">
                    Emily Tran, Maternity Patient
                  </footer>
                </div>
                <div className="my-3">
                  <p className="mb-0">
                    "Recovery after my knee surgery was smoother than I
                    anticipated, thanks to the attentive care and advanced
                    facilities."
                  </p>
                  <footer className="blockquote-footer mt-2">
                    Mark Benson, Orthopedics Patient
                  </footer>
                </div>
                <div className="my-3">
                  <p className="mb-0">
                    "My treatment for breast cancer at Saaed Ventures was
                    managed with great sensitivity and professionalism."
                  </p>
                  <footer className="blockquote-footer mt-2">
                    Lisa Hamilton, Oncology Patient
                  </footer>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HospitalServices;
