import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class CreatePage extends Component {
  render() {
    console.log("CREATE PAGE PROPS");
    console.log(this.props);

    const { id, name, url } = this.props.meme.singleMeme;

    return (
      <>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          color="primary"
          style={{
            cursor: "default",
            fontFamily: "Roboto, sans-serif",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {name}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img height="500px" style={{ border: "solid 1px black" }} src={url} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          <div style={{ fontFamily: "Roboto, sans-serif", color: "#2196f3" }}>
            Top Text:{" "}
            <input
              style={{ border: "solid 1px #2196f3", padding: "4px" }}
              placeholder={"Insert Top Text Here..."}
            ></input>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          <div style={{ fontFamily: "Roboto, sans-serif", color: "#2196f3" }}>
            Bottom Text:{" "}
            <input
              style={{ border: "solid 1px #2196f3", padding: "4px" }}
              placeholder={"Insert Bottom Text Here..."}
            ></input>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#2196f3",
              color: "#fff",
              marginTop: "10px",
            }}
          >
            CREATE
          </Button>
        </div>
      </>
    );
  }
}

CreatePage.propTypes = {
  meme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  meme: state.meme,
});

export default connect(mapStateToProps)(CreatePage);
