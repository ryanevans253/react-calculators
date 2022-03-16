import React, { useState, useEffect } from "react";
import PersistentDrawerRight from "./components/drawerNav/Navigation.js";
import MortgageInput from "./components/mortgageInput/MortgageInput.js";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import MortgageChart from "./components/mortgageChart/MortgageChart.js";
import { Typography } from "@mui/material";
import Results from "./components/flipResults/FlipResults";

function Mortgage() {
  const [purchasePrice, setPurchasePrice] = useState(100000);
  const [interestRate, setInterestRate] = useState(3.4);
  const [downPayment, setDownPayment] = useState(20);
  const [loanLength, setLoanLength] = useState(360);

  //advanced

  const [yearlyTaxes, setYearlyTaxes] = useState(5500);
  const [yearlyInsurance, setYearlyInsurance] = useState(2200);
  const [yearlyHOA, setYearlyHOA] = useState(0);

  ///necessary calculations
  const [principalAmount, setPrincipal] = useState(80000);
  const [interestAmount, setInterestAmount] = useState(0);

  //props to pass to chart
  const [monthlyPrincipal, setMonthlyPrincipal] = useState(2000);
  const [monthlyInterest, setMonthlyInterest] = useState(300);
  const [monthlyTaxes, setMonthlyTaxes] = useState(400);
  const [monthlyInsurance, setMonthlyInsurance] = useState(60);
  const [monthlyHOAFees, setMonthlyHOAFees] = useState(300);

  //useeffect to update state

  useEffect(() => {
    setMonthlyPrincipal(purchasePrice - downPayment);
    console.log("principal: " + principalAmount);
  }, [purchasePrice, downPayment]);

  console.log(typeof purchasePrice, typeof downPayment);
  return (
    <div className="App">
      <PersistentDrawerRight title="Mortgage Calculator" />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <MortgageInput onPurchasePriceChange={setPurchasePrice} />
          </Grid>
          <Grid item xs={12} md={7}>
            <Container maxWidth="sm">
              <Typography
                align="center"
                variant="h5"
                gutterBottom
                component="div"
                sx={{ mx: 1, color: "#448FF2" }}
              >
                Payment Breakdown
              </Typography>
              <MortgageChart
                principal={monthlyPrincipal}
                interest={monthlyInterest}
                taxes={monthlyTaxes}
                insurance={monthlyInsurance}
                hoa={monthlyHOAFees}
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={5}>
              <Results name="Estimated Profit" header={55}></Results>
            </Grid>
            <Grid item xs={12} sm={7} md={4}>
              <Results name={"Maximum Offer"} header={35} />
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
              <Results name="Rehab and Expenses" header={15} />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default Mortgage;
