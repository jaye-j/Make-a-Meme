import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { getMemes } from "../../redux/actions/memeActions";
import MemeCard from "../MemeCard";
import Button from "@material-ui/core/Button";

class home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    };
  }
  componentWillMount() {
    this.props.getMemes();
  }

  handleOnClickForward = () => {
    let page;
    if (this.state.page + 1 < 11) {
      page = this.state.page + 1;
    } else {
      page = this.state.page;
    }
    this.setState({
      page: page,
    });
  };

  handleOnClickBackward = () => {
    let page;
    if (this.state.page - 1 > 0) {
      page = this.state.page - 1;
    } else {
      page = 1;
    }
    this.setState({
      page: page,
    });
  };

  render() {
    const { memes, loading } = this.props.meme;
    const { page } = this.state;

    // const theme = createMuiTheme({
    //   palette: {
    //     primary: green,
    //   },
    // });

    console.log(":PROPS IN HOME PAGE");
    console.log(memes); //if loading is false      // if loading is true
    // let memeMarkup = !loading ? (
    //   memes.map((data) => <MemeCard data={data} />)
    // ) : (
    //   <div>Loading Memes...</div>
    // );
    // 0, 10
    // 10, 20
    // 20, 30

    let memeMarkup = [];

    if (memes.length > 10) {
      for (let count = 10 * (page - 1); count < 10 * page; count++) {
        memeMarkup.push(<MemeCard data={memes[count]} />);
      }
    }

    return (
      <>
        <Grid container spacing={2}>
          {memeMarkup}
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {this.state.page > 1 ? (
            <Button
              style={{
                backgroundColor: "#2196f3",
                color: "#fff",
                margin: "15px",
              }}
              onClick={this.handleOnClickBackward}
            >
              {"<"}
            </Button>
          ) : null}
          <div style={{ color: "#2A7FC0" }}>Page: {this.state.page}/10</div>
          {this.state.page < 10 ? (
            <Button
              style={{
                backgroundColor: "#2196f3",
                color: "#fff",
                margin: "15px",
              }}
              onClick={this.handleOnClickForward}
            >
              {">"}
            </Button>
          ) : null}
        </div>
      </>
    );
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
