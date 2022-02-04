import { Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { shadows } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import FlipResultsInner from "../flipResultsInner/FlipResultsInner";

export default function Results(props) {
  let totalACQ = props.pp + props.purchaseClosingCosts;
  let totalHolding = props.holdingCost * props.holdingTime;

  let totalProfit =
    props.arv -
    totalACQ -
    props.salesClosingCosts -
    props.repair -
    totalHolding -
    props.arv * (props.commission / 100);

  let maxOffer =
    props.arv -
    props.purchaseClosingCosts -
    props.repair -
    totalHolding -
    props.salesClosingCosts -
    props.arv * (props.commission / 100) -
    props.desired;

  function TextBox(props) {
    return (
      <div>
        <Typography variant="h3">${props.profit}</Typography>
        <Typography variant="subtitle1">{props.name}</Typography>
      </div>
    );
  }

  return (
    <div>
      <Box
        component={Grid}
        sx={{
          backgroundColor: "rgba(97,147,245)",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          borderRadius: 2,
          textAlign: "center",
          minHeight: "7em",
          color: "white",
          pt: 2,
        }}
      >
        {/* <TextBox profit={totalProfit} name="poop" /> */}

        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          ${totalProfit}
        </Typography>
        <Typography variant="subtitle1">{props.name}</Typography>
      </Box>
    </div>
  );
}
