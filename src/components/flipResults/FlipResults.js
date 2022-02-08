import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

export default function Results(props) {
  return (
    <div>
      <Box
        component={Grid}
        sx={{
          backgroundColor: "#448FF2",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          borderRadius: 2,
          textAlign: "center",
          minHeight: "7em",
          color: "white",
          pt: 2,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          ${props.header.toLocaleString()}
        </Typography>
        <Typography variant="subtitle1">{props.name}</Typography>
      </Box>
    </div>
  );
}
