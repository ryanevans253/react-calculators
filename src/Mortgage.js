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
  const [interestRate, setInterestRate] = useState(4.46);
  const [downPayment, setDownPayment] = useState(20);
  const [loanLength, setLoanLength] = useState(30);

  //advanced

  const [yearlyTaxes, setYearlyTaxes] = useState(2500);
  const [yearlyInsurance, setYearlyInsurance] = useState(1500);
  const [yearlyHOA, setYearlyHOA] = useState(0);

  //props to pass to chart
  const [monthlyPrincipalAndInterest, setMonthlyPrincipalAndInterest] =
    useState(2000);
  const [monthlyTaxes, setMonthlyTaxes] = useState(400);
  const [monthlyInsurance, setMonthlyInsurance] = useState(60);
  const [monthlyHOAFees, setMonthlyHOAFees] = useState(300);

  //update monthly principal and interest
  useEffect(() => {
    let down = purchasePrice * (downPayment / 100);
    let principal = purchasePrice - down;
    let numberOfPayments = loanLength * 12;
    let iRate = Number(interestRate / 12 / 100);

    setMonthlyPrincipalAndInterest(
      (principal * iRate * Math.pow(1 + iRate, numberOfPayments)) /
        (Math.pow(1 + iRate, numberOfPayments) - 1)
    );
  }, [purchasePrice, downPayment, interestRate, loanLength]);

  useEffect(() => {
    setMonthlyTaxes(yearlyTaxes / 12);
  }, [yearlyTaxes]);

  useEffect(() => {
    setMonthlyInsurance(yearlyInsurance / 12);
  }, [yearlyInsurance]);

  useEffect(() => {
    setMonthlyHOAFees(yearlyHOA / 12);
  }, [yearlyHOA]);

  return (
    <div className="App">
      <PersistentDrawerRight title="Mortgage Calculator" />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <MortgageInput
              onPurchasePriceChange={setPurchasePrice}
              onDownPaymentChange={setDownPayment}
              onLoanLengthChange={setLoanLength}
              onInterestChange={setInterestRate}
              onTaxesChange={setYearlyTaxes}
              onInsuranceChange={setYearlyInsurance}
              onHoaChange={setYearlyHOA}
            />
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
                principalAndInterest={monthlyPrincipalAndInterest}
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
