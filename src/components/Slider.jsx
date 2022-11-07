// ES UN MOCK, SE DEBE ITERAR Y LIMITAR:
// LG laptop 1024 x5 ITEMS
// MD? TABLET 768 x4 ITEMS
// MOBILE <425 x2 ITEMS
//
import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        margin: "-2rem 1rem 0 0",
        padding: "15rem 0 15rem 0",
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
        margin: "-1.5rem 0 0 1rem",
        padding: "15rem 0 15rem 0",
        boxSizing: "initial",
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
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,

            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <Container className="b-grey">
        <div>
          <h2 className="f-yellow">| Destacados </h2>
          <Slider {...settings}>
            <div>
              <img
                width={"185px"}
                height={"275px"}
                variant="top"
                alt="img"
                src="./img/matrix.jpg"
              />
              <div style={{ height: "185px", width: "185px" }}>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="b-grey">
              <img
                width={"185px"}
                height={"275px"}
                variant="top"
                alt="img"
                src="./img/brad.jpg"
              />
              <div style={{ height: "185px", width: "185px" }}>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="b-grey">
              <img
                width={"185px"}
                height={"275px"}
                variant="top"
                alt="img"
                src="./img/boys.jpg"
              />
              <div style={{ height: "185px", width: "185px" }}>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>{" "}
            <div className="b-grey">
              <img
                width={"185px"}
                height={"275px"}
                variant="top"
                alt="img"
                src="./img/matrix.jpg"
              />
              <div style={{ height: "185px", width: "185px" }}>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="b-grey">
              <img
                width={"185px"}
                height={"275px"}
                variant="top"
                alt="img"
                src="./img/brad.jpg"
              />
              <div style={{ height: "185px", width: "185px" }}>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="b-grey">
              <img
                width={"185px"}
                height={"275px"}
                variant="top"
                alt="img"
                src="./img/boys.jpg"
              />
              <div style={{ height: "185px", width: "185px" }}>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>{" "}
            <div className="b-grey">
              <img
                width={"185px"}
                height={"275px"}
                variant="top"
                alt="img"
                src="./img/matrix.jpg"
              />
              <div style={{ height: "185px", width: "185px" }}>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="b-grey">
              <img
                width={"185px"}
                height={"275px"}
                variant="top"
                alt="img"
                src="./img/brad.jpg"
              />
              <div style={{ height: "185px", width: "185px" }}>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="b-grey">
              <img
                width={"185px"}
                height={"275px"}
                variant="top"
                alt="img"
                src="./img/boys.jpg"
              />
              <div style={{ height: "185px", width: "185px" }}>
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    );
  }
}
