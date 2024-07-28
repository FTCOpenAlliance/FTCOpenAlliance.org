<template lang="">
    <div>
        <PageTitle>
            <h1 class="text-6xl lg:text-8xl text-orange font-bold">
                Teams
            </h1>
        </PageTitle>
        <div v-if="linkData[0] != undefined" class="md:p-24 p-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            <TeamCell
            v-for="data in linkData"
            v-bind:teamnumber="data[0]"
            v-bind:teamname="data[1]"
            v-bind:weblink="'//' + data[2]"
            v-bind:buildthread="'//' + data[3]"
            v-bind:cadlink="'//' + data[4]"
            v-bind:codelink="'//' + data[5]"
            v-bind:photolink="'//' + data[6]"
            v-bind:videolink="'//' + data[7]"/>
        </div>
        <div v-if="linkData[0] == undefined" class="flex justify-center items-center md:flex-row flex-col md:p-24 p-12">
            <Icon name="i-ic-outline-error-outline" class=" text-8xl text-orange md:mr-5"/>
            <p class="text-3xl md:text-5xl">
                No Teams!
            </p>
        </div>
    </div>
</template>
<script setup>

let url = 'https://script.google.com/macros/s/AKfycbycFM4msB2ZJTt_vEGPi3gOL0EBeekRxUbH248JZExRoSHZmfbJZZTVtv1pBZyClfT1/exec'


const {data: teamLinks} = await useFetch(url, {
    query: {request: 'getTeamLinks' }
})
const linkData = teamLinks._rawValue.data
//const linkData = [] //to test no teams msg

useSeoMeta({
    title: 'Teams | FTC Open Alliance',
    ogTitle: 'Teams',
    description: 'The home of open and collaborative robotics for FIRST Tech Challenge',
    ogDescription: 'The home of open and collaborative robotics for FIRST Tech Challenge',
    ogImage: 'https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/png_4k/bg/2STACK-HORIZONTAL.png',
})

useHead
({
  title
: 'Teams | FTC Open Alliance'
})

</script>