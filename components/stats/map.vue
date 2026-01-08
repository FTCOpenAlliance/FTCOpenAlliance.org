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
import { Program } from '~/assets/scripts/programs'

const props = defineProps({
    title: String,
    data: Array,
})

let program = useState('program').value

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
        borderColor: program == Program.FTC ? '#ff6600' : program == Program.FRC ? '#0066ff' : '#fff',
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
            color: program == Program.FTC ? '#ff7e29' : program == Program.FRC ? '#3385ff' : '#ddd',
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
            borderColor: program == Program.FTC ? '#ff6600' : program == Program.FRC ? '#0066ff' : '#fff',
            borderWidth: 0.5,
            shadowBlur: 1,
            shadowColor: program == Program.FTC ? '#c75000' : program == Program.FRC ? '#0052cc' : '#fff'
        },
        emphasis: {
            itemStyle: {
                areaColor: '#111',
                borderColor: program == Program.FTC ? '#ff9752' : program == Program.FRC ? '#66a3ff' : '#fff',
                borderWidth: 2,
                shadowBlur: 5,
                shadowColor: program == Program.FTC ? '#c75000' : program == Program.FRC ? '#0052cc' : '#fff'
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
