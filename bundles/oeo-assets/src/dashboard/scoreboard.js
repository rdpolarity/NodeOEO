import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  OutlinedInput,
  Icon,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// Styles
import "../styles/dashboard.scss";
import { useReplicant } from "use-nodecg";
import uuid from "uuid";

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

nodecg.Replicant("scoreboard", {
  defaultValue: { blue: { score: 0, team: "" }, red: { score: 0, team: "" } }
});

const Teamboard = () => {
  //Dashboard
  const [disable, setdisable] = useState(false);
  const [scoreboard, setScoreboard] = useReplicant("scoreboard");
  const toggle = e => {
    setdisable(true);
    setTimeout(() => setdisable(false), 1000);
    nodecg.sendMessage("scoreboard-toggle", null);
  };
  const update = () => {
    setScoreboard({
      blue: { score: blueScore, team: blueSelect },
      red: { score: redScore, team: redSelect }
    });
  };
  const teams = useReplicant("team-data")[0];
  //Blue
  const [blueScore, setBlueScore] = useState(0);
  const [blueSelect, setBlueSelect] = React.useState({ base: "" });

  const handleBlueTeam = e => {
    setBlueSelect(e.target.value);
  };
  //Red
  const [redScore, setRedScore] = useState(0);
  const [redSelect, setRedSelect] = React.useState({ base: "" });

  const handleRedTeam = e => {
    setRedSelect(e.target.value);
  };

  const swap = () => {
    setBlueScore(redScore);
    setBlueSelect(redSelect);
    setRedScore(blueScore);
    setRedSelect(blueSelect);
  };

  const reset = () => {
    setBlueScore(0);
    setBlueSelect("");
    setRedScore(0);
    setRedSelect("");
  };

  return (
    <div>
      <Grid
        container
        spacing={3}
        justify="space-between"
        alignItems="center"
        className="teamContainer"
      >
        <Grid item xs>
          <Grid container direction="column" spacing={2} className="group">
            <Typography gutterBottom variant="h5">
              BLUE
            </Typography>

            <FormControl>
              <InputLabel>Team</InputLabel>
              <Select
                displayEmpty
                value={blueSelect}
                onChange={handleBlueTeam}
                style={{ height: 50 }}
              >
                {teams &&
                  teams.map(team => {
                    return (
                      <MenuItem value={team} key={uuid()}>
                        <Typography variant="body1">{team.name}</Typography>
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>

            <Grid
              container
              className="gutter"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h1">{blueScore}</Typography>
              <Button
                className="square"
                onClick={() => setBlueScore(blueScore + 1)}
              >
                <Icon>keyboard_arrow_up</Icon>
              </Button>
              <Button
                className="square"
                onClick={() => setBlueScore(blueScore - 1)}
              >
                <Icon>keyboard_arrow_down</Icon>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button style={{ height: 50 }} onClick={swap}>
            <Icon>swap_horiz</Icon>
          </Button>
        </Grid>
        <Grid item xs>
          <Grid container direction="column" spacing={2} className="group">
            <Typography gutterBottom variant="h5">
              RED
            </Typography>

            <FormControl>
              <InputLabel>Team</InputLabel>
              <Select
                displayEmpty
                value={redSelect}
                onChange={handleRedTeam}
                style={{ height: 50 }}
              >
                {teams &&
                  teams.map(team => {
                    return (
                      <MenuItem value={team} key={uuid()}>
                        <Typography variant="body1">{team.name}</Typography>
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>

            <Grid
              container
              className="gutter"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h1">{redScore}</Typography>
              <Button
                className="square"
                onClick={() => setRedScore(redScore + 1)}
              >
                <Icon>keyboard_arrow_up</Icon>
              </Button>
              <Button
                className="square"
                onClick={() => setRedScore(redScore - 1)}
              >
                <Icon>keyboard_arrow_down</Icon>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justify="center" spacing={1} className="teamOptions">
        <Grid item>
          <Button
            variant="outlined"
            disabled={disable}
            onClick={toggle}
            color="primary"
          >
            TOGGLE
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={reset}>
            RESET
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary" onClick={update}>
            UPDATE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const Scoreboard = () => {
  const scoreboard = useReplicant("scoreboard")[0];
  console.log(scoreboard);
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Typography variant="h5" color="primary" className="textCenter">
            {scoreboard &&
              `${scoreboard.blue.team.name && scoreboard.blue.team.name} | ${
                scoreboard.blue.score
              } : ${scoreboard.red.score} | ${scoreboard.red.team.name &&
                scoreboard.red.team.name}`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" className="textCenter">
            *Scoreboard represented same on stream*
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: 5 }}>
          <Teamboard />
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Scoreboard />, document.getElementById("root"));
