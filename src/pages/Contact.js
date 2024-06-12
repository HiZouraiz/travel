import React, { useState, useContext } from "react";
import "../styles/home.css";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import "../styles/contact.css";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Contact = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    setCredentials({
      name: "",
      email: "",
      message: "",
    });

    Swal.fire({
      title: "Success!",

      text: `We received your information we will contact you ASAP.`,

      icon: "success",

      customClass: {
        confirmButton: "alertOkButton",
      },
    });
  };

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto">
              <div className="login__form">
                <h2>Contact Us</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type="text"
                      placeholder="Name"
                      id="name"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      style={{ height: 100 }}
                      type="text"
                      placeholder="message"
                      id="message"
                      multiple={true}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <Button
                    className="btn secondary__btn auth__btn"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
            <Col lg="6">
              <div className="hero__content">
                <h1>Reach Out to CustomPack Travels</h1>
                <p>
                  Got questions or ready to plan your next adventure? React out
                  to use! Our team at CustomPack Travels is here to help you
                  turn your travel dreams into reality. Contact us now for
                  personalized assistance and start your journey today!
                </p>

                <ListGroup className="footer__quick-links">
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <span>
                        <i class="ri-map-pin-line"></i>
                      </span>
                    </h6>
                    <p className="mb-0">101-Canal View, Lahore</p>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <span>
                        <i class="ri-mail-line"></i>
                      </span>
                    </h6>

                    <p className="mb-0">info@Custompacktravels.com</p>
                  </ListGroupItem>

                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                    <h6 className="mb-0 d-flex align-items-center gap-2">
                      <span>
                        <i class="ri-phone-fill"></i>
                      </span>
                    </h6>

                    <p className="mb-0">(042)-35248383</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============================================================== */}
    </>
  );
};

export default Contact;
