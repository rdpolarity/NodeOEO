import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Grid, Icon, Paper } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// Styles
import "../styles/dashboard.scss";
import TeamPanel from "../components/TeamPanel";

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

const Dashboard = () => {
  const [disable, setdisable] = useState(false);
  const toggle = e => {
    setdisable(true);
    setTimeout(() => setdisable(false), 1000);
    nodecg.sendMessage("scoreboard-toggle", null);
  };
  return (
    <Grid container justify="center" spacing={1} className="teamOptions">
      <Grid item>
        <Button
          variant="outlined"
          disabled={disable}
          onClick={toggle}
          color="primary"
        >
          Toggle
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" color="primary">
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};

const Teamboard = () => {
  return (
    <Grid
      container
      spacing={3}
      justify="space-between"
      alignItems="center"
      className="teamContainer"
    >
      <TeamPanel blue />
      <Grid item>
        <Button style={{ height: 50 }}>
          <Icon>swap_horiz</Icon>
        </Button>
      </Grid>
      <TeamPanel red />
    </Grid>
  );
};

const Scoreboard = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container direction="column" spacing={2}>
        <Grid item className="group">
          <Dashboard />
        </Grid>
        <Grid item style={{ marginTop: 5 }}>
          <Teamboard />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Scoreboard />, document.getElementById("root"));
