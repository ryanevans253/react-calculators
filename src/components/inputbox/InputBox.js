import * as React from "react";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

export default function InputArea(props) {
  const handlePurchaseChange = (e) => props.onPurchaseChange(e.target.value);
  const handleClosingChange = (e) => props.onClosingChange(e.target.value);
  const handleSaleClosingChange = (e) =>
    props.onSaleClosingChange(e.target.value);
  const handleCommissionChange = (e) =>
    props.onCommissionChange(e.target.value);
  const handleARVChange = (e) => props.onARVChange(e.target.value);
  const handleProfitChange = (e) => props.onProfitChange(e.target.value);
  const handleRepairChange = (e) => props.onRepairChange(e.target.value);
  const handleHoldingTimeChange = (e) =>
    props.onHoldingTimeChange(e.target.value);
  const handleHoldingCostChange = (e) =>
    props.onHoldingCostChange(e.target.value);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ mx: 1, color: "#448FF2" }}
          >
            Acquisition Costs
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            onChange={handlePurchaseChange}
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
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            onChange={handleClosingChange}
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
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ mx: 1, color: "#448FF2" }}
          >
            Disposition Costs
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            onChange={handleSaleClosingChange}
            defaultValue={20000}
            label="Sales Closing Costs"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            onChange={handleCommissionChange}
            defaultValue={6}
            label="Agent Commissions"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">%</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ mx: 1, color: "#448FF2" }}
          >
            Estimates
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            onChange={handleARVChange}
            defaultValue={460000}
            label="After Repair Value"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            onChange={handleProfitChange}
            defaultValue={40000}
            label="Desired Profit"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{ mx: 1, color: "#448FF2" }}
          >
            Renovation Costs
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            onChange={handleRepairChange}
            defaultValue={35000}
            label="Repair Costs"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            onChange={handleHoldingTimeChange}
            defaultValue={9}
            label="Holding Time"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">#Mo.</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            onChange={handleHoldingCostChange}
            defaultValue={350}
            label="Monthly Holding Cost"
            id="outlined-start-adornment"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
