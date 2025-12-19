<template lang="">
    <div>
        <PageTitle>
            <h1 class="text-6xl lg:text-8xl text-primary font-bold">
                Teams
            </h1>
        </PageTitle>
            <ClientOnly>
                <div class="bg-dots">
                    <div v-if="(!error) && teamsData" class="backdrop-blur-[1px] md:p-24 p-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
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
                <PageError v-if="error" :errortext="error.text" :errormessage="error.message"/>
            </ClientOnly>
            <PageLoading :show="showLoading" message="Loading Teams..."/>
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

let error = ref(null)

let teamsData = ref(null)

let showLoading = computed(() => !error.value && !teamsData.value)

await useAsyncData(async () => {
    await $fetch(`${useRuntimeConfig().public.API_URL}/teams`, {
        onResponse({response}) {
            teamsData.value = response._data
            if (teamsData.length == 0) {
                error.value = {
                    text: "No Teams!",
                    message: ""
                }
            }
        },
        onResponseError({error}) {
            error.value = {
                text: "There was an issue while fetching the list of teams.",
                message: error.message
            }
        },
        onRequestError() {
            error.value = {
                text: "There was an issue while fetching the list of teams.",
                message: "API Communication Error."
            }
        }
    })
}, {server: false})
</script>