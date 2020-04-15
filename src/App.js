import React, { Component } from "react";
import themeFile from "./util/theme";

//import redux
import { Provider } from "react-redux";
import store from "./redux/store";

//router
import { BrowserRouter, Switch, Route } from "react-router-dom";

import BaseLayout from "./components/layout/BaseLayout";

// PAGES
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import CreatePage from "./components/pages/CreatePage";

// ======= Material UI =======
import { ThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// ======= use theme file =======
const theme = createMuiTheme(themeFile);

let saveToLocalStorage = (state) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem("state", serializeState);
  } catch (e) {
    console.log(e);
  }
};

let loadFromLocalStorage = () => {
  try {
    const serializeState = localStorage.getItem("state");
    if (serializeState === null) {
      return undefined;
    } else {
      return JSON.parse(serializeState);
    }
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <BaseLayout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/favorites" component={Favorites} />
                <Route exact path="/create" component={CreatePage} />
              </Switch>
            </BaseLayout>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
