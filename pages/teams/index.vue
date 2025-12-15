<template lang="">
    <div>
        <PageTitle>
            <h1 class="text-6xl lg:text-8xl text-primary font-bold">
                Teams
            </h1>
        </PageTitle>
        <div class="bg-dots">
            <div v-if="!error" class="backdrop-blur-[1px] md:p-24 p-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                <TeamCell
                v-for="team of teamsData"
                v-bind:teamnumber="team.TeamNumber"
                v-bind:teamname="team.TeamName"
                v-bind:weblink="team.TeamWebsite"
                v-bind:buildthread="team.BuildThread"
                v-bind:cadlink="team.CAD"
                v-bind:codelink="team.Code"
                v-bind:photolink="team.Photo"
                v-bind:videolink="team.Video"
                v-bind:teamlocation="team.Location"
                v-bind:awardyear="team.NewestAwardYear"
                v-bind:award="team.NewestAward"/>
            </div>
        </div>
        <PageError :error="error" :errortext="errorText" :errormessage="errorMessage"/>
    </div>
</template>
<script setup>

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

const flags = useState('flags').value

let error, errorText, errorMessage

let rawFetch, teamsFetch, teamsData

rawFetch = await useFetch(`${useRuntimeConfig().public.API_URL}/teams`, {server: false})

teamsFetch = rawFetch.data

teamsData = teamsFetch.value || undefined

if (teamsData == undefined) {
    error = true
    errorText = "There was an issue while fetching the list of teams."
    errorMessage = rawFetch.error.value.data
} else if (teamsData.length == 0) {
    error = true
    errorText = "No Teams!"
    errorMessage = ""
}
</script>