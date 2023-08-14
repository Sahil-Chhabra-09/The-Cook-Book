import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//useParams helps us to pull out the keyword after /cuisine

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY2}&number=10&cuisine=${name}`
      )
      .then((response) => {
        setCuisine(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{opacity: 1}}
      initial={{opacity:0}}
      exit={{opacity: 0}}
      transition= {{duration: 0.5}}
    >
      {cuisine.length
        ? cuisine.map((item) => {
            return (
              <Card key={item.id}>
                <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                </Link>
              </Card>
            );
          })
        : null}
    </Grid>
  );
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
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
    text-decoration: none;
    padding: 1rem;
  }
`;

export default Cuisine;
