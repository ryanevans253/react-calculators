import "chart.js/auto";
//nothing
import { Doughnut } from "react-chartjs-2";

export default function MortgageChart(props) {
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
    labels: ["Principal", "Interest", "Taxes", "Insurance", "HOA Fees"],

    datasets: [
      {
        data: [
          props.principal,
          props.interest,
          props.taxes,
          props.insurance,
          props.hoa,
        ],
        // data: [1, 2, 3, 4, 5],
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

//blues and purples
// "rgba(97,245,245)",
// "rgba(98,195,245)",
// "rgba(97,147,245)",
// "rgba(98,96,244)",
// "rgba(99,49,245)",

//
//blues and yellows
// "#056CF2",
//           "#448FF2",
//           "#F2F2F2",
//           "#F2B807",
//           "#F2A007",
