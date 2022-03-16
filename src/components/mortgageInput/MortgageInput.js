import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { useState } from "react";
import "./mortgageInput.css";

export default function MortgageInput(props) {
  const [advancedOptions, setAdvancedOptions] = useState(true);
  const handleAdvancedToggle = () => setAdvancedOptions(!advancedOptions);

  //from app
  const handlePurchaseChange = (e) =>
    props.onPurchasePriceChange(parseInt(e.target.value));

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ mx: 1, color: "#448FF2" }}
          >
            Mortgage Calculator
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            onChange={handlePurchaseChange}
            defaultValue={100000}
            label="Purchase Price"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            // onChange={handleClosingChange}
            defaultValue={20}
            label="Down Payment"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">%</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            // onChange={handleClosingChange}
            defaultValue={30}
            label="Length of Loan"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            // onChange={handleClosingChange}
            defaultValue={4.2}
            label="Interest Rate"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        {/* /////////////////////////////////////////////////////////////////////////// extras */}
        <Typography
          className="advancedOptionsLink"
          onClick={handleAdvancedToggle}
          variant="h6"
          gutterBottom
          component="div"
          sx={{ mx: 2, color: "#448FF2" }}
        >
          Show Advanced Options
        </Typography>
        <Grid className={advancedOptions ? "hide" : ""} item xs={12}>
          <TextField
            fullWidth
            // onChange={handleClosingChange}
            defaultValue={1200}
            label="Homeowners Insurance"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid className={advancedOptions ? "hide" : ""} item xs={12}>
          <TextField
            fullWidth
            // onChange={handleClosingChange}
            defaultValue={2500}
            label="Property Taxes"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid className={advancedOptions ? "hide" : ""} item xs={12}>
          <TextField
            fullWidth
            // onChange={handleClosingChange}
            defaultValue={50}
            label="Yearly HOA Fees"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
