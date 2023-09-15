import React from "react";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LoginLogout from "../components/LoginLogout";

function Navbar() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="h-20 z-20">
      <Nav className=" cursor-pointer" onClick={navigateToHome}>
        <GiKnifeFork />
        <Logo className="hidden md:block">The Cook Book</Logo>
      </Nav>
      <LoginLogout />
    </div>
  );
}

const Logo = styled.div`
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  position: absolute;
  left: 20px;
  top: 0;
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default Navbar;
