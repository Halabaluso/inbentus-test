<template>
  <!-- This is a wrapper for Echarts component-->
  <div class="m-5">
    <p class="text-primary font-bold mb-2"><i class="fa-solid fa-chart-simple"></i> Data chart</p>
    <e-line-chart
    class="chart-wrapper shadow-xl border rounded-lg"
    :value="value"
    :max="max"
    :min="min"
    :color="color"
    :seconds="seconds"
    :interval="interval"
  />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ELineChart from "./ELineChart.vue";

export default Vue.extend({
  name: "AppChart",
  components: { ELineChart },
  props:{
    value: Array
  },
  data() {
    return {
      max: parseInt(process.env.VUE_APP_CHART_MAX_VALUE),
      min: parseInt(process.env.VUE_APP_CHART_MIN_VALUE),
      seconds: parseInt(process.env.VUE_APP_CHART_MAX_TICKS),
      interval: parseInt(process.env.VUE_APP_CHART_YAXIS_INTERVAL),
      color: process.env.VUE_APP_CHART_COLOR,
    };
  },
});
</script>

<style lang="scss" scoped>
.chart-wrapper {
  height: 25em;
}
</style>
