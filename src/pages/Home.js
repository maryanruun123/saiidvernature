import React from "react";
import { Container, Carousel, Row, Col, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../img/2.jpg";
import imag from "../img/10.jpg";
import {
  faBriefcase,
  faChartLine,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Carousel className="mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.ifpma.org/wp-content/uploads/2023/03/Featured_image_African_Innovation_for_Inclusive_Healthcare.png"
            alt="Empowering Healthcare Innovation"
          />
          <Carousel.Caption className="bg-dark p-3 rounded">
            <h1 className="display-3 text-white">
              Innovating for Healthier Tomorrows
            </h1>
            <p className="h5 text-white">
              Explore cutting-edge healthcare technologies revolutionizing
              patient care across Africa.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image}
            alt="Building a Healthier Future"
          />
          <Carousel.Caption className="bg-dark p-3 rounded">
            <h1 className="display-3 text-white">
              Building a Healthier Future
            </h1>
            <p className="h5 text-white">Investing in Infrastructure</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/medical-team-hospital-looking-very-happy_396607-96922.jpg"
            alt="Leading with Expertise"
          />
          <Carousel.Caption className="bg-dark p-3 rounded">
            <h1 className="display-3 text-white">Leading with Expertise</h1>
            <p className="h5 text-white">Our Team of Professionals</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Expanded Mission Statement */}
      <Container className="text-center my-5">
        <h2 className="display-4 mb-4">Our Mission</h2>
        <p className="lead mb-4">
          At Saaed Ventures Limited, we aim to revolutionize healthcare in East
          Africa by investing in innovative solutions and infrastructure that
          improve the quality and accessibility of medical services. Our mission
          is rooted in three core principles:
        </p>
        <p className="h5">
          <strong>1. Driving Innovation:</strong> We invest in cutting-edge
          technologies and innovative healthcare solutions that are transforming
          the industry. Our focus is on digital health platforms, telemedicine,
          and medical devices that enhance patient care and outcomes.
        </p>
        <p className="h5">
          <strong>2. Enhancing Accessibility:</strong> Our commitment is to
          bridge healthcare disparities by supporting projects that provide
          essential medical services to underserved and rural communities. We
          believe that everyone deserves access to quality healthcare.
        </p>
        <p className="h5">
          <strong>3. Building a Sustainable Future:</strong> Sustainability is
          central to our mission. We prioritize investments that deliver strong
          financial returns while creating long-term social and environmental
          benefits. Our goal is to leave a legacy of responsible investment that
          supports future generations.
        </p>
        <p className="lead mt-4">
          Join us on our journey to create a healthier, more equitable future
          for all.
        </p>
      </Container>

      {/* Investment Focus Quick Links */}
      <Container className="mb-5">
        <h2 className="display-5 text-center mb-4">Our Investment Focus</h2>
        <Row className="text-center">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  size="4x"
                  className="text-success mb-3"
                />
                <Card.Title className="h4">Portfolio</Card.Title>
                <Card.Text className="h5">
                  Discover our diverse investment portfolio, including
                  healthcare facilities, technological innovations, and
                  community health programs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <FontAwesomeIcon
                  icon={faChartLine}
                  size="4x"
                  className="text-success mb-3"
                />
                <Card.Title className="h4">Case Studies</Card.Title>
                <Card.Text className="h5">
                  Explore detailed case studies of our successful investments,
                  showcasing our impact-driven approach and measurable outcomes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <FontAwesomeIcon
                  icon={faGlobe}
                  size="4x"
                  className="text-success mb-3"
                />
                <Card.Title className="h4">Impact Investments</Card.Title>
                <Card.Text className="h5">
                  Learn about our initiatives focused on sustainable,
                  impact-driven investments that improve healthcare access and
                  quality.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Latest News Snippet */}
      <Container className="mb-5">
        <h2 className="display-5 text-center mb-4">Latest News</h2>
        <Row>
          <Col md={6}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title className="h4">
                  New Healthcare Initiative Launched
                </Card.Title>
                <Card.Text className="h5">
                  We are excited to announce a groundbreaking initiative to
                  enhance healthcare accessibility in rural areas.{" "}
                  <a href="#">Read More</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title className="h4">
                  Partnership with Local Hospitals
                </Card.Title>
                <Card.Text className="h5">
                  Our strategic partnership with local hospitals aims to boost
                  medical resources and services across the region.{" "}
                  <a href="#">Read More</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Investor Testimonials Carousel */}
      <Container className="mb-5">
        <h2 className="display-5 text-center mb-4">Investor Testimonials</h2>
        <Carousel>
          <Carousel.Item>
            <Card className="shadow-sm">
              <Card.Body>
                <blockquote className="blockquote mb-0 h5">
                  <p>
                    "Saaed Ventures has transformed the healthcare landscape in
                    East Africa with their strategic investments."
                  </p>
                  <footer className="blockquote-footer mt-3">Investor A</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="shadow-sm">
              <Card.Body>
                <blockquote className="blockquote mb-0 h5">
                  <p>
                    "Their commitment to sustainable impact is truly
                    remarkable."
                  </p>
                  <footer className="blockquote-footer mt-3">Investor B</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="shadow-sm">
              <Card.Body>
                <blockquote className="blockquote mb-0 h5">
                  <p>
                    "A reliable partner with a visionary approach to healthcare
                    investment."
                  </p>
                  <footer className="blockquote-footer mt-3">Investor C</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Call to Action */}
      <Container className="text-center mb-5">
        <Button variant="success" size="lg" className="px-5 py-3 h4">
          Explore Investment Opportunities
        </Button>
      </Container>
    </div>
  );
}

export default Home;
