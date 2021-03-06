import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const SaveBarChart = (props) => {
  const chartData = () => {
    return {
      labels: ["Original Total", "New Total"],
      datasets: [
        {
          data: [
            Math.round(props.finalLoanDetails.totalPaid * 100) / 100,
            props.newLoanDetails.totalPaid,
          ],
          backgroundColor: ["#EDEDED", props.savingsColor],
          borderColor: "black",
          borderWidth: "1",
          barThickness: 70,
        },
      ],
    };
  };

  return (
    <div style={{ marginBottom: "5 px" }}>
      <Bar
        data={chartData()}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                display: true,
                ticks: {
                  suggestedMin: props.finalLoanDetails.totalPaid / 2,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default SaveBarChart;
