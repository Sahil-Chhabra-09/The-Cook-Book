import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutAction } from "../redux/auth";
import { useDispatch } from "react-redux";

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("Ed Roh");
  const isLoggedInGlobal = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("uid") != null &&
      localStorage.getItem("name") != null
    ) {
      setIsLoggedIn(true);
      setName(localStorage.getItem("name"));
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    setIsLoggedIn(isLoggedInGlobal);
  }, [isLoggedInGlobal]);

  const navigate = useNavigate();
  const handleLoginOrLogout = () => {
    if (isLoggedIn) {
      localStorage.clear();
      localStorage.removeItem("token");
      localStorage.removeItem("uid");
      localStorage.removeItem("name");
      dispatch(logoutAction());
      setIsLoggedIn(false);
    } else {
      navigate("/auth");
    }
  };

  const showBookmarks = () => {
    navigate("/cuisine/personal");
  };
  return (
    <>
      <Login>
        {isLoggedIn ? (
          <FormControl variant="standard" value={name}>
            <Select
              value={name}
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
              <MenuItem value={name}>
                <Typography>{name}</Typography>
              </MenuItem>
              <MenuItem value={"Bookmarks"} onClick={showBookmarks}>
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
    </>
  );
}

const Login = styled.div`
  position: absolute;
  right: 20px;
  top: 0;
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default LoginLogout;
