<template>
    <div class="flex flex-col p-4 gap-2 items-center border-2 border-primary">
        <p class="text-2xl font-bold text-primary">{{ title }}</p>
        <div class="min-w-80 w-full max-w-[100em] min-h-72 h-full">
            <VChart :autoresize="true" :option="option"/>
        </div>
    </div>
</template>

<script setup>
import { Program } from '~/assets/scripts/programs'

let program = useState('program').value

const props = defineProps({
    title: String,
    data: Array,
    maxval: Number,
})

function getLargestValue(seriesData) {
    
    let largestValue = 0
    
    seriesData.forEach((element) => {
        if (element.value > largestValue) {
            largestValue = element.value
        }
    });
    
    return largestValue
}

function splitSeriesData(seriesData) {
    
    let nameArray = []
    let valueArray = []
    
    seriesData.forEach((element) => {
        nameArray.push(element.name)
        valueArray.push(element.value)
    });
    
    return {nameArray: nameArray, valueArray: valueArray}
}

const option = {
    color: [program == Program.FTC ? '#ff6600' : program == Program.FRC ? '#0066ff' : '#fff'],
    yAxis: {
        type: 'category',
        data: splitSeriesData(props.data._rawValue).nameArray,
        axisLabel: {
            interval: 0,
            textStyle: {
                color: "#fff",
            }
        }
    },
    xAxis: {
        type: 'value',
        max: props.maxval
    },
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
    series: [
        {
            data: splitSeriesData(props.data._rawValue).valueArray,
            type: 'bar'
        },
    ],
    grid: {
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%'
    }
};

</script>