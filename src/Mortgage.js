import React, { useState, useEffect } from "react";
import PersistentDrawerRight from "./components/drawerNav/Navigation.js";
import InputArea from "./components/inputbox/InputBox.js";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import FlipChart from "./components/flipChart/FlipChart";
import { Typography } from "@mui/material";
import Results from "./components/flipResults/FlipResults";

function Mortgage() {
  const [purchasePrice, setPurchasePrice] = useState(325000);
  const [interestRate, setInterestRate] = useState(3.4);
  const [downPayment, setDownPayment] = useState(20);
  const [loanLength, setLoanLength] = useState(360);

  //advanced

  const [yearlyTaxes, setYearlyTaxes] = useState(5500);
  const [yearlyInsurance, setYearlyInsurance] = useState(2200);
  const [yearlyHOA, setYearlyHOA] = useState(0);

  const [monthlyMortgage, setMonthlyMortgage] = useState(99);

  useEffect(() => {
    setMonthlyMortgage(+purchasePrice * (+interestRate / 100 + 1));
  }, []);

  //potential type conversion bug here
  // useEffect(() => {
  //   setRehabAndExpenses(
  //     +closingCosts +
  //       +salesClosing +
  //       (+arv * +commissions) / 100 +
  //       +repair +
  //       +holdingCost * holdingTime
  //   );
  // }, [
  //   closingCosts,
  //   salesClosing,
  //   arv,
  //   commissions,
  //   repair,
  //   holdingCost,
  //   holdingTime,
  // ]);

  return (
    <div className="App">
      <PersistentDrawerRight title="Mortgage Calculator" />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <InputArea
              // onPurchaseChange={setPurchasePrice}
              // onClosingChange={setClosingCosts}
              // onSaleClosingChange={setSalesClosing}
              // onCommissionChange={setCommissions}
              // onARVChange={setARV}
              // onProfitChange={setProfit}
              // onRepairChange={setRepair}
              // onHoldingTimeChange={setHoldingTime}
              // onHoldingCostChange={setHoldingCost}
              //mortgage
              onPurchasePriceChange={setPurchasePrice}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Container maxWidth="sm">
              <Typography
                align="center"
                variant="h5"
                gutterBottom
                component="div"
                sx={{ mx: 1, color: "#448FF2" }}
              >
                Expense Breakdown
              </Typography>
              <FlipChart
              // commission={commissions}
              // arv={arv}
              // purchaseClosingCosts={closingCosts}
              // salesClosingCosts={salesClosing}
              // holdingCost={holdingCost}
              // holdingTime={holdingTime}
              // repair={repair}
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
