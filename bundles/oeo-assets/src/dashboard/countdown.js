import React, { useState, useEffect } from "react";
import reactDOM from "react-dom";
import { Button, Typography, TextField, Grid } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Countdown from "react-countdown-now";
import "../styles/dashboard.scss";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ED9C4D"
    }
  }
});

const renderer = ({ seconds }) => {
  // Render a countdown
  return <span>{seconds}</span>;
};

const currentTime = nodecg.Replicant("time", { defaultValue: 0 });

export default function Main() {
  const [time, setTime] = useState(0);
  const [seconds, setSeconds] = useState();
  useEffect(() => {
    currentTime.on(`change`, value => {
      let minutes = value / 60;
      minutes = minutes.toString().split(".")[0];
      let seconds = value % 60;
      setTime(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
    });
  });
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Typography className="textCenter" color="primary" variant="h3">
          {time}
        </Typography>
        <Typography variant="body2" className="textCenter" gutterBottom>
          *Time represented same on stream*
        </Typography>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          className="group"
          spacing={1}
        >
          <TextField
            variant="outlined"
            style={{ width: "100%" }}
            onChange={e => setSeconds(Number(e.target.value))}
            label="seconds"
          />
          <Grid item>
            <Button
              color="primary"
              variant="outlined"
              onClick={() => (currentTime.value = seconds)}
            >
              SET
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => (currentTime.value = 0)}
            >
              RESET
            </Button>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

reactDOM.render(<Main />, document.getElementById("root"));
