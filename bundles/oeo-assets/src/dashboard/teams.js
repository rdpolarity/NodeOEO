import React from "react";
import ReactDOM from "react-dom";
import {
  Typography,
  Grid,
  Button,
  Icon,
  TextField,
  Select,
  MenuItem,
  Input,
  FormControl,
  InputLabel
} from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "../styles/dashboard.scss";
import uuid from "uuid";
import { useReplicant } from "use-nodecg";

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

nodecg.Replicant("team-data");

export default function Main() {
  const logos = useReplicant("assets:teamLogos")[0];
  const [teamData, setTeamData] = useReplicant("team-data");
  const [name, setName] = React.useState("");
  const [select, setSelect] = React.useState({ base: "" });
  const handleLogo = e => {
    setSelect(e.target.value);
  };

  const handleNewTeam = () => {
    setTeamData([...teamData, { name: name, logo: select }]);
  };

  return (
    <div style={{ marginTop: 10 }}>
      <Typography variant="h5">Team List</Typography>
      {teamData &&
        teamData.map(team => {
          return (
            <Grid
              container
              justify="space-between"
              alignItems="center"
              key={uuid()}
            >
              <Typography variant="body2">{team.name}</Typography>
              <Typography variant="body2">{team.logo.base}</Typography>
              <Button
                style={{ color: "red" }}
                onClick={() =>
                  setTeamData(teamData.filter(value => value !== team))
                }
              >
                <Icon>close</Icon>
              </Button>
            </Grid>
          );
        })}
      <Grid
        container
        alignItems="center"
        justify="space-between"
        spacing={1}
        className="group"
      >
        <Grid item>
          <TextField
            variant="outlined"
            label="Team Name"
            onChange={e => setName(e.target.value)}
          />
        </Grid>
        <FormControl style={{ height: "100%" }}>
          <InputLabel>Logo</InputLabel>
          <Select
            name="Logo"
            displayEmpty
            autoWidth
            value={select}
            onChange={handleLogo}
            style={{ width: 300 }}
          >
            {logos &&
              logos.map(logo => {
                return (
                  <MenuItem key={uuid()} value={logo}>
                    <div
                      style={{ backgroundImage: `url(${logo.url})` }}
                      className="logoPreview"
                    />
                    <Typography variant="body1">{logo.base}</Typography>
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>

        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleNewTeam()}
          >
            ADD
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Main />
  </MuiThemeProvider>,
  document.getElementById("root")
);
