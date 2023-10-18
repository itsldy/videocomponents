<template>
    <div id="map" style="width:100%;height:100vh">

    </div>
</template>

<script setup>
import { ref, provide, onMounted, inject, onUnmounted, nextTick } from "vue";

import * as echarts from 'echarts';  
import hhs from 'D:/work/hhcode/HHYZT/src/assets/geojson/hhyzt.json'
onMounted(() => {
  mapinit();
});

function mapinit() {
    // var myChart = echarts.init(hhyzt.value);
    var myChart = echarts.init(document.getElementById('map'));
    echarts.registerMap('hhs', hhs);
    console.log(hhs);
    var option = {
        title: {
            text: 'Echart 入门示例'
        },
        series: [
            {
                type: 'map',
                map: 'hhs'
            }
        ]
    };

    myChart.setOption(option);

}
</script>

<style>
/* div{
    width: 100%;
    height: 100%;
} */
</style>