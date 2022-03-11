import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { useState } from "react";

export default function MortgageInput(props) {
  //handleChange functions here

  const [advancedOptions, setAdvancedOptions] = useState(false);

  //   const showAdvancedOptions = () => {
  //     advancedOptions === "display: none"
  //       ? setAdvancedOptions("")
  //       : setAdvancedOptions("display: none");
  //   };

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
            // onChange={handlePurchaseChange}
            defaultValue={325000}
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
            defaultValue={5500}
            label="Closing Costs"
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
          onClick={() => setAdvancedOptions((s) => !s)}
          variant="h6"
          gutterBottom
          component="div"
          sx={{ mx: 2, color: "#448FF2" }}
        >
          Show Advanced Options
        </Typography>
        <div sx={{ display: "none" }}>
          <Grid item xs={12}>
            <TextField
              sx={{ display: "block" }}
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
          <Grid item xs={12}>
            <TextField
              sx={{ display: "none" }}
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
          <Grid item xs={12}>
            <TextField
              sx={{ display: "none" }}
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
        </div>
      </Grid>
    </div>
  );
}
