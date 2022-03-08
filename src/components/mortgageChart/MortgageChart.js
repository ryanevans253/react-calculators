import "chart.js/auto";
//nothing
import { Doughnut } from "react-chartjs-2";

export default function MortgageChart(props) {
  //   let pp = (props.commission / 100) * props.arv;
  //   let repair = props.repair;
  //   let holding = props.holdingCost * props.holdingTime;
  //   let pClosing = props.purchaseClosingCosts;
  //   let sClosing = props.salesClosingCosts;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: "Monthly Mortgage Breakdown",
        fontColor: "rgba(95, 91, 255, 1)",
      },
    },
  };

  let data = {
    labels: [
      "Sales Commission",
      "Holding Costs",
      "Purchase Closing Costs",
      "Sale Closing Costs",
      "Repair Costs",
    ],

    datasets: [
      {
        // data: [comm, holding, pClosing, sClosing, repair], //original from other chart
        data: [1, 2, 3, 4, 5],
        backgroundColor: [
          "#056CF2",
          "#448FF2",
          "#F2F2F2",
          "#F2B807",
          "#F2A007",
        ],
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} options={options} style={{ maxHeight: 400 }} />
    </div>
  );
}

//blues and purples
// "rgba(97,245,245)",
// "rgba(98,195,245)",
// "rgba(97,147,245)",
// "rgba(98,96,244)",
// "rgba(99,49,245)",

//
