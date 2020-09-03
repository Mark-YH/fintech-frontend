<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import axios from "axios";

const yLabels = []
const data = {
  'stock price': [],
  'holding period': []
}

async function chartIt() {
  await getData()
  const ctx = 'myChart';
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: yLabels,
      datasets: [
        {
          label: "AAPL",
          backgroundColor: "rgba(225,103,110,1)",
          borderColor: "rgba(225,103,110,1)",
          borderWidth: 1,
          pointStyle: "crossRot",
          data: data['stock price'],
          cubicInterpolationMode: "monotone",
          fill: 'false'
        },
        {
          label: "Holding Period",
          backgroundColor: "rgba(10,225,10,0.3)",
          borderColor: "rgba(225,103,110,1)",
          borderWidth: 5,
          pointStyle: "crossRot",
          data: data['holding period'],
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

async function getData() {
  // const url = 'http://127.0.0.1:8000/api/recommend/'
  const url = 'https://fintech-114.herokuapp.com/api/recommend/'

  await axios({
    url: url,
    method: 'post',
    responseType: 'json',
    data: JSON.stringify({'123': 456}),
  })
      .then(function (response) {
        data['stock price'] = response.data['stock price']
        data['holding period'] = response.data['holding period']
        data['profit'] = response.data['profit']
        data['strategy'] = response.data['strategy']
        for (let i = 0; i < data['stock price'].length; i++) {
          yLabels.push(i + 1)
        }
        console.log('stock price: ' + data['stock price'])
        console.log('holding period: ' + data['holding period'])
        console.log('profit: ' + data['profit'])
        console.log('strategy: ' + data['strategy'])
        alert('profit: ' + data['profit'])
        alert('strategy: ' + data['strategy'])

      })
}

export default {
  name: "StockChart",
  props: {
    form: JSON
  },
  data() {
    return {}
  },
  mounted() {
    chartIt()
  },
  updated() {
    // console.log(this.form.start)
  }
}
</script>

<style scoped>
#myChart {
  max-width: 800px;
}
</style>