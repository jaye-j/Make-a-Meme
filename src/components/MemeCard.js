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
    maxWidth: 345,
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
          {/* <CardMedia className={styles.media} image={this.props.data.url} /> */}
          <img style={{ height: 200 }} src={this.props.data.url} />
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
            <Button>
              <StarBorderIcon />
            </Button>
            <Button size="small" color="primary">
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
