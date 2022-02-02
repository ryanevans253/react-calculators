import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <Typography variant="h5" gutterBottom component="div" sx={{ mx: 1 }}>
          Acquisition Costs
        </Typography>
        <div>
          <TextField
            label="Purchase Price"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Closing Costs"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </div>
        <Typography variant="h5" gutterBottom component="div" sx={{ mx: 1 }}>
          Disposition Costs
        </Typography>
        <div>
          <TextField
            label="Sales Closing Costs"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Agent Commissions"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">%</InputAdornment>
              ),
            }}
          />
        </div>
        <Typography variant="h5" gutterBottom component="div" sx={{ mx: 1 }}>
          Estimates
        </Typography>
        <div>
          <TextField
            label="After Repair Value"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Desired Profit"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </div>
        <Typography variant="h5" gutterBottom component="div" sx={{ mx: 1 }}>
          Renovation Costs
        </Typography>
        <div>
          <TextField
            label="Repair Costs"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "16ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Holding Time"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "16ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">#Mo.</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Monthly Holding Cost"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "16ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </div>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          fullWidth={true}
          sx={{ mx: 1 }}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
}
