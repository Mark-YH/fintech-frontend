<template>
  <div class="small">
    <canvas id="myChart" width="400" height="300"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

const ylabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const xlabels = [[100, 120, 150, 140, 130, 110, 120, 150, 170, 180], [NaN, 120, 150, NaN, 130, 110, 120, NaN, NaN, NaN]]

async function chartIt() {
  // await getData()
  var ctx = 'myChart';
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ylabels,
      datasets: [
        {
          label: "AAPL",
          backgroundColor: "rgba(225,103,110,1)",
          borderColor: "rgba(225,103,110,1)",
          borderWidth: 1,
          pointStyle: "crossRot",
          data: xlabels[0],
          cubicInterpolationMode: "monotone",
          fill: 'false'
        },
        {
          label: "Holding Period",
          backgroundColor: "rgba(10,225,10,0.3)",
          borderColor: "rgba(225,103,110,1)",
          borderWidth: 5,
          pointStyle: "crossRot",
          data: xlabels[1],
          cubicInterpolationMode: "monotone",
        }
      ]
    },
    options: {
      color: [
        'red',	// color for data at index 0
        'blue',   // color for data at index 1
        'green',  // color for data at index 2
        'black',  // color for data at index 3
      ]
    }
  });
  console.log('myChart Object: ' + myChart)
}

// async function getData() {
//   var test = undefined
//   await fetch('https://fintech-114.herokuapp.com/api/test/')
//       .then(response => response.json())
//       .then(data => (test = data));
//   for (let i = 0; i < Object.values(test).length; i++) {
//     xlabels.push(Object.values(test)[i])
//     console.log(xlabels)
//   }
//   for (let i = 0; i < Object.values(test)[0].length; i++) {
//     ylabels.push(i + 1)
//   }
//   ylabels.push(99)
//   ylabels.push(998)
//   ylabels.push(995)
//   xlabels[0].push('140')
//   xlabels[0].push(NaN)
//   xlabels[0].push('160')
//   xlabels[1].push(NaN)
//   xlabels[1].push(NaN)
//   xlabels[1].push('150')
// }

export default {
  name: 'Main',
  components: {},
  data() {
    return {}
  },
  mounted() {
    chartIt()
  },
  methods: {}
}
</script>

<style>
.small {
  max-width: 400px;
  margin: 10px auto;
}
</style>