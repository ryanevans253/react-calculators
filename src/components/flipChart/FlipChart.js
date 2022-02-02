import "chart.js/auto";

import { Doughnut } from "react-chartjs-2";

export default function FlipChart() {
  const data = {
    labels: ["red", "blue", "yellow", "green"],
    datasets: [
      {
        data: [12, 15, 30, 16],
      },
    ],
  };

  return (
    <div>
      <h1>Donut chart</h1>
      <Doughnut data={data} />
    </div>
  );
}
