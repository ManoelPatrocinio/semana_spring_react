import Chart from "react-apexcharts";

export const Barchart = () => {
  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    legend: {
      show: true,
      labels: {
        colors: ["#F44336"],
        useSeriesColors: false,
      },
    },
  };

  // colors: ["#F44336"],
  const mockData = {
    labels: {
      categories: ["Anakin", "Barry Allen", "Kal-El", "Logan", "Padmé"],
    },
    series: [
      {
        name: "% Sucesso",
        data: [43.6, 67.1, 67.7, 45.6, 71.1],
      },
    ],
  };

  return (
    <Chart
      options={{ ...options, xaxis: mockData.labels }}
      series={mockData.series}
      type="bar"
      height="240"
    />
  );
};
