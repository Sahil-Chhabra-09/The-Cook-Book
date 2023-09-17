import React from "react";
import "./Card.css";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function CardRender({ title, img, id, cuisine }) {
  let VegClass = "";
  if (cuisine === "veg") {
    VegClass = "veg";
  }
  return (
    <SplideSlide>
      <Link to={"/recipe/" + id}>
        <div className={`card ${VegClass}`}>
          <div className="gradient"></div>
          <p className="text">{title.split(" ").slice(-4).join(" ")}</p>
          <img src={img} alt={title}></img>
        </div>
      </Link>
    </SplideSlide>
  );
}

export default CardRender;
