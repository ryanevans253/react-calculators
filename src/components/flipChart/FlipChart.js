import "chart.js/auto";
//nothing
import { Doughnut } from "react-chartjs-2";

export default function FlipChart(props) {
  function calculate() {
    console.log(props.commission);
  }

  const comm = props.commission;
  // console.log(comm);

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
        data: [comm, 2, 3, 4, 5],
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
      <Doughnut data={data} options={options} />
    </div>
  );
}
