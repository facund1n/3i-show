// LG laptop 1024 x5 ITEMS || MD? TABLET 768 x4 ITEMS || MOBILE 425 x2 ITEMS

import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        margin: "-0.5rem 1rem 0 0",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        margin: "-0.80rem 0 0 1rem",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}
const destacados = JSON.parse(localStorage.getItem("destacados"));

export default class CustomArrows extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <Container className="b-grey">
        <Slider {...settings}>
          {!destacados
            ? window.location.reload()
            : destacados.map((data, i) => (
                <Link
                  key={i}
                  to={`articulos/destacados/${data._id}`}
                  style={{ textDecoration: "inherit" }}
                >
                  <Card
                    key={i}
                    className="bg-dark m-1 links"
                    style={{ height: "95%" }}
                  >
                    <Card.Img
                      src={data.image}
                      alt={data.alt}
                      style={{ height: "240px", width: "100%" }}
                    />
                    <Card.ImgOverlay className="d-flex align-items-end">
                      <Card.Title className="b-black2">{data.title}</Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              ))}
        </Slider>
      </Container>
    );
  }
}
