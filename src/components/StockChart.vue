<template>
  <canvas id="myChart"></canvas>
</template>

<script>
import Chart from "chart.js";
import {mapGetters} from "vuex";

export default {
  name: "StockChart",
  props: {},
  computed: {
    ...mapGetters({
      stockPrice: 'getStockPrice',
      holdingPeriod: 'getHoldingPeriod',
      profit: 'getProfit'
    }),
    hp_update() {
      return this.holdingPeriod
    }
  },
  watch: {
    hp_update: function () {
      this.chartIt()
    }
  },
  methods: {
    chartIt() {
      const ctx = 'myChart';
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
          datasets: [
            {
              label: "AAPL",
              backgroundColor: "rgba(225,103,110,1)",
              borderColor: "rgba(225,103,110,1)",
              borderWidth: 1,
              pointStyle: "crossRot",
              data: this.stockPrice,
              cubicInterpolationMode: "monotone",
              fill: 'false'
            },
            {
              label: "Holding Period",
              backgroundColor: "rgba(10,225,10,0.3)",
              borderColor: "rgba(225,103,110,1)",
              borderWidth: 5,
              pointStyle: "crossRot",
              data: this.holdingPeriod,
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
      console.log("myChart object: " + myChart)
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.chartIt()
  }
}
</script>

<style scoped>
#myChart {
  max-width: 800px;
}
</style>