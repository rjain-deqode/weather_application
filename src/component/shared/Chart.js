import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    },
  },
};

function Chart({newXAxisData, newYAxisData}) {
  const labels = newXAxisData;
  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: newYAxisData,
        borderColor: "#eb6e4b",
        backgroundColor: "#eb6e4b",
      },
    ],
  };
  return (
    <div className="hourly_chart">
      <h3>Hourly forecast</h3>
      <Line options={options} data={data} className="line__chart" />
    </div>
  );
}

export default Chart;
