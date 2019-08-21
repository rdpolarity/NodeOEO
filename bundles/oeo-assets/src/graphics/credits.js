import React from "react";
import reactDOM from "react-dom";
import Slider from "react-slick";
import { Typography, Grid, Paper } from "@material-ui/core";
import "../styles/graphics.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import creditData from "../data/credits.json";
import ParticleScatter from "../components/ParticleScatter.jsx";
import whitelogo from "../images/whitelogo.png";

export default function Main() {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="ignore black-oeo">
      <Grid
        container
        justify="center"
        alignItems="flex-end"
        className="ignore pad"
      >
        <img src={whitelogo} width="100px" />
      </Grid>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        className="ignore"
        style={{ textAlign: "center", transform: "scale(1.1)" }}
      >
        <Typography variant="h1" style={{ color: "white" }}>
          THANKS
        </Typography>
        <Typography variant="h3" style={{ color: "white" }}>
          FOR WATCHING!
        </Typography>
        <Slider {...settings} style={{ width: 500 }}>
          {creditData.map(({ title, players }) => {
            return (
              <div>
                <Typography
                  variant="h2"
                  style={{ color: "#ee9b51" }}
                  className="glow"
                >
                  {title.toUpperCase()}
                </Typography>
                {players.map(player => {
                  return (
                    <Typography varient="body1" style={{ color: "white" }}>
                      {player}
                    </Typography>
                  );
                })}
              </div>
            );
          })}
        </Slider>
      </Grid>
      {/* <ParticleScatter color="#ee9b51" amount={50} /> */}
    </div>
  );
}

reactDOM.render(<Main />, document.getElementById("root"));
