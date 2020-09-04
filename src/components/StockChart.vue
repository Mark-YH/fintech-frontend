<template>
  <v-chart :options="chartOption" ref="myChart" :autoresize="true"></v-chart>
</template>

<script>
import ECharts from 'vue-echarts'
import {mapGetters, mapActions} from "vuex";
import 'echarts/lib/chart/line'

export default {
  name: "StockChart",
  components: {
    'v-chart': ECharts
  },
  computed: {
    ...mapGetters({
      stockPrice: 'getStockPrice',
      holdingPeriod: 'getHoldingPeriod',
      profit: 'getProfit',
      isChartLoading: 'getChartLoading'
    }),
    hp_update() {
      return this.holdingPeriod
    },
    chart_loading_state() {
      return this.isChartLoading
    }
  },
  methods: {
    ...mapActions([
      'actionChartLoading'
    ])
  },
  watch: {
    chart_loading_state: function () {
      if (this.isChartLoading)
        this.$refs.myChart.showLoading()
      else
        this.$refs.myChart.hideLoading()
    },
    hp_update: function () {
      const x = []
      for (let i = 0; i < this.stockPrice.length; i++) {
        x.push(i + 1)
      }
      this.chartOption.dataset.source = [
        x,
        this.stockPrice,
        this.holdingPeriod
      ]
      this.actionChartLoading(false)
    }
  },
  data() {
    return {
      chartOption: {}
    }
  },
  mounted() {
    this.$refs.myChart.showLoading()
    this.chartOption = {
      dataset: {
        xAxis: [1, 23, 4, 5, 6, 77, 8],
        source: []
      },
      xAxis:
          {
            type: 'category',
            boundaryGap:
                false
          }
      ,
      yAxis: {
        type: 'value',
        boundaryGap:
            [0, '30%']
      }
      ,
      series: [
        {
          type: 'line',
          smooth: 0,
          symbol: 'triangle',
          symbolSize: 6,
          lineStyle: {
            width: 1.5
          },
          seriesLayoutBy: 'row'
        },
        {
          type: 'line',
          smooth: 0,
          symbol: 'triangle',
          symbolSize: 10,
          lineStyle: {
            width: 4
          },
          seriesLayoutBy: 'row'
        }
      ]
    }
    this.$refs.myChart.hideLoading()
  }
}
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 400px;
}
</style>