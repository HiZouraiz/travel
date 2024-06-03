import React from "react";
import "../styles/home.css";
import { Container, Row, Col, CardSubtitle } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";

const About = () => {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <h1>
                  About <span className="hightlight"> US</span>
                </h1>
                <p>
                  Welcome to CustomPack Travels, where every journey is a unique
                  as you are. CustomPack Travels has been redefining the travel
                  experience by specializing in personalized packages that cater
                  to the individual preferences and desires of each traveler.
                  Our mission is to create unforgettable journeys that not only
                  meet but exceed the expectations of our clients, providing
                  them with unparalleled experiences that resonatge long after
                  the trip ends.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============================================================== */}
    </>
  );
};

export default About;
