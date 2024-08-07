import React from "react";
import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="py-5">
      {/* Our Story */}
      <Row className="mb-5">
        <Col>
          <h2
            className="text-center mb-4"
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Our Story
          </h2>
          <p
            className="text-center mx-auto"
            style={{
              maxWidth: "800px",
              fontFamily: "Arial, sans-serif",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Founded in 2005, Saaed Ventures Limited was established with a
            vision to transform healthcare in East Africa. Our founder, Dr.
            Sarah Mwangi, identified a critical need for improved healthcare
            services and infrastructure in the region. With a commitment to
            innovation and excellence, Saaed Ventures was launched as a catalyst
            for positive change.
          </p>
          <p
            className="text-center mx-auto"
            style={{
              maxWidth: "800px",
              fontFamily: "Arial, sans-serif",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Our journey began with the launch of the first comprehensive
            healthcare network in Nairobi, which quickly expanded to include
            numerous facilities across Kenya and neighboring countries. We have
            achieved significant milestones, including partnerships with leading
            healthcare providers and technological innovators.
          </p>
          <p
            className="text-center mx-auto"
            style={{
              maxWidth: "800px",
              fontFamily: "Arial, sans-serif",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Over the years, Saaed Ventures has grown into a leading healthcare
            investment firm, focusing on projects that enhance healthcare
            delivery and accessibility. Our dedication to building a healthier
            future has earned us recognition and awards for our contributions to
            the community and the healthcare industry.
          </p>
          <p
            className="text-center mx-auto"
            style={{
              maxWidth: "800px",
              fontFamily: "Arial, sans-serif",
              fontSize: "1.25rem",
              lineHeight: "1.6",
            }}
          >
            Today, we continue to drive impact through strategic investments and
            partnerships, fostering a future where quality healthcare is
            accessible to all. Our story is one of perseverance, growth, and an
            unwavering commitment to excellence.
          </p>
        </Col>
      </Row>

      {/* Mission and Vision Statements */}
      <Row className="mb-5">
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-lg border-0">
            <Card.Header
              className="bg-primary text-white text-center"
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Mission Statement
            </Card.Header>
            <Card.Body>
              <Card.Text
                className="text-center"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "1.125rem",
                  lineHeight: "1.6",
                }}
              >
                Our mission is to be a transformative force in healthcare
                innovation across East Africa. We are dedicated to improving
                lives by investing in high-potential healthcare infrastructure
                and services, delivering sustainable impacts alongside
                meaningful financial returns.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow-lg border-0">
            <Card.Header
              className="bg-primary text-white text-center"
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Vision Statement
            </Card.Header>
            <Card.Body>
              <Card.Text
                className="text-center"
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "1.125rem",
                  lineHeight: "1.6",
                }}
              >
                Our vision is to lead the advancement of healthcare excellence
                across Africa, setting benchmarks for quality and building
                resilient, healthier communities empowered by innovation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Core Values */}
      <Row className="mb-5">
        <Col>
          <h3
            className="text-center mb-4"
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Core Values
          </h3>
          <ListGroup horizontal className="justify-content-center flex-wrap">
            <ListGroup.Item
              className="border-0 px-4 py-2"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "1.125rem" }}
            >
              Integrity
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 px-4 py-2"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "1.125rem" }}
            >
              Innovation
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 px-4 py-2"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "1.125rem" }}
            >
              Community
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 px-4 py-2"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "1.125rem" }}
            >
              Sustainability
            </ListGroup.Item>
            <ListGroup.Item
              className="border-0 px-4 py-2"
              style={{ fontFamily: "Arial, sans-serif", fontSize: "1.125rem" }}
            >
              Excellence
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      {/* Meet the Team */}
      <Row className="mb-5">
        <Col>
          <h3
            className="text-center mb-4"
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Meet the Team
          </h3>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-lg border-0">
                <Image
                  src="https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dr. Sarah Mwangi"
                  className="rounded-circle mx-auto mt-3"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    className="text-center mt-3"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                      fontSize: "1.25rem",
                    }}
                  >
                    Dr. Sarah Mwangi
                  </Card.Title>
                  <Card.Text
                    className="text-center"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "1.125rem",
                      lineHeight: "1.6",
                    }}
                  >
                    Dr. Mwangi is the CEO and founder of Saaed Ventures, with
                    over 25 years of experience in healthcare management and
                    innovation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-lg border-0">
                <Image
                  src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="John Doe"
                  className="rounded-circle mx-auto mt-3"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    className="text-center mt-3"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                      fontSize: "1.25rem",
                    }}
                  >
                    John Doe
                  </Card.Title>
                  <Card.Text
                    className="text-center"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "1.125rem",
                      lineHeight: "1.6",
                    }}
                  >
                    John is the Chief Operations Officer, overseeing the
                    strategic and operational aspects of our healthcare
                    projects.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-lg border-0">
                <Image
                  src="https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Jane Smith"
                  className="rounded-circle mx-auto mt-3"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    className="text-center mt-3"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "bold",
                      fontSize: "1.25rem",
                    }}
                  >
                    Jane Smith
                  </Card.Title>
                  <Card.Text
                    className="text-center"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: "1.125rem",
                      lineHeight: "1.6",
                    }}
                  >
                    Jane leads our Research and Development department, driving
                    innovative solutions to improve healthcare outcomes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
