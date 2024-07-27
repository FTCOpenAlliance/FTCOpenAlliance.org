<template lang="">
    <div>
        <PageTitle>
            <h1 class="text-6xl lg:text-8xl text-orange font-bold">
                {{ new Date().getFullYear() }} Teams
            </h1>
        </PageTitle>
        <div class="md:p-24 p-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
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
    </div>
</template>
<script setup>

    let url = 'https://script.google.com/macros/s/AKfycbycFM4msB2ZJTt_vEGPi3gOL0EBeekRxUbH248JZExRoSHZmfbJZZTVtv1pBZyClfT1/exec'


    const {data: teamLinks} = await useFetch(url, {
        query: {request: 'getTeamLinks' }
    })
    const linkData = teamLinks._rawValue.data
</script>