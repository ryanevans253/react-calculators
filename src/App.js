import React, { useState } from "react";
import ReactDOM from "react-dom";

import PersistentDrawerRight from "./components/drawerNav/Navigation.js";
import InputArea from "./components/inputbox/InputBox.js";
import { Grid } from "@mui/material";
import Item from "@mui/material";
import { Container } from "@mui/material";
import FlipChart from "./components/flipChart/FlipChart";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Results from "./components/flipResults/FlipResults";
import { PausePresentationTwoTone } from "@mui/icons-material";

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

  //checking
  // console.log(typeof purchasePrice);

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
              <Results
                arv={parseInt(arv)}
                pp={parseInt(purchasePrice)}
                commission={parseInt(commissions)}
                purchaseClosingCosts={parseInt(closingCosts)}
                salesClosingCosts={parseInt(salesClosing)}
                holdingCost={parseInt(holdingCost)}
                holdingTime={parseInt(holdingTime)}
                repair={parseInt(repair)}
                desired={parseInt(profit)}
                name="Estimated Profit"
                equation="totalProfit"
              />
            </Grid>
            <Grid item xs={12} sm={7} md={4}>
              <Results
                arv={parseInt(arv)}
                pp={parseInt(purchasePrice)}
                commission={parseInt(commissions)}
                purchaseClosingCosts={parseInt(closingCosts)}
                salesClosingCosts={parseInt(salesClosing)}
                holdingCost={parseInt(holdingCost)}
                holdingTime={parseInt(holdingTime)}
                repair={parseInt(repair)}
                desired={parseInt(profit)}
                name="Max Offer Price"
                equation="maxOffer"
              />
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
              <Results
                arv={parseInt(arv)}
                pp={parseInt(purchasePrice)}
                commission={parseInt(commissions)}
                purchaseClosingCosts={parseInt(closingCosts)}
                salesClosingCosts={parseInt(salesClosing)}
                holdingCost={parseInt(holdingCost)}
                holdingTime={parseInt(holdingTime)}
                repair={parseInt(repair)}
                desired={parseInt(profit)}
                name="Rehab and Expenses"
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default App;
