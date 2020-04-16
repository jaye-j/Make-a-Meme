import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { addFavMeme } from "../../redux/actions/memeActions";
import { connect } from "react-redux";
import MemeCard from "../MemeCard";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    };
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

  // favorites: {
  //   favorites: [
  //     \item: {
  //       id: 123
  //     }
  //   ]
  // }

  // data.forEach( <YOUCANNAMETHISW/eYOUWANT> => {

  //})

  render() {
    const {
      favorites: { favorites },
      loading,
    } = this.props;
    const { page } = this.state;

    console.log("FAVORITES FROM DESTRUCTURING");
    console.log(favorites);
    let favoriteCards = [];

    if (favorites.length > 10) {
      for (
        let count = 10 * (page - 1);
        count < 10 * page && count < favorites.length;
        count++
      ) {
        // TODO: CHange
        favoriteCards.push(<MemeCard key={count} data={favorites[count]} />);
      }
    } else {
      favoriteCards = favorites.map((item, index) => (
        <MemeCard key={index} data={item} />
      ));
    }

    console.log("LOOKING FOR FAVORITES");
    console.log(this.props.favorites);

    let favMarkup = !loading ? (
      // favorites.map((items) => <MemeCard data={items} />)
      favoriteCards
    ) : (
      <p>loading</p>
    );
    return (
      <>
        <Grid container spacing={2}>
          {favMarkup}
        </Grid>
        {/* pagination navigator start */}
        <div
          style={{
            marginTop: "10px",
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
          <div style={{ color: "#2A7FC0", fontFamily: "Roboto, sans-serif" }}>
            Page: {this.state.page}/{Math.floor(favorites.length / 10 + 1)}
          </div>
          {this.state.page < Math.floor(favorites.length / 10 + 1) ? (
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
        {/* pagination navigator end */}
      </>
    );
  }
}

Favorites.propTypes = {
  addFavMeme: PropTypes.func.isRequired,
  favorites: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  favorites: state.meme,
});

export default connect(mapStateToProps, { addFavMeme })(Favorites);
