import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
//for navigating to a new page on click of the submit button,
import { Navigate, useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault(); //preventing default page update
    setInput("");
    navigate(`/searched/${input}`);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  position: relative;
  width: 100%;
  height: 35px;
  margin-top: 32px;
  input {
    background-color: brown;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.2rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 5px;
    border: none;
    width: 100%;
    height: 35px;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
