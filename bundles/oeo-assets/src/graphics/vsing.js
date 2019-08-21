import React from "react";
import reactDOM from "react-dom";
import attack from "../images/attack.png";
import defence from "../images/defence.png";
import Anime from "react-anime";
import "../styles/graphics.scss";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useReplicant } from "use-nodecg";
import Swipe from "../components/Swipe.jsx";
import Particles from "react-particles-js";
import logo from "../images/animlogo.gif";

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

const Box = props => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        backgroundColor: props.color,
        width: props.size,
        height: props.size
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

export default function Main() {
  const Scores = props => {
    return (
      <Center className="ignore">
        <Grid container justify="center" alignItems="center" direction="column">
          <Anime opacity={[0, 1]} delay={1000}>
            <img src={logo} height="50" style={{ margin: 10 }} />
          </Anime>
          <Grid container justify="center" alignItems="center">
            <Anime opacity={[0, 1]} delay={1750} ease="linear">
              <Typography variant="h2" className="pad">
                {props.blue}
              </Typography>
            </Anime>

            <Swipe delay={1750}>
              <div className="black" style={{ padding: 15 }}>
                <img height="45" src={defence} />
              </div>
            </Swipe>
            <Swipe delay={1500}>
              <div className="glow">
                <Box size={100} color="#ee9b51">
                  VS
                </Box>
              </div>
            </Swipe>
            <Swipe delay={1750}>
              <div className="black" style={{ padding: 15 }}>
                <img height="45" src={attack} />
              </div>
            </Swipe>
            <Anime opacity={[0, 1]} delay={1750} ease="linear">
              <Typography
                variant="h2"
                className="pad"
                style={{ color: "white" }}
              >
                {props.red}
              </Typography>
            </Anime>
          </Grid>
        </Grid>
      </Center>
    );
  };
  const TeamBox = ({ logo, name, setClass, text }) => {
    return (
      <Anime {...properties} width={[0, "50%"]}>
        <div
          className={setClass}
          style={{ overflow: "hidden", height: "100%" }}
        >
          <Center direction="column" style={{ height: "100%" }}>
            <img
              src={logo}
              className="teamLogo imgShadow"
              style={{ marginBottom: 15 }}
            />
            <Typography
              variant="h3"
              style={{ width: 750, textAlign: "center", color: text }}
            >
              {name}
            </Typography>
          </Center>
        </div>
      </Anime>
    );
  };

  const particles = {
    params: {
      particles: {
        number: { value: 75 },
        opacity: { anim: { enable: false }, value: 1 },
        move: {
          speed: 5,
          out_mode: "out"
        },
        size: {
          value: 3
        }
      }
    }
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
      <Particles color="#FFFFFF" {...particles} className="ignore" />
      <Grid container alignItems="stretch" className="ignore">
        <TeamBox
          logo={blueURL}
          name={scoreboard && scoreboard.blue.team.name.toUpperCase()}
          setClass="white-oeo"
          text="black"
        />
        <TeamBox
          logo={redURL}
          name={scoreboard && scoreboard.red.team.name.toUpperCase()}
          text="white"
        />
      </Grid>
      <Scores
        blue={scoreboard && scoreboard.blue.score}
        red={scoreboard && scoreboard.red.score}
      />
    </div>
  );
}

reactDOM.render(<Main />, document.getElementById("root"));
