import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

// REDUX STUFF
// import { getMemes } from "../redux/actions/memeActions";
import { connect } from "react-redux";

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
  render() {
    console.log("MEME CARD COMPONENT");
    console.log(this);

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
            />
          </div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="primary"
              style={{ cursor: "default" }}
            >
              {this.props.data.name}
            </Typography>
          </CardContent>
          <CardActions>
            <a style={{ marginRight: "10px", marginLeft: "10px" }}>
              <StarBorderIcon style={{ color: "#2196f3" }} />
            </a>
            <Button
              style={{ border: "solid 1px #2196f3" }}
              size="small"
              color="primary"
            >
              Create
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

Card.propTypes = {
  meme: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  meme: state.meme,
});

export default connect(mapStateToProps)(withStyles(styles)(MemeCard));
