import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import AgentNavbar from "../components/AgentNavbar";
import SearchCriteria from "../components/SearchCriteria";

function AgentSearchScreen() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    // fade: true,
  };
  return (
    <div>
      <AgentNavbar />
      <div className="agent-search">
        <Container>
          <Row className="agent-search-row">
            <Col className="agent-search-left">
            <Slider {...settings}>
          <div>
          <img src="../assets/image/slider1.jpg" />
          </div>
          <div>
          <img src="../assets/image/slider2.jpg" />
          </div>
          <div>
          <img src="../assets/image/slider3.jpg" />
          </div>
          <div>
          <img src="../assets/image/slider4.jpg" />
          </div>
          <div>
          <img src="../assets/image/4.jpeg" />
          </div>
          <div>
          <img src="../assets/image/5.jpeg" />
          </div>
        </Slider>
            </Col>
            <Col className="agent-search-criteria">
              <SearchCriteria />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default AgentSearchScreen;
