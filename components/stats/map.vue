<template>
    <div class="flex flex-col p-4 gap-2 items-center border-2 border-primary">
        <p class="text-2xl font-bold text-primary">{{ title }}</p>
        <div class="min-w-60 w-full aspect-3/2">
            <VChart :autoresize="true" :option="option"/>
        </div>
    </div>
</template>

<script setup>
import jsonData from '@/assets/data/world.json'
import * as echarts from 'echarts'

const props = defineProps({
    title: String,
    data: Array,
})

echarts.registerMap("World", {geoJSON: jsonData})

function getLargestValue(seriesData) {
    
    let largestValue = 0
    
    seriesData.forEach((element) => {
        if (element.value > largestValue) {
            largestValue = element.value
        }
    });
    
    return largestValue
}

const option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: '#000000aa',
        borderColor: '#ff6600',
        borderWidth: 2,
        extraCssText: 'border-radius: 0;',
        className: 'bg-glass',
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        show: false,
        min: 0,
        max: getLargestValue(props.data),
        inRange: {
            color: '#ff7e29',
            colorLightness: [0.3, 0.6]
        }
    },
    series: [
      {
        name: 'Location',
        type: 'map',
        map: 'World',
        itemStyle: {
            areaColor: '#000',
            borderColor: '#ff6600',
            borderWidth: 0.5,
            shadowBlur: 1,
            shadowColor: '#c75000'
        },
        emphasis: {
            itemStyle: {
                areaColor: '#111',
                borderColor: '#ff9752',
                borderWidth: 2,
                shadowBlur: 5,
                shadowColor: '#c75000'
            },
            label: {
                show: false,
            }
        },
        select: {
            disabled: true
        },
        data: props.data,
        left: '2%',
        right: '2%'
      }
    ]
  };

</script>
