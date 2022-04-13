import "chart.js/auto";
//nothing
import { Doughnut } from "react-chartjs-2";

export default function MortgageChart(props) {
  const options = {
    responsive: true,
    plugins: {
      beforeDraw: function (chart) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "text here",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },

      //end of test plugin
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
    labels: ["Principal and Interest", "Taxes", "Insurance", "HOA Fees"],

    datasets: [
      {
        data: [
          props.principalAndInterest,

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
      <Doughnut
        plugins={options.plugins}
        data={data}
        options={options}
        style={{ maxHeight: 400 }}
      />
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
