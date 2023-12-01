<template>
  <div id="app">
    <app-header />
    <BreadComponent/>
    <StatsComponent 
      :mediumValue="mediumValue"
      :value = value
      :maxValue="maxValue"
      :minValue="minValue" />
    <app-chart :value = value />

    <!--Modals-->
    <RestartModal/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppChart from "./components/chart/AppChart.vue";
import StatsComponent from "./components/stats/StatsComponent.vue"
import BreadComponent from "./components/commons/BreadComponent.vue"
import AppHeader from "./components/header/AppHeader.vue";
import RestartModal from "./components/modals/RestartModal.vue"

import AppSocket from "@/services/socket";

export default Vue.extend({
  name: "App",
  components: { AppHeader, AppChart, StatsComponent, BreadComponent, RestartModal },
  data(){
    return{
      value: [] as Array<number>,
      mediumValue: 0,
      maxValue: 0,
      minValue: 10,
    }
  },
  mounted() {
    setInterval(() => {
      this.mediumValue = 0
      totalValue = 0
      times = 0
      this.minValue = 10
      this.maxValue = 0
    }, 10500)
    let totalValue = 0
    let times = 0
    const socket = new AppSocket(process.env.VUE_APP_SOCKET_ADDRESS);
    const functionData = (element: Array<number>) => {
      this.value = element
      totalValue = parseFloat((totalValue + element[1]).toFixed(2))
      if(element[1] > this.maxValue){
        this.maxValue = element[1]
      }
      if(element[1] < this.minValue){
        this.minValue = element[1]
      }
      times = times + 1
      this.mediumValue = parseFloat((totalValue/times).toFixed(2))
    }
    socket.handleDataReception("plotData", functionData)
  },
});


</script>

<style lang="scss"></style>
