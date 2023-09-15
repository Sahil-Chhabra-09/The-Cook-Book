import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CardRender from "./CardRender";
//implementing the same as popular but a functional component

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
        )
        .then((response) => {
          setVeggie(response.data.recipes);
          localStorage.setItem("veggie", JSON.stringify(response.data.recipes));
        })
        .catch((error) => {
          console.log(
            "error: possible because of crossed daily limit for api key 1"
          );
        });
    }
  }, []);

  return (
    <Wrapper>
      <h3>Veggie Recipes</h3>
      <div>
        <Splide
          options={{
            perPage: 3,
            pagination: false,
            drag: "free",
            gap: "5vw",
          }}
        >
          {veggie.length
            ? veggie.map((veg) => (
                <CardRender
                  key={veg.id}
                  title={veg.title}
                  img={veg.image}
                  id={veg.id}
                  cuisine="veg"
                ></CardRender>
              ))
            : null}
        </Splide>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

export default Veggie;
