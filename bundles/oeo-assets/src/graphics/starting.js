import React, { useState, useEffect } from "react";
import reactDOM from "react-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import logo from "../images/logo.png";
import Particles from "react-particles-js";
// import sydney from "../videos/sydney.webm";
import Anime from "react-anime";
import { useReplicant } from "use-nodecg";

import uuid from "uuid";

const key = "_aFcDPiO7vg";
const yt = ["version=3", `playlist=${key}`, "loop=1", "autoplay=1", "end=3"];

const currentTime = nodecg.Replicant("time");

setInterval(() => {
  let val = currentTime.value;
  val > 0 && (currentTime.value = val - 1);
}, 1000);

const glow = color => {
  return { filter: `drop-shadow(0px 0px 10px ${color})` };
};

const particles = {
  params: {
    particles: {
      number: { value: 50 },
      color: { value: ["#FFFFFF", "#ee9b51"] },
      opacity: { anim: { enable: false }, value: 1 },
      move: {
        speed: 1,
        out_mode: "out"
      },
      shape: {
        type: ["circle"],
        stroke: {
          width: 5,
          color: ["#ee9b51"]
        }
      },
      size: {
        value: 10
      },
      line_linked: {
        color: "#ee9b51"
      }
    }
  }
};

export default function Starting() {
  const time = useReplicant("time")[0];
  let minutes = time ? time / 60 : 0;
  if (time) {
    minutes = minutes.toString().split(".")[0];
  }
  let seconds = time ? time % 60 : 0;

  const [show, setShow] = useState(true);
  const [items, setItems] = useState(["test", "item"]);

  // useEffect(() => setShow(true), []);

  const hide = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="ignore white" />
      <Particles className="ignore fit" {...particles} />
      <div className="ignore grad" />
      <Grid
        container
        direction="column"
        justify="center"
        className="ignore"
        alignItems="center"
      >
        <img src={logo} height="150" style={glow("rgba(0,0,10,0.2)")} />
        <div style={{ margin: 10 }}>
          <Typography
            className="timer"
            style={{ color: currentTime.value < 30 ? "#ff4d4f" : "#111111" }}
            variant="h3"
          >
            {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
          </Typography>
        </div>
        <Typography variant="body2">STARTING SOON</Typography>
      </Grid>
    </div>
  );
}

reactDOM.render(<Starting />, document.getElementById("root"));
