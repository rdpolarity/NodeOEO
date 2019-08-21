import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Typography, Grid, Button, Icon, Paper } from "@material-ui/core";
import uuid from "uuid";
import logo from "../images/animlogo.gif";
// styles
import "../styles/graphics.scss";
import Anime from "../components/Anime";
import { useReplicant } from "use-nodecg";
import Swipe from "../components/Swipe.jsx";

import attack from "../images/attack.png";
import defence from "../images/defence.png";

nodecg.log.info("[OEO] Session Started");

let delay = 3000;

const Logo = () => {
  return (
    <Grid container justify="flex-end" alignItems="flex-end" className="ignore">
      <Grid item>
        <Anime opacity={[0, 1]} delay={delay}>
          <img src={logo} className="logo" />
        </Anime>
      </Grid>
    </Grid>
  );
};

const Scoreboard = props => {
  const [show, setShow] = useState(true);
  const showSwitch = () => {
    show ? setShow(false) : setShow(true);
  };

  useEffect(() => {
    const handler = msg => {
      showSwitch();
    };
    nodecg.listenFor("scoreboard-toggle", handler);
    return () => {
      nodecg.unlisten("scoreboard-toggle", handler);
    };
  });

  const animProps = {
    render: show,
    easing: "easeInOutExpo",
    opacity: [0, 1]
  };

  const Box = props => {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          backgroundColor: props.color,
          width: props.width,
          height: 50
        }}
      >
        <Grid item>
          <Typography variant="h4" style={{ color: "white" }}>
            {props.children}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  const ScoreData = props => {
    const { team, score, img, icon, ...properties } = props;
    useEffect(() => {
      setTimeout(() => {
        delay = 0;
      }, 1100);
    }, []);
    return (
      <Grid container style={{ height: "100%" }} {...properties}>
        {/* <Swipe delay={delay + 700}>
          <Box color="black">
            <img height="25" src={icon} />
          </Box>
        </Swipe> */}
        <Swipe delay={delay + 900}>
          <Box color="#ee9b51">{score}</Box>
        </Swipe>
        <Anime opacity={[0, 1]} delay={delay + 1100}>
          <img height="50" width="50" src={img ? img : ""} />
        </Anime>
        <Anime opacity={[0, 1]} delay={delay + 1200} easing="linear">
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ margin: "0px 10px 0px 10px" }}
          >
            {team && team.toUpperCase()}
          </Typography>
        </Anime>
      </Grid>
    );
  };
  Box.defaultProps = {
    width: 50
  };

  const scoreboard = useReplicant("scoreboard")[0];
  const blueURL =
    scoreboard && scoreboard.blue.team.hasOwnProperty("logo")
      ? scoreboard.blue.team.logo.url
      : "";
  const redURL =
    scoreboard && scoreboard.red.team.hasOwnProperty("logo")
      ? scoreboard.red.team.logo.url
      : "";

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        className="ignore"
      >
        <Swipe delay={delay + 1500}>
          <Typography
            style={{
              minWidth: 200,
              overflow: "hidden",
              color: "white"
            }}
            className="black round-bottom center"
            variant="h5"
          >
            ROUND{" "}
            {scoreboard && scoreboard.blue.score + scoreboard.red.score + 1}
          </Typography>
        </Swipe>
      </Grid>
      <Grid
        container
        className="ignore"
        style={{ padding: "10px 50px 0px 50px" }}
        justify="space-between"
      >
        <Swipe delay={delay}>
          <Paper style={{ height: 50, width: 700, overflow: "hidden" }}>
            <ScoreData
              container
              justify="flex-start"
              direction="row-reverse"
              alignItems="center"
              img={blueURL}
              team={scoreboard && scoreboard.blue.team.name}
              score={scoreboard && scoreboard.blue.score}
              icon={defence}
            />
          </Paper>
        </Swipe>
        <Swipe delay={delay}>
          <Paper style={{ height: 50, width: 700 }}>
            <ScoreData
              img={redURL}
              team={scoreboard && scoreboard.red.team.name}
              score={scoreboard && scoreboard.red.score}
              icon={attack}
              alignItems="center"
            />
          </Paper>
        </Swipe>
      </Grid>
    </div>
  );
};

export default function Frame() {
  return (
    <div>
      <Logo />
      <Scoreboard />
    </div>
  );
}

ReactDOM.render(<Frame />, document.getElementById("root"));
