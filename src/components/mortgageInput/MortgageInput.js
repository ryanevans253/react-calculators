import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { useState } from "react";
import "./mortgageInput.css";

export default function MortgageInput(props) {
  const [advancedOptions, setAdvancedOptions] = useState(true);
  const handleAdvancedToggle = () => setAdvancedOptions(!advancedOptions);

  //for monthly principal and interest
  const handlePurchaseChange = (e) =>
    props.onPurchasePriceChange(parseInt(e.target.value));
  const handleInterestChange = (e) =>
    props.onInterestChange(parseInt(e.target.value));
  const handleDownPaymentChange = (e) =>
    props.onDownPaymentChange(parseInt(e.target.value));
  const handleLoanLengthChange = (e) =>
    props.onLoanLengthChange(parseInt(e.target.value));

  //for advanced options
  const handleTaxesChange = (e) =>
    props.onTaxesChange(parseInt(e.target.value));
  const handleInsuranceChange = (e) =>
    props.onInsuranceChange(parseInt(e.target.value));
  const handleHOAChange = (e) => props.onHoaChange(parseInt(e.target.value));

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
            onChange={handleDownPaymentChange}
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
            onChange={handleLoanLengthChange}
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
            onChange={handleInterestChange}
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
            onChange={handleInsuranceChange}
            defaultValue={1500}
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
            onChange={handleTaxesChange}
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
            onChange={handleHOAChange}
            defaultValue={0}
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
