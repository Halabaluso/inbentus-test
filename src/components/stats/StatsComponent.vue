<template>
    <div class="p-5">
        <p class="text-primary font-bold mb-2"><i class="fa-solid fa-square-poll-vertical"></i> Data stats</p>
        <div class="stats stats-vertical lg:stats-horizontal shadow-lg w-full border">

            <div class="stat">
                <div class="stat-figure text-primary">
                    <i class="fa-brands fa-medium text-4xl"></i>
                </div>
                <div class="stat-title">Average swing</div>
                <div class="stat-value">{{ mediumValue }} </div>
                <div class="stat-desc">Average value every 10 ticks</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-primary">
                    <i class="fa-solid fa-arrow-up-wide-short text-4xl"></i>
                </div>
                <div class="stat-title">Highest data</div>
                <div class="stat-value">{{ maxValue.toFixed(2) }}</div>
                <div class="stat-desc">Highest data every 10 ticks</div>
            </div>

            <div class="stat">
                <div class="stat-figure text-primary">
                    <i class="fa-solid fa-arrow-up-short-wide text-4xl"></i>
                </div>
                <div class="stat-title">Minimum value</div>
                <div class="stat-value">{{ minValue.toFixed(2) }} </div>
                <div class="stat-desc">Minimum value every 10 ticks</div>
            </div>

        </div>
    </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
    name: "Stats App",
    props: {
        value: Array,
        mediumValue: Number,
        maxValue: Number,
        minValue: Number
    },
});
</script>
<style lang="">
    
</style>