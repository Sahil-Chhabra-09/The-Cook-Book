import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import NoData from "./NoData";
import { useNavigate } from "react-router-dom";

//useParams helps us to pull out the keyword after /cuisine

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await axios
      .get(`${apiUrl}/spoon/cuisine`, {
        params: {
          name: name,
        },
      })
      .then((response) => {
        setCuisine(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getBookmarksFromDB = async () => {
    await axios
      .get(`${apiUrl}/bmark`, {
        params: {
          uid: localStorage.getItem("uid"),
        },
        headers: {
          Authorization: `Bearer ${String(localStorage.getItem("token"))}`,
        },
      })
      .then((response) => {
        setCuisine(response.data.bookmarks[0].recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (params.type === "personal") {
      if (
        localStorage.getItem("token") !== null &&
        localStorage.getItem("uid") != null &&
        localStorage.getItem("name") != null
      ) {
        getBookmarksFromDB();
      } else {
        navigate("/");
      }
    } else {
      if (["Italian", "American", "Thai", "Indian"].includes(params.type)) {
        getCuisine(params.type);
      } else {
        navigate("/");
      }
    }
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mt-0"
    >
      {cuisine.length ? (
        cuisine.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={"/recipe/" + item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title.split(" ").slice(-4).join(" ")}</h4>
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

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(100px, 1fr));
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
