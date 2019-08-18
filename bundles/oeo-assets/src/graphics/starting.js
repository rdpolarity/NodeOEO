import React, { useState, useEffect } from "react";
import reactDOM from "react-dom";
import { Button, Grid, Typography } from "@material-ui/core";
import "../styles/starting.scss";
import logo from "../images/animlogo.gif";
import Particles from "react-particles-js";
// import sydney from "../videos/sydney.webm";
import anime from "animejs";
import Countdown from "react-countdown-now";

const key = "_aFcDPiO7vg";
const yt = ["version=3", `playlist=${key}`, "loop=1", "autoplay=1", "end=3"];

const currentTime = nodecg.Replicant("time");

setInterval(() => {
  let val = currentTime.value;
  val > 0 && (currentTime.value = val - 1);
}, 1000);

export default function Starting() {
  const [time, setTime] = useState(nodecg.readReplicant("time"));
  useEffect(() => {
    if (currentTime.value < 30) {
      anime({
        targets: ".timer",
        scale: [1, 1.1, 1],
        easing: "linear",
        duration: 500
      });
    }
  });
  useEffect(() => {
    currentTime.on(`change`, value => {
      let minutes = value / 60;
      minutes = minutes.toString().split(".")[0];
      let seconds = value % 60;
      setTime(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
    });
  }, []);
  return (
    <div>
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
      <Grid
        container
        direction="column"
        justify="center"
        className="ignore fit"
        alignItems="center"
      >
        <img src={logo} />

        <div className="border" style={{ margin: 10 }}>
          <Typography
            className="timer"
            style={{ color: currentTime.value < 30 ? "red" : "white" }}
            variant="h1"
          >
            {`${time}`}
          </Typography>
        </div>
        <Typography variant="body2">STARTING SOON</Typography>
      </Grid>
    </div>
  );
}

reactDOM.render(<Starting />, document.getElementById("root"));
