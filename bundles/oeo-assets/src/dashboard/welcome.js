import React from "react";
import ReactDOM from "react-dom";
import { Grid, Typography } from "@material-ui/core";
import logo from "../images/animlogo.gif";
import "../styles/dashboard.scss";

export default function Main() {
  return (
    <Grid container justify="center" direction="column" alignItems="center">
      <img src={logo} className="logo" />
      <Typography variant="h5" className="textCenter">
        NodeOEO Dashboard
      </Typography>
      <Typography variant="body2" className="textCenter">
        Designed & Developed by RDPolarity
      </Typography>
    </Grid>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
