import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import React, { Component } from "react";
import { motion } from "framer-motion";

export class Home extends Component {
  render() {
    return (
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Veggie />
        <Popular />
      </motion.div>
    );
  }
}

export default Home;
