import React, { useEffect, useState } from "react";
import axios from "axios";
import CardRender from "./CardRender";
import "./Card.css";
import styled from "styled-components"; //we can attach styling to components
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useMediaQuery } from "@mui/material";
import NoData from "../pages/NoData";

//carousel is gonna be Splide component and SplideSlide is gonna be individual card

function Popular() {
  const [popular, setPopular] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const check = localStorage.getItem("popular");

    if (check) {
      //when we are pulling it back, we are parsing it, converting it from string to object
      setPopular(JSON.parse(check));
    } else {
      axios
        .get(`${apiUrl}/spoon/popular`)
        .then((response) => {
          setPopular(response.data.recipes);
          //in local storage, we can only save strings. So, we need to convert the objects into the string
          localStorage.setItem(
            "popular",
            JSON.stringify(response.data.recipes)
          );
        })
        .catch((error) => {
          console.log(
            "error occured while getting popular recipes",
            error.message
          );
        });
    }
  }, []);

  const isDesktop = useMediaQuery("(min-width:1000px)");
  const isTab = useMediaQuery("(min-width: 600px)");

  return (
    <Wrapper>
      <h3>Popular Recipes</h3>
      <div>
        <Splide
          options={{
            perPage: isDesktop ? 4 : isTab ? 3 : 2,
            pagination: false,
            drag: "free",
            gap: "5vw",
          }}
        >
          {popular.length ? (
            popular.map((recipe) => (
              <CardRender
                key={recipe.id}
                title={recipe.title}
                img={recipe.image}
                id={recipe.id}
              />
            ))
          ) : (
            <NoData />
          )}
        </Splide>
      </div>
    </Wrapper>
  );
}

//This works kind of like sass, the div tag is replaced with Wrapper tag
const Wrapper = styled.div`
  text-align: center;
`;

export default Popular;
