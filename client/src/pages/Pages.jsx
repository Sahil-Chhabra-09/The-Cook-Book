import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
import Register from "./Register";
import NoData from "./NoData";

//doing all the routing here

// BrowserRouter gives the ability for the routes to work, routes is an intelligent component looks at the path and figures out which route to render

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Register />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        {/* By using the /:type, no matter what is after /cuisine, it renders our cuisine component */}
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="*" element={<NoData />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
