<template>
    <div>
        <PageTitle>
            <h1 class="text-6xl lg:text-8xl text-orange font-bold">
                Statistics
            </h1>
        </PageTitle>
    </div>
</template>

<script setup>

import Chart from 'chart.js/auto';

let url = 'https://script.google.com/macros/s/AKfycbycFM4msB2ZJTt_vEGPi3gOL0EBeekRxUbH248JZExRoSHZmfbJZZTVtv1pBZyClfT1/exec'


const {data: teamLinks} = await useFetch(url, {
    query: {request: 'getTeamLinks' }
})
const linkData = teamLinks._rawValue.data

</script>

<style lang="scss" scoped>

</style>