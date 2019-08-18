import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "../styles/dashboard.scss";
import msgData from "../data/messages.json";
import uuid from "uuid";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ED9C4D"
    }
  }
});

const Annoucement = () => {
  let message;
  const handleMsg = e => {
    message = e.target.value;
  };
  const send = msg => {
    nodecg.sendMessage("annoucement-msg", msg);
    console.log(`sent "${msg}"`);
  };
  return (
    <div>
      <div>
        <Typography variant="h6" className="textCenter" gutterBottom>
          PRESETS
        </Typography>
        {msgData.map(({ msg }) => {
          return (
            <Grid container alignItems="center" key={uuid()}>
              <Typography
                variant="body1"
                className="textCenter message"
                style={{ width: 250 }}
              >
                {msg}
              </Typography>
              <Button
                color="primary"
                onClick={() => send(msg)}
                variant="outlined"
              >
                Send
              </Button>
            </Grid>
          );
        })}
      </div>
      <div className="group">
        <Typography variant="h6" className="textCenter" gutterBottom>
          CUSTOM MESSAGE
        </Typography>
        <Grid
          style={{ width: "100%" }}
          spacing={1}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item style={{ width: "100%" }}>
            <TextField
              style={{ width: "100%" }}
              variant="outlined"
              onChange={handleMsg}
              label="message"
            />
          </Grid>
          <Grid item>
            <Button
              color="primary"
              onClick={() => send(message)}
              variant="outlined"
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Annoucement />
  </MuiThemeProvider>,
  document.getElementById("root")
);
