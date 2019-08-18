import React from "react";
import reactDOM from "react-dom";
import Anime from "react-anime";
import "../styles/graphics.scss";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useReplicant } from "use-nodecg";

const Center = props => {
  const { children, ...properties } = props;
  return (
    <Grid container justify="center" {...properties} alignItems="center">
      {children}
    </Grid>
  );
};

const delay = 0;
const properties = {
  duration: 2000,
  easing: "easeInOutExpo",
  delay: delay
};

const Scores = props => {
  return (
    <Center className="ignore">
      <Typography variant="h2">{props.blue}</Typography>

      <div className="black pad">
        <Typography variant="h2">VS</Typography>
      </div>

      <Typography variant="h2">{props.red}</Typography>
    </Center>
  );
};

export default function Main() {
  const TeamBox = ({ logo, name, setClass }) => {
    return (
      <Anime {...properties} width={[0, "50%"]}>
        <div
          className={setClass}
          style={{ overflow: "hidden", height: "100%" }}
        >
          <Center direction="column" style={{ height: "100%" }}>
            <img src={logo} className="teamLogo imgShadow" />
            <Typography
              variant="h2"
              className="textShadow"
              style={{ width: 750, textAlign: "center" }}
            >
              {name}
            </Typography>
          </Center>
        </div>
      </Anime>
    );
  };

  const scoreboard = useReplicant("scoreboard")[0];
  const blueURL =
    scoreboard &&
    (scoreboard.blue.team.hasOwnProperty("logo")
      ? scoreboard.blue.team.logo.url
      : "");
  const redURL =
    scoreboard &&
    (scoreboard.red.team.hasOwnProperty("logo")
      ? scoreboard.red.team.logo.url
      : "");
  return (
    <div className="ignore">
      <Grid container alignItems="stretch" className="ignore">
        <TeamBox
          logo={blueURL}
          name={scoreboard && scoreboard.blue.team.name}
          setClass="primary"
        />
        <TeamBox logo={redURL} name={scoreboard && scoreboard.blue.team.name} />
      </Grid>

      <Scores
        blue={scoreboard && scoreboard.blue.score}
        red={scoreboard && scoreboard.red.score}
      />
    </div>
  );
}

reactDOM.render(<Main />, document.getElementById("root"));
