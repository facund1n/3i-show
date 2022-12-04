// LG laptop 1024 x5 ITEMS || MD? TABLET 768 x4 ITEMS || MOBILE 425 x2 ITEMS

import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const imagenes = JSON.parse(localStorage.getItem("images"));

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

export default class CustomArrows extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
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
          {!imagenes
            ? window.location.reload()
            : imagenes.map((data, i) => (
                <div key={i}>
                  <img
                    className="img-fluid mb-2 px-1"
                    style={{ height: "100%", width: "100%" }}
                    src={data.imageLg}
                    alt={data.altLg}
                  />
                </div>
              ))}
        </Slider>
      </Container>
    );
  }
}
