import React, { Component } from "react";
import axios from "axios";
import CardRender from "./CardRender";
import "./Card.css";
import styled from "styled-components"; //we can attach styling to components
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

//carousel is gonna be Splide component and SplideSlide is gonna be individual card

class Popular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popular: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    //will be used for search purposes
  }

  componentDidMount() {
    const check = localStorage.getItem("popular");

    if (check) {
      this.setState({
        //when we are pulling it back, we are parsing it, converting it from string to object
        popular: JSON.parse(check),
      });
    } else {
      axios
        .get(
          `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`
        )
        .then((response) => {
          this.setState({
            popular: response.data.recipes,
          });
          //in local storage, we can only save strings. So, we need to convert the objects into the string
          localStorage.setItem(
            "popular",
            JSON.stringify(response.data.recipes)
          );
        })
        .catch((error) => {
          console.log(
            "error: possible because of crossed daily limit for api key 1"
          );
          axios
            .get(
              `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY2}&number=20`
            )
            .then((response) => {
              console.log(response);
              this.setState({
                popular: response.data.recipes,
              });
              localStorage.setItem(
                "popular",
                JSON.stringify(response.data.recipes)
              );
            })
            .catch((error) => {
              console.log("error again");
            });
        });
    }
  }

  render() {
    const { popular } = this.state;
    return (
      <Wrapper>
        <h3>Popular Recipes</h3>
        <div>
          <Splide
            options={{
              perPage: 4,
              pagination: false,
              drag: "free",
              gap: "5vw",
            }}
          >
            {popular.length
              ? popular.map((recipe) => (
                  <CardRender
                    key={recipe.id}
                    title={recipe.title}
                    img={recipe.image}
                    id={recipe.id}
                  />
                ))
              : null}
          </Splide>
        </div>
      </Wrapper>
    );
  }
}

//This works kind of like sass, the div tag is replaced with Wrapper tag
const Wrapper = styled.div`
  text-align: center;
`;
export default Popular;
