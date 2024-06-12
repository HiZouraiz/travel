import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: `Calculate Weather`,
    desc: `Plan your adventures with confidence using our intuitive weather calculation tool, ensuring you're always prepared for the elements wherever your travels take you.`,
  },
  {
    imgUrl: guideImg,
    title: `Best Tour Guide`,
    desc: `Discover the difference a seasoned tour guide makes as they unveil hidden gems and enrich your travel experience with their expertise and local insights.`,
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: `Empower your journey by customizing every detail to match your unique preferences, making each trip a reflection of your individual style and desires.`,
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
