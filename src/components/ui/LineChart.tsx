import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js";
ChartJS.register(CategoryScale);

interface LineChartProps {
  chartData: any;
}

function LineChart({ chartData }: LineChartProps) {
  return <Line className="xl:w-10/12 w-full" data={chartData} />;
}

export default LineChart;
