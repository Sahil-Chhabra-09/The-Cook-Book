import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import NoData from "./NoData";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY2}&number=12&query=${name}`
      )
      .then((response) => {
        setSearchedRecipes(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSearched(params.search); //whatever we added in path of the route
  }, [params.search]);
  return (
    <Grid className="mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-0">
      {searchedRecipes.length ? (
        searchedRecipes.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })
      ) : (
        <NoData />
      )}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2.5rem;
`;

const Card = styled.div`
  height: fit-content;
  img {
    width: 100%;
    border-radius: 2rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
