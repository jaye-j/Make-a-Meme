import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import LinkStyles from "@material-ui/core/Link";
import { Link } from "react-router-dom";

// PAGES
// import Home from "../pages/Home";
// import Favorites from "../pages/Favorites";

import logo from "../../image/Logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logoimg: {
    height: 65,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.title}>
            <Link to="/">
              <img
                src={logo}
                className={classes.logoimg}
                alt="Make-A-Meme Logo"
              />
            </Link>
          </div>
          <Button>
            <LinkStyles>
              <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
                Templates
              </Link>
            </LinkStyles>
          </Button>
          <Button>
            <LinkStyles>
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/favorites"
              >
                Favorites
              </Link>
            </LinkStyles>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
