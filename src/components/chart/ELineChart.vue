<template>
  <div :id="id" />
</template>

<script lang="ts">
import * as echarts from "echarts";
import Vue from "vue";
import { uuid } from "vue-uuid";
import { createChartOptions } from "../../helpers/chart";
//import AppSocket from "../../services/socket"

export default Vue.extend({
  name: "ELineChart",
  props: {
    value: Array,
    max: Number,
    min: Number,
    interval: Number,
    seconds: Number,
    color: String,
  },
  data() {
    return {
      id: `e-line-chart-${uuid.v1()}`,
      myChart: null as echarts.ECharts | null,
      dataX: [] as Array<number>,
      dataY: [] as Array<number>,
      dataSeconds: [] as Array<number>,
      timeToShow: 0,
    };
  },
  mounted() {
    const container = document.getElementById(this.id);
    if (container && container.clientHeight > 0 && container.clientWidth > 0) {
      this.createChart(container);
    }
    setInterval(() => {
      console.log("Clear data")
      this.dataX = []
      this.dataY = []
    }, 10500)
  },
  beforeDestroy() {
    this.destroyChart();
  },
  methods: {
    createChart(container: HTMLElement) {
      // Create the echarts instance
      this.myChart = echarts.init(container);
      // Draw the chart
      this.myChart.setOption(
        createChartOptions({
          max: this.max,
          min: this.min,
          seconds: this.seconds,
          color: this.color,
          WSdataX: this.dataX,
          WSdataY: this.dataY
        })
      );
    },
    async destroyChart() {
      console.log(`Destroyed chart ${this.id}`);

      this.myChart?.dispose();
    },
  },
  watch: {
    value([x, y]: [number, number]) {
      const intNumber = Math.floor(x/1000)
      this.dataY.push(y)
      this.dataX.push(intNumber)
      this.myChart?.setOption(
        createChartOptions({
          max: this.max,
          min: this.min,
          seconds: this.seconds,
          color: this.color,
          WSdataX: this.dataX,
          WSdataY: this.dataY
        })
      );
    },
  },
});
</script>

<style lang="scss" scoped>

</style>
