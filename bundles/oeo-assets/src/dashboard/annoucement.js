import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, TextField, Grid } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
  const send = () => {
    nodecg.sendMessage("printMessage", message);
    console.log(`sent "${message}"`);
  };
  return (
    <Grid spacing={2} container alignItems="center">
      <Grid item>
        <TextField variant="outlined" onChange={handleMsg} label="message" />
      </Grid>
      <Grid item>
        <Button color="primary" onClick={send} varient="outlined">
          Send
        </Button>
      </Grid>
    </Grid>
  );
};

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Annoucement />
  </MuiThemeProvider>,
  document.getElementById("root")
);
