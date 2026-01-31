<template lang="">
    <div>
        <PageTitle>
            <h1 class="text-6xl lg:text-8xl text-primary font-bold">
                Teams
            </h1>
        </PageTitle>
            <ClientOnly>
                <div class="bg-dots">
                    <div class="flex gap-4 items-center w-full md:px-24 px-12 py-6">
                        <UInput v-if="!errorDisplay" icon="i-heroicons-magnifying-glass-16-solid" color="primary" highlight size="xl" ref="search" v-model="searchText" placeholder="Search Teams..." class="bg-glass *:bg-transparent w-full">
                            <template #trailing>
                                <UKbd value="/" color="primary" variant="soft" size="lg"/>
                            </template>
                        </UInput>
                    </div>
                    <div v-if="!errorDisplay && teamsData && searchResults" class="backdrop-blur-[1px] px-4 md:px-24 pb-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        <TeamCell
                        v-for="team of teamsData"
                        v-bind:program="program"
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
                    <PageError v-if="errorDisplay" :errortext="errorDisplay.text" :errormessage="errorDisplay.message"/>
                    <PageError v-if="!searchResults" :errortext="'No Results Found'" :errormessage="'Please try a different search.'"/>
                </div>
            </ClientOnly>
        <PageLoading :show="!errorDisplay && !teamsData" message="Loading Teams..."/>
    </div>
</template>
<script setup>
import { Program } from '~/assets/scripts/programs'
import { useStorage, watchDebounced } from '@vueuse/core'

let errorDisplay = ref(null)
let allTeamData = ref([])
let teamsData = ref([])
const searchResults = computed(() => teamsData.value.length > 0)
const starredTeams = useStorage('starredTeams', [])
const searchText = ref('')
const { program } = useRoute().params

if (!Array.isArray(starredTeams.value)) { starredTeams.value = [] }

if (program.toLowerCase() == "ftc") {
    useState('program').value = Program.FTC;
} else if (program.toLowerCase() == "frc") {
    useState('program').value = Program.FRC;
} else {
    useState('program').value = Program.Generic;
}

useState('title').value = 'Teams'

await useAsyncData(async () => {
    await $fetch(`${useRuntimeConfig().public.API_URL}/teams/${program}`, {
        onResponse({response}) {
            if (!response.ok) {
                errorDisplay.value = {
                    text: "There was an issue while fetching the list of teams.",
                    message: response._data
                }
            } else if (response._data.length == 0) {
                errorDisplay.value = {
                    text: "No Teams!",
                    message: "Please check again later."
                }
            } else {
                allTeamData.value = [
                    ...response._data.filter(team => starredTeams.value.includes(team.TeamID)),
                    ...response._data.filter(team => !starredTeams.value.includes(team.TeamID))
                ]
                teamsData.value = allTeamData.value
            }
        },
        onResponseError({error}) {
            errorDisplay.value = {
                text: "There was an issue while fetching the list of teams.",
                message: error.message
            }
        },
        onRequestError() {
            errorDisplay.value = {
                text: "There was an issue while fetching the list of teams.",
                message: "API Communication Error."
            }
        }
    })
}, {server: false})

watchDebounced(
  searchText,
  () => {
    if (searchText.value == "") {
      teamsData.value = allTeamData.value
    } else {
      teamsData.value = allTeamData.value.filter(team => {
        return team.TeamName.toLowerCase().includes(searchText.value.toLowerCase())
            || team.TeamNumber.toString().includes(searchText.value)
            || team.Location.toLowerCase().includes(searchText.value.toLowerCase());
      });
    }
  },
  { debounce: 300, maxWait: 1000 },
);

const search = useTemplateRef('search')
defineShortcuts({
  '/': () => {
    search.value?.inputRef?.focus()
  }
})

useSeoMeta({
    title: `Teams | ${useState('program').value} Open Alliance`,
    ogTitle: 'Teams',
    description: 'The home of open and collaborative robotics for FIRST Robotics',
    ogDescription: 'The home of open and collaborative robotics for FIRST Robotics',
    ogImage: '/images/OALogos/ShortHorizontal.png',
})

</script>