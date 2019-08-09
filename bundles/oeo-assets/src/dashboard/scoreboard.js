import React from "react";
import ReactDOM from "react-dom";
import { Button, TextField, Typography, Grid, Icon } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// Styles
import "../styles/styles.scss";
import TeamPanel from "../components/TeamPanel";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ED9C4D"
    }
  }
});

const Scoreboard = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid
        container
        spacing={3}
        justify="space-evenly"
        className="teamContainer"
      >
        <TeamPanel blue />
        <Button>
          <Icon>swap_horiz</Icon>
        </Button>
        <TeamPanel red />
      </Grid>

      <Grid container justify="center" spacing={1} className="teamOptions">
        <Grid item>
          <Button variant="outlined" color="primary">
            Show
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Reset
          </Button>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Scoreboard />, document.getElementById("root"));
