<template>
    <div class="flex flex-col p-4 gap-2 items-center border-2 border-primary">
        <p class="text-2xl font-bold text-primary">{{ title }}</p>
        <div class="min-w-60 w-full h-[20em]">
            <VChart :autoresize="true" :option="option"/>
        </div>
    </div>
</template>

<script setup>

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

const option = ref({
    backgroundColor: '#000',
    legend: {
        textStyle: {
            color: "#fff"
        },
        type: 'scroll'
    },
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
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    visualMap: {
        show: false,
        min: 0,
        max: getLargestValue(props.data._rawValue),
        inRange: {
            color: '#ff6600',
            colorLightness: [0.3, 0.6]
        }
    },
    series: [
    {
        name: props.title,
        type: 'pie',
        color: '#ff6600',
        radius: '60%',
        center: ['50%', '40%'],
        data: props.data,
        label: {show:false},
        labelLine: {show: false},
        itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
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