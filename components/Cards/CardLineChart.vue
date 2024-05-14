<script setup>
import Chart from "chart.js";

const props = defineProps({
  data: Object,
});

const colors = ["#FF8800", "#007FFF", "#00FF00", "#FF00FF"];

onMounted(() => {
  console.log(props.data);
  var config = {
    type: "line",
    data: {
      labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
      ],
      datasets: props.data.map((item, idx) => {
        return {
          label: item.location,
          backgroundColor: colors[idx % colors.length],
          borderColor: colors[idx % colors.length],
          data: item.amounts.map((amount) => amount.amount),
          fill: false,
        };
      }),
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: false,
        text: "Sales Charts",
        fontColor: "white",
      },
      legend: {
        labels: {
          fontColor: "white",
        },
        align: "end",
        position: "bottom",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: "rgba(255,255,255,.7)",
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Month",
              fontColor: "white",
            },
            gridLines: {
              display: false,
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(33, 37, 41, 0.3)",
              zeroLineColor: "rgba(0, 0, 0, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontColor: "rgba(255,255,255,.7)",
            },
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Value",
              fontColor: "white",
            },
            gridLines: {
              borderDash: [3],
              borderDashOffset: [3],
              drawBorder: false,
              color: "rgba(255, 255, 255, 0.15)",
              zeroLineColor: "rgba(33, 37, 41, 0)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
      },
    },
  };
  var ctx = document.getElementById("line-chart").getContext("2d");
  window.myLine = new Chart(ctx, config);
});
</script>

<template>
  <div class="relative flex flex-col min-w-0 break-words w-full">
    <h2 class="text-white text-xl font-semibold">Total donation</h2>
    <div class="relative h-48 mt-4">
      <canvas id="line-chart"></canvas>
    </div>
  </div>
</template>
