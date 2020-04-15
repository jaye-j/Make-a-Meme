import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#2A7FC0",
          }}
        >
          <p>
            ©
            <Link
              style={{ color: "#2A7FC0", textDecoration: "underline" }}
              to="/"
            >
              Make-A-Meme
            </Link>{" "}
            2020
          </p>
        </div>
      </>
    );
  }
}

export default Footer;
