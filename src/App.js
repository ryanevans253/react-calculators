import React, { useState, useEffect } from "react";
import PersistentDrawerRight from "./components/drawerNav/Navigation.js";
import InputArea from "./components/inputbox/InputBox.js";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import FlipChart from "./components/flipChart/FlipChart";
import { Typography } from "@mui/material";
import Results from "./components/flipResults/FlipResults";

function App() {
  const [purchasePrice, setPurchasePrice] = useState(325000);
  const [closingCosts, setClosingCosts] = useState(5500);
  const [salesClosing, setSalesClosing] = useState(20000);
  const [commissions, setCommissions] = useState(6);
  const [arv, setARV] = useState(460000);
  const [profit, setProfit] = useState(40000);
  const [repair, setRepair] = useState(35000);
  const [holdingTime, setHoldingTime] = useState(9);
  const [holdingCost, setHoldingCost] = useState(350);

  //props to pass down
  const [estProfit, setProf] = useState(11);
  const [maxOffer, setMaxOffer] = useState(22);
  const [rehabAndExpenses, setRehabAndExpenses] = useState(33);

  useEffect(() => {
    setProf(
      arv -
        purchasePrice -
        closingCosts -
        salesClosing -
        arv * (commissions / 100) -
        repair -
        holdingTime * holdingCost
    );
  }, [
    arv,
    purchasePrice,
    closingCosts,
    salesClosing,
    commissions,
    repair,
    holdingTime,
    holdingCost,
  ]);

  useEffect(() => {
    setMaxOffer(
      arv -
        closingCosts -
        repair -
        holdingTime * holdingCost -
        salesClosing -
        arv * (commissions / 100) -
        profit
    );
  }, [
    arv,
    closingCosts,
    repair,
    holdingTime,
    holdingCost,
    salesClosing,
    commissions,
    profit,
  ]);

  //potential type conversion bug here
  useEffect(() => {
    setRehabAndExpenses(
      +closingCosts +
        +salesClosing +
        (+arv * +commissions) / 100 +
        +repair +
        +holdingCost * holdingTime
    );
  }, [
    closingCosts,
    salesClosing,
    arv,
    commissions,
    repair,
    holdingCost,
    holdingTime,
  ]);

  return (
    <div className="App">
      <PersistentDrawerRight />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <InputArea
              onPurchaseChange={setPurchasePrice}
              onClosingChange={setClosingCosts}
              onSaleClosingChange={setSalesClosing}
              onCommissionChange={setCommissions}
              onARVChange={setARV}
              onProfitChange={setProfit}
              onRepairChange={setRepair}
              onHoldingTimeChange={setHoldingTime}
              onHoldingCostChange={setHoldingCost}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Container maxWidth="sm">
              <Typography
                align="center"
                variant="h5"
                gutterBottom
                component="div"
                sx={{ mx: 1 }}
              >
                Expense Breakdown
              </Typography>
              <FlipChart
                commission={commissions}
                arv={arv}
                purchaseClosingCosts={closingCosts}
                salesClosingCosts={salesClosing}
                holdingCost={holdingCost}
                holdingTime={holdingTime}
                repair={repair}
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={5}>
              <Results name="Estimated Profit" header={estProfit}></Results>
            </Grid>
            <Grid item xs={12} sm={7} md={4}>
              <Results name={"Maximum Offer"} header={maxOffer} />
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
              <Results name="Rehab and Expenses" header={rehabAndExpenses} />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default App;
