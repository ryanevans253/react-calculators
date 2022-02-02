import "chart.js/auto";
//nothing
import { Doughnut } from "react-chartjs-2";

export default function FlipChart() {
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

  const data = {
    labels: [
      "Purchase Closing Costs",
      "Sale Closing Costs",
      "Repair Costs",
      "Sales Commission",
      "Holding Cost",
    ],

    datasets: [
      {
        data: [12, 15, 30, 16, 20],
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
      <h1>Donut chart</h1>
      <Doughnut data={data} options={options} />
    </div>
  );
}
