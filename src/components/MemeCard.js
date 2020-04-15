import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import StarIcon from "@material-ui/icons/Star";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

// REDUX STUFF
// import { getMemes } from "../redux/actions/memeActions";
import { connect } from "react-redux";
import { addFavMeme } from "../redux/actions/memeActions";

const styles = {
  root: {
    maxWidth: 330,
    margin: 5,
  },
  media: {
    height: 140,
  },
};

class MemeCard extends Component {
  // still need to import favMeme() from memeActions (check)
  // setup PropTypes to add `isRequired`(check)
  // setup onClick fav button dispatch (check)

  // likeMeme = () => {
  // thisprops.favmeme(this.props.data.id)
  //}

  favoriteMeme = () => {
    this.props.addFavMeme(this.props.data.id);
  };

  render() {
    // console.log("MEME CARD COMPONENT");
    // console.log(this);
    // console.log("MEMEID");
    // console.log(this.props.data);
    console.log(this.props.data.id);

    return (
      <Grid item lg={4} md={3} sm={6} xs={10}>
        <Card className={styles.root}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                height: 250,
                border: "solid 1px black",
                marginTop: "10px",
              }}
              src={this.props.data.url}
              alt="Meme template"
            />
          </div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="primary"
              style={{ cursor: "default", fontFamily: "Roboto, sans-serif" }}
            >
              {this.props.data.name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={this.favoriteMeme}
              style={{ marginRight: "10px", marginLeft: "10px" }}
            >
              <StarBorderIcon style={{ color: "#2196f3" }} />
            </Button>
            <Button
              style={{ border: "solid 1px #2196f3" }}
              size="small"
              color="primary"
            >
              <Link
                style={{ color: "#2196f3", textDecoration: "none" }}
                to="/create"
              >
                Create
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

Card.propTypes = {
  meme: PropTypes.object.isRequired,
  addFavMeme: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  meme: state.meme,
});

export default connect(mapStateToProps, { addFavMeme })(
  withStyles(styles)(MemeCard)
);
