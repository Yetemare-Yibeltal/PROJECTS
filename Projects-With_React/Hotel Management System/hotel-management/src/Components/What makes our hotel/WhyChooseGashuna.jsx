import React from "react";
import "../What makes our hotel/WhyChooseGashuna.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faGlobe } from "@fortawesome/free-solid-svg-icons";

function WhyChooseGashuna() {
const serviceData = [
  {
    icon: <FontAwesomeIcon icon={faWifi} />,
    title: "Comfortable Rooms",
    description:
      "Modern, clean and peaceful spaces designed for your ultimate relaxation",
  },
  {
    icon: <FontAwesomeIcon icon={faWifi} />,
    title: "Complementary Wifi",
    description: "Stay connected with strong and high-speed Wifi",
  },
  {
    icon: <FontAwesomeIcon icon={faGlobe} />,
    title: "24 hours Dedicated Service",
    description:
      "Our friendly and professional team is always available to assist you.",
  },
  {
    icon: <FontAwesomeIcon icon={faWifi} />,
    title: "Authentic Ethiopian Cuisine",
    description:
      "Savor delicious local dishes prepared with fresh, traditional ingredients.",
  },
  {
    icon: <FontAwesomeIcon icon={faWifi} />,
    title: "Transport Pickup",
    description: "We pick our customers from transport hubs to our hotel.",
  },
];
  return (
    <section id="about" className="what-makes-good-section">
      <div className="why-makes-container">
        <h2 className="section-title">What makes our hotel more appealing?</h2>
        <p className="desc-parag">
          At Gashuna , we deliver modern comfort with genuine Ethiopian
          Hostpitality. Located conveniently Dangila vibrant attraction, we are
          committed to making your stay unforgettable, whether for business or
          leisure.
        </p>
        {/* service grid. */}
        <div className="service-grid">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseGashuna;
