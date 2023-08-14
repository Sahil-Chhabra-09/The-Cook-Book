import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import {
  Button,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";

//npm install framer-motion(for animations) react-icons react-router-dom styled-components(for css), also @splidejs/react-splide(for slider motion)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginOrLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn((prev) => !prev);
    } else {
      setIsLoggedIn((prev) => !prev);
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>The Cook Book</Logo>
        </Nav>
        <Login>
          {isLoggedIn ? (
            <FormControl variant="standard" value={"Ed Roh"}>
              <Select
                value={"Ed Roh"}
                sx={{
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  border: "2px solid #494949",
                }}
                input={<InputBase />}
              >
                <MenuItem value={"Ed Roh"}>
                  <Typography>{"Ed Roh"}</Typography>
                </MenuItem>
                <MenuItem value={"Bookmarks"}>
                  <Typography>{"Bookmarks"}</Typography>
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: !isLoggedIn ? "#494949" : "#e94057",
                      "&:hover": {
                        backgroundColor: !isLoggedIn ? "#313131" : "#f27121",
                      },
                    }}
                    onClick={handleLoginOrLogout}
                  >
                    {isLoggedIn ? "Logout" : "Login/SignUp"}
                  </Button>
                </MenuItem>
              </Select>
            </FormControl>
          ) : (
            <Button
              variant="contained"
              sx={{
                backgroundColor: !isLoggedIn ? "#494949" : "#e94057",
                "&:hover": {
                  backgroundColor: !isLoggedIn ? "#313131" : "#f27121",
                },
              }}
              onClick={handleLoginOrLogout}
            >
              {isLoggedIn ? "Logout" : "Login/SignUp"}
            </Button>
          )}
        </Login>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
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

const Login = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default App;
