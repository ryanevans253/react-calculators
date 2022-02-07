import "chart.js/auto";
//nothing
import { Doughnut } from "react-chartjs-2";

export default function FlipChart(props) {
  let comm = (props.commission / 100) * props.arv;
  let repair = props.repair;
  let holding = props.holdingCost * props.holdingTime;
  let pClosing = props.purchaseClosingCosts;
  let sClosing = props.salesClosingCosts;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: "Fix and Flip Expenses",
        fontColor: "rgba(95, 91, 255, 1)",
      },
    },
  };

  let data = {
    labels: [
      "Sales Commission",
      "Holding Cost",
      "Purchase Closing Costs",
      "Sale Closing Costs",
      "Repair Costs",
    ],

    datasets: [
      {
        data: [comm, holding, pClosing, sClosing, repair],
        backgroundColor: [
          "rgba(97,245,245)",
          "rgba(98,195,245)",
          "rgba(97,147,245)",
          "rgba(98,96,244)",
          "rgba(99,49,245)",
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
