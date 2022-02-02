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

  return (
    <div className="App">
      <PersistentDrawerRight />
      <Container maxWidth="lg">
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            {/* <Item>xs=8</Item> */}
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

            <Button
              onClick={() => console.log("poop", arv, purchasePrice)}
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth={true}
              sx={{ mx: 1 }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Container maxWidth="sm">
              {/* <Item>xs=8</Item> */}
              {/* <h1>{purchasePrice}</h1> */}
              <FlipChart
                commission={commissions}
                // purchasePrice={purchasePrice}
                purchaseClosingCosts={closingCosts}
                salesClosingCosts={salesClosing}
                arv={arv}
                // profit={profit}
                repair={repair}
                // totalHoldingCost={holdingTime * holdingCost}
                // totalSalesCommission={arv * (commissions / 100)}
              />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
