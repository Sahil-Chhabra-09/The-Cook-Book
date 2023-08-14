import React, { Component } from "react";
import "./Card.css";
import { SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

class CardRender extends Component {
  render() {
    let VegClass = "";
    const { title, img, id } = this.props;
    if (this.props.cuisine == "veg") {
      VegClass = "veg";
    }
    return (
      <SplideSlide>
        <Link to={"/recipe/" + id}>
          <div className={`card ${VegClass}`}>
            <div className="gradient"></div>
            <p className="text">{title}</p>
            <img src={img} alt={title}></img>
          </div>
        </Link>
      </SplideSlide>
    );
  }
}

export default CardRender;
