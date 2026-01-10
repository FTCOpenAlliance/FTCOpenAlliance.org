<template>
    <div class="flex flex-col p-4 gap-2 items-center bg-glass border-2 border-primary-400 shadow-xl shadow-primary-400/25">
        <p class="text-2xl font-bold text-primary">{{ title }}</p>
        <div class="min-w-60 w-full h-[20em]">
            <VChart :autoresize="true" :option="option"/>
        </div>
    </div>
</template>

<script setup>
import { Program } from '~/assets/scripts/programs'

let program = useState('program', () => Program.Generic).value

function getLargestValue(seriesData) {
    
    let largestValue = 0
    
    seriesData.forEach((element) => {
        if (element.value > largestValue) {
            largestValue = element.value
        }
    });
    
    return largestValue
}

const props = defineProps({
    title: String,
    data: Array,
})

let color500 = program == Program.FTC ? '#ff6600' : program == Program.FRC ? '#0066ff' : '#fff'
let color200 = program == Program.FTC ? '#ffaf7a' : program == Program.FRC ? '#99c2ff' : '#fff'

const option = ref({
    legend: {
        textStyle: {
            color: "#fff"
        },
        type: 'scroll'
    },
    textStyle: {
        fontFamily: "Chakra Petch",
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: '#000000aa',
        borderColor: color500,
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
        max: getLargestValue(props.data._rawValue),
        inRange: {
            color: color500,
            colorLightness: [0.3, 0.6]
        }
    },
    series: [
    {
        name: props.title,
        type: 'pie',
        color: color500,
        radius: ['40%', '60%'],
        center: ['50%', '40%'],
        data: props.data,
        label: {show:false},
        labelLine: {show: false},
        itemStyle: {
            borderColor: color200,
            borderWidth: 2,
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
            return Math.random() * 200;
        }
    }
    
    ],
    grid: {
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%'
    }
})

</script>