import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaBookmark } from "react-icons/fa";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const fetchDetails = async () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY2}`
      )
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  const BookmarkIcon = () => {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleBookmarkClick = () => {
      setIsBookmarked(!isBookmarked);
    };

    return (
      <div onClick={handleBookmarkClick} style={{ fontSize: "25px" }}>
        {isBookmarked ? (
          <FaBookmark color="red" />
        ) : (
          <FaBookmark color="gray" />
        )}
      </div>
    );
  };

  return (
    <DetailWrapper>
      <h2>{details.title}</h2>
      <div className="w-full absolute">
        <div className="float-right">
          <BookmarkIcon />
        </div>
      </div>
      <img src={details.image} alt="Dish Image"></img>
      <Buttons>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
      </Buttons>
      {activeTab === "instructions" && (
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
        </div>
      )}
      {activeTab === "ingredients" && (
        <ul>
          {details.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
      )}
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
  display: flex;
  position: relative;
  img {
    width: 40vw;
    max-width: 400px;
    border-radius: 1rem;
  }
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  font-weight: 600;
  margin-inline: 2rem;
  border: 2px solid black;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 5rem;
`;

const Buttons = styled.div`
  margin: 1rem 0rem;
  display: flex;
  justify-content: space-between;
`;

export default Recipe;
