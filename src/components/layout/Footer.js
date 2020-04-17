import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "#2196f3",
            padding: "20px",
            boxShadow:
              "0 10px 20px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontFamily: "Roboto, sans-serif",
              fontSize: "12px",
            }}
          >
            <div>
              ©
              <Link
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Roboto, sans-serif",
                }}
                to="/"
              >
                Make-A-Meme
              </Link>{" "}
              2020
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontFamily: "Roboto, sans-serif",
              fontSize: "12px",
            }}
          >
            <div>
              API:{" "}
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Roboto, sans-serif",
                }}
                href="https://api.imgflip.com"
                target="_blank"
              >
                imgflip.com
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontFamily: "Roboto, sans-serif",
              fontSize: "12px",
            }}
          >
            <div>
              Source Code:{" "}
              <a
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "Roboto, sans-serif",
                }}
                href="https://github.com/jaye-j/Make-a-Meme"
                target="_blank"
              >
                Github.com
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
