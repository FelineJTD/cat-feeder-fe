<script setup>
import Chart from "chart.js";

const props = defineProps({
  data: Object,
  idx: Number,
});

const colors = ["#FF8800", "#007FFF", "#00FF00", "#FF00FF"];

onMounted(() => {
  console.log(props.data);
  let config = {
    type: "bar",
    data: {
      labels: [""],
      datasets: [
        {
          label: "Remaining capacity",
          fill: false,
          backgroundColor: colors[props.idx % colors.length],
          borderColor: colors[props.idx % colors.length],
          data: [props.data.remaining_capacity],
          barThickness: 300,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: false,
        text: "Orders Chart",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      legend: {
        labels: {
          fontColor: "white",
        },
        align: "end",
        position: "bottom",
      },
      scales: {
        xAxes: [
          {
            display: false,
            scaleLabel: {
              display: true,
              labelString: "Month",
            },
            gridLines: {
              borderDash: [2],
              borderDashOffset: [2],
              color: "rgba(255, 255, 255, 0.3)",
              zeroLineColor: "rgba(255, 255, 255, 0.3)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: false,
              labelString: "Value",
            },
            gridLines: {
              borderDash: [2],
              drawBorder: false,
              borderDashOffset: [2],
              color: "rgba(255, 255, 255, 0.3)",
              zeroLineColor: "rgba(255, 255, 255, 0.3)",
              zeroLineBorderDash: [2],
              zeroLineBorderDashOffset: [2],
            },
            ticks: {
              fontColor: "rgba(255,255,255,.7)",
              beginAtZero: true,
              max: 3000,
            },
          },
        ],
      },
    },
  };
  let ctx = document.getElementById(props.data._id).getContext("2d");
  window.myBar = new Chart(ctx, config);
});
</script>

<template>
  <div class="relative flex flex-col min-w-0 break-words w-full">
    <h2 class="text-white text-xl font-semibold">{{ props.data.name }}</h2>
    <div class="relative h-48 mt-4">
      <canvas :id="data._id"></canvas>
    </div>
  </div>
</template>
