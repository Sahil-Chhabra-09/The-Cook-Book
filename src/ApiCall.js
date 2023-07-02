import React, { Component } from "react";
import axios from "axios";

class ApiCall extends Component {
  componentDidMount() {
    axios
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMsg: "Error retrieving data",
        });
      });
  }
  render() {
    return <div>ApiCall</div>;
  }
}

export default ApiCall;
