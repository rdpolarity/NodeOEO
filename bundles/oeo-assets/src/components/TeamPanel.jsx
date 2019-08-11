import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  OutlinedInput,
  Icon,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antarctica" },
  { label: "Antigua and Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Aruba" },
  { label: "Australia" }
];

export default function TeamPanel(props) {
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const handleTeam = e => {
    team = e.target.value;
  };
  const getSide = () => {
    if (props.blue) return "BLUE";
    if (props.red) return "RED";
  };
  return (
    <Grid item>
      <Grid container direction="column" spacing={2} className="group">
        <Typography gutterBottom variant="h5">
          {getSide()}
        </Typography>
        <TextField className="gutter" variant="outlined" label="Name" />
        <Grid container className="gutter">
          <TextField variant="outlined" label="Score" />
          <Button>
            <Icon>keyboard_arrow_up</Icon>
          </Button>
          <Button>
            <Icon>keyboard_arrow_down</Icon>
          </Button>
        </Grid>
        <FormControl style={{ marginTop: 5 }} variant="outlined">
          <InputLabel ref={inputLabel} htmlFor="team-logo">
            Age
          </InputLabel>
          <Select
            value=""
            input={
              <OutlinedInput
                labelWidth={labelWidth}
                id="team-logo"
                name="logo"
              />
            }
          >
            <MenuItem value={10}>testlogo.png</MenuItem>
            <MenuItem value={10}>testlogo.png</MenuItem>
            <MenuItem value={10}>testlogo.png</MenuItem>
            <MenuItem value={10}>testlogo.png</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
