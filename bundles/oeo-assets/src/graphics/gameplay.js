import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Typography, Grid } from "@material-ui/core";
// Assets & Styles
import "../styles/graphics.scss";
import logo from "../images/logo.png";

nodecg.log.info("[OEO] Session Started");

export default function Frame() {
  const [message, setMessage] = useState("INCOMING");
  nodecg.listenFor("printMessage", msg => {
    console.log(`Recieved: "${msg}"`);
    setMessage(msg);
  });

  return (
    <div>
      <Grid
        container
        justify="flex-end"
        alignItems="flex-end"
        className="ignore"
      >
        <Grid item>
          <img src={logo} className="logo" />
        </Grid>
      </Grid>
      <button>test</button>
      <Typography
        style={{ color: "white" }}
        variant="h1"
      >{`${message}`}</Typography>
    </div>
  );
}

ReactDOM.render(<Frame />, document.getElementById("root"));
