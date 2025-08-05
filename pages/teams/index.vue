<template lang="">
    <div>
        <PageTitle>
            <h1 class="text-6xl lg:text-8xl text-orange font-bold">
                Teams
            </h1>
        </PageTitle>
        <div class=" bg-dots">
            <div v-if="teamsData.length > 0" class="backdrop-blur-[1px] md:p-24 p-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                <TeamCell
                v-for="i in teamsData.length"
                v-bind:teamnumber="teamsData[i-1].TeamNumber"
                v-bind:teamname="teamsData[i-1].TeamName"
                v-bind:weblink="teamsData[i-1].TeamWebsite"
                v-bind:buildthread="teamsData[i-1].BuildThread"
                v-bind:cadlink="teamsData[i-1].CAD"
                v-bind:codelink="teamsData[i-1].Code"
                v-bind:photolink="teamsData[i-1].Photo"
                v-bind:videolink="teamsData[i-1].Video"
                v-bind:teamlocation="teamsData[i-1].Location"/>
            </div>
        </div>
        <div v-if="teamsData.length == 0" class="flex justify-center items-center md:flex-row flex-col md:p-24 p-12">
            <Icon name="i-ic-outline-error-outline" class=" text-8xl text-orange md:mr-5"/>
            <p class="text-3xl md:text-5xl">
                No Teams!
            </p>
        </div>
    </div>
</template>
<script setup>

const {data: teamsFetch} = await useFetch('https://api.ftcopenalliance.org/internal/teamListData')

const teamsData = teamsFetch._rawValue


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