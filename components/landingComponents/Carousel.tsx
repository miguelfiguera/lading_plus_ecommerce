import React from "react";
import Image from "next/image";
import placeHolder1 from "@/public/placeholder1.jpeg";
import placeHolder2 from "@/public/placeholder2.jpeg";
import placeHolder3 from "@/public/placeholder3.jpeg";

export default function Carousel() {
  return (
    <div className="shadow-lg rounded-3 my-5 py-4">
      {" "}
      <h1 className="fs-3 text-center">Carousel Stuff</h1>
      <div className="container justify-content-center d-flex ">
        <div
          id="carouselExampleCaptions"
          className="carousel slide my-5"
          style={{ maxWidth: "50%", maxHeight: "50%" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner rounded-circle">
            <div className="carousel-item active">
              <Image
                src={placeHolder1}
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", height: "100%" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Lorem Ipsum</p>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src={placeHolder2}
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", height: "100%" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem Ipsum</p>
              </div>
            </div>
            <div className="carousel-item">
              <Image
                src={placeHolder3}
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", height: "30%" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>{" "}
    </div>
  );
}
