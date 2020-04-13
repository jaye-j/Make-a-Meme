import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { getMemes } from "../../redux/actions/memeActions";
import MemeCard from "../MemeCard";

class home extends Component {
  componentDidMount() {
    this.props.getMemes();
  }

  render() {
    const { memes, loading } = this.props.meme;

    console.log(":PROPS IN HOME PAGE");
    console.log(memes); //if loading is false      // if loading is true
    let memeMarkup = !loading ? (
      memes.map((data) => <MemeCard data={data} />)
    ) : (
      <p>"Loading..."</p>
    );
    return <>{memeMarkup}</>;
  }
}

home.propTypes = {
  getMemes: PropTypes.func.isRequired,
  meme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  meme: state.meme,
});

export default connect(mapStateToProps, { getMemes })(home);
