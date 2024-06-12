import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subcribe now to get useful traveling information</h2>

              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter__btn">Subcribe</button>
              </div>
              <p>
                Subscribe now to unlock a world of invaluable travel insights
                and tips delivered directly to your inbox. From insider
                destination guides to expert packing hacks, our newsletter is
                your passport to seamless journeys and unforgettable adventures.
                Don't miss out on the latest trends and exclusive offers – join
                our community of fellow travelers today!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
