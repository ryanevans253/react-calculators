import React from "react";
import ReactDOM from "react-dom";

import PersistentDrawerRight from "./components/drawerNav/Navigation.js";
import InputAdornments from "./components/inputbox/InputBox.js";
import { Grid } from "@mui/material";
import Item from "@mui/material";
import { Container } from "@mui/material";
import FlipChart from "./components/flipChart/FlipChart";

function App() {
  return (
    <div className="App">
      <PersistentDrawerRight />
      <Container maxWidth="lg">
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            {/* <Item>xs=8</Item> */}
            <InputAdornments />
          </Grid>
          <Grid item xs={8}>
            <Container maxWidth="sm">
              {/* <Item>xs=8</Item> */}
              <FlipChart />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
