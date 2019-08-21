import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Typography, Grid, Button, Icon, Paper } from "@material-ui/core";
import uuid from "uuid";
import Swipe from "../components/Swipe";
import Anime from "../components/Anime";
import "../styles/graphics.scss";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ED9C4D"
    },
    default: {
      main: "#FFFFFF"
    }
  }
});

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const handler = msg => {
      console.log(`GOT ${msg}`);
      add(msg);
    };
    nodecg.listenFor("annoucement-msg", handler);
    return () => {
      nodecg.unlisten("annoucement-msg", handler);
    };
  });

  const add = msg => {
    setItems([...items, { id: uuid(), text: msg }]);
  };

  return (
    <Grid
      container
      alignItems="flex-end"
      className="ignore"
      style={{ padding: 25 }}
    >
      <Grid item>
        {items.map(({ id, text }) => (
          <Swipe key={id} timeout={12000}>
            <Paper
              elevation={24}
              className="white pad"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <Grid container alignItems="center" style={{ height: "100%" }}>
                <Icon fontSize="large" color="primary">
                  info
                </Icon>
                <Typography
                  variant="h6"
                  style={{ maxWidth: 400, marginLeft: 10 }}
                >
                  {text}
                </Typography>
              </Grid>
            </Paper>
          </Swipe>
        ))}
      </Grid>
    </Grid>
  );
};

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Main />
  </MuiThemeProvider>,
  document.getElementById("root")
);
