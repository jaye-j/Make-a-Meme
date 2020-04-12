import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://placecorgi.com/260/180"
          title="MemeCover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            [Meme Title]
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a>
          <StarBorderIcon />
        </a>
        <Button size="small" color="primary">
          Create
        </Button>
      </CardActions>
    </Card>
  );
}
