import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Typography, Grid, Button, Icon, Paper } from "@material-ui/core";
import uuid from "uuid";
import logo from "../images/animlogo.gif";
// styles
import "../styles/graphics.scss";
import Anime from "../components/Anime";
const intro = new Audio(trickle);
import trickle from "../sounds/trickle.wav";
const outro = new Audio(trickle);

nodecg.log.info("[OEO] Session Started");

const Logo = () => {
  return (
    <Grid container justify="flex-end" alignItems="flex-end" className="ignore">
      <Grid item>
        <img src={logo} className="logo" />
      </Grid>
    </Grid>
  );
};

const Swipe = ({ children }) => {
  return (
    <Anime
      duration={1000}
      timeout={4000}
      opacity={[0, 1]}
      translateX={[-50, 0]}
      borderRadius={["100%", 0]}
      easing="easeOutExpo"
    >
      {children}
    </Anime>
  );
};

const Annoucements = () => {
  const [items, setItems] = useState([]);

  const add = msg => {
    setItems([...items, { id: uuid(), text: msg }]);
  };

  useEffect(() => {
    const handler = msg => {
      add(msg);
    };
    nodecg.listenFor("annoucement-msg", handler);
    return () => {
      nodecg.unlisten("annoucement-msg", handler);
    };
  });

  return (
    <div>
      {items.map(({ id, text }) => (
        <Swipe key={id}>
          <Paper
            elevation={20}
            className="white"
            style={{ width: 400, height: 150, margin: 10, overflow: "hidden" }}
          >
            <div className="primary" style={{ width: "100%", padding: 10 }}>
              <Typography variant="h5">
                <Icon>info</Icon>Annoucement
              </Typography>
            </div>
            <Anime
              width={["100%", 0]}
              opacity={[1, 1]}
              duration={6000}
              easing="linear"
            >
              <div style={{ height: 5, backgroundColor: "lightBlue" }} />
            </Anime>

            <Typography
              style={{ padding: 10 }}
              color="textPrimary"
              variant="h6"
            >
              {text}
            </Typography>
          </Paper>
        </Swipe>
      ))}
    </div>
  );
};

const Scoreboard = props => {
  const [show, setShow] = useState(true);
  const showSwitch = () => {
    show ? setShow(false) : setShow(true);
  };

  useEffect(() => {
    intro.play();
    const handler = msg => {
      showSwitch();
    };
    nodecg.listenFor("scoreboard-toggle", handler);
    return () => {
      outro.play();
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
          height: "100%"
        }}
      >
        <Grid item>
          <Typography variant="h4">{props.children}</Typography>
        </Grid>
      </Grid>
    );
  };

  const ScoreData = props => {
    const { team, score, ...properties } = props;
    return (
      <Grid container style={{ height: "100%" }} {...properties}>
        <Box color="black">
          <Icon>info</Icon>
        </Box>
        <Box color="#ee9b51">{score}</Box>

        <Typography
          variant="h4"
          color="textPrimary"
          style={{ margin: "0px 10px 0px 10px" }}
        >
          {team}
        </Typography>
      </Grid>
    );
  };
  Box.defaultProps = {
    width: 50
  };

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="flex-start"
        className="ignore"
      >
        <Anime render={show} opacity={[0, 1]} easing="easeInOutExpo">
          <Typography
            style={{ minWidth: 200, overflow: "hidden" }}
            className="black round-bottom center"
            variant="h5"
          >
            ROUND 1
          </Typography>
        </Anime>
      </Grid>
      <Grid
        container
        className="ignore"
        style={{ padding: "10px 50px 0px 50px" }}
        justify="space-between"
      >
        <Anime {...animProps} translateX={[-100, 0]}>
          <Paper style={{ height: 50, width: 700, overflow: "hidden" }}>
            <ScoreData
              container
              justify="flex-start"
              direction="row-reverse"
              alignItems="center"
              team="team1"
              score={1}
            />
          </Paper>
        </Anime>
        <Anime {...animProps} translateX={[100, 0]}>
          <Paper style={{ height: 50, width: 700 }}>
            <ScoreData team="team2" score={2} alignItems="center" />
          </Paper>
        </Anime>
      </Grid>
    </div>
  );
};

export default function Frame() {
  return (
    <div>
      <Logo />
      <Scoreboard />

      <Grid
        container
        alignItems="flex-end"
        className="ignore"
        style={{ padding: 25 }}
      >
        <Annoucements />
      </Grid>
    </div>
  );
}

ReactDOM.render(<Frame />, document.getElementById("root"));
