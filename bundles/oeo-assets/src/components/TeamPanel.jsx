import React from "react";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  OutlinedInput,
  Icon
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
  const getSide = () => {
    if (props.blue) return "BLUE";
    if (props.red) return "RED";
  };
  return (
    <Grid item>
      <Grid container direction="column" spacing={2} className="teamGroup">
        <Typography gutterBottom variant="h5">
          {getSide()}
        </Typography>
        <TextField variant="outlined" label="Name" />
        <Grid container>
          <TextField variant="outlined" label="Score" />
          <Button>
            <Icon>keyboard_arrow_up</Icon>
          </Button>
          <Button>
            <Icon>keyboard_arrow_down</Icon>
          </Button>
        </Grid>
        <Select input={<OutlinedInput name="logo" />}>
          <MenuItem>testlogo.png</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
}
