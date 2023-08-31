import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
ChartJS.register(CategoryScale);

interface LineChartProps {
  chartData: any;
}

function LineChart({ chartData }: LineChartProps) {
  return <Line className="w-full xl:w-10/12" data={chartData} />;
}

export default LineChart;
