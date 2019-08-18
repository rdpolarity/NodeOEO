import React from "react";
import reactDOM from "react-dom";
import Slider from "react-slick";
import { Typography, Grid } from "@material-ui/core";
import "../styles/graphics.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import creditData from "../data/credits.json";

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
    <Grid
      container
      alignItems="center"
      justify="center"
      direction="column"
      className="ignore"
      style={{ textAlign: "center", transform: "scale(1.5)" }}
    >
      <Typography className="textShadow" variant="h1">
        THANKS
      </Typography>
      <Typography className="textShadow" variant="h3">
        FOR WATCHING!
      </Typography>
      <Slider {...settings} style={{ width: 500 }}>
        {creditData.map(({ title, players }) => {
          return (
            <div>
              <Typography
                className="textShadow"
                variant="h2"
                style={{ color: "#ee9b51" }}
              >
                {title.toUpperCase()}
              </Typography>
              {players.map(player => {
                return (
                  <Typography className="textShadow" varient="body1">
                    {player}
                  </Typography>
                );
              })}
            </div>
          );
        })}
      </Slider>
    </Grid>
  );
}

reactDOM.render(<Main />, document.getElementById("root"));
