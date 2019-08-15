import React from "react";
import reactDOM from "react-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import "../styles/starting.scss";
import logo from "../images/animlogo.gif";
import Anime from "../components/Anime";
import Particles from "react-particles-js";
import sydney from "../videos/sydney.webm";

const key = "_aFcDPiO7vg";
const yt = ["version=3", `playlist=${key}`, "loop=1", "autoplay=1", "end=3"];

export default function Starting() {
  return (
    <div>
      <Anime opacity={[0, 1]}>
        <div className="ignore fit" style={{ overflow: "hidden" }}>
          <video width="1920" height="1080" className="video" autoPlay loop>
            <source src={sydney} type="video/webm" />
          </video>
        </div>
      </Anime>
      <Particles
        className="ignore fit"
        params={{
          particles: {
            number: { value: 160 },
            color: { value: "#FFFFFF" },
            opacity: { value: 1 }
          }
        }}
      />
      <div className="ignore blend fit" />
      <Anime opacity={[0, 1]}>
        <Grid
          container
          direction="column"
          justify="center"
          className="ignore fit"
          alignItems="center"
        >
          <img src={logo} />
          <Typography style={{ margin: 5 }} variant="body2">
            STARTING SOON
          </Typography>
          <Typography style={{ margin: 5 }} className="border" variant="h1">
            5:00
          </Typography>
        </Grid>
      </Anime>
    </div>
  );
}

reactDOM.render(<Starting />, document.getElementById("root"));
