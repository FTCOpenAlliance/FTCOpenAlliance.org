<template>
    <div>
        <PageTitle>
            <h1 class="text-6xl lg:text-8xl text-primary font-bold">
                Statistics
            </h1>
        </PageTitle>
        <ClientOnly>
            <div v-if="!errorDisplay && stats" class="flex flex-col gap-8 pt-8 sm:px-12 md:px-24">
                <USeparator class="text-xl text-primary md:text-4xl"> Alliance Stats </USeparator>
                <div class="grid grid-cols-1 lg:grid-cols-3 *:w-full gap-8 w-full sm:p-6">
                    <div class="flex flex-col gap-4 bg-grid h-80 lg:h-auto">
                        <div class="flex flex-col lg:gap-4 w-full h-full items-center justify-center bg-glass shadow-lg shadow-primary">
                            <p class="text-2xl xl:text-4xl text-primary">Alliance Teams</p>
                            <p class="text-5xl xl:text-8xl text-white font-bold">{{ stats.NumTeams }}</p>
                        </div>
                        <div class="flex flex-col lg:gap-4 w-full h-full items-center justify-center bg-glass shadow-lg shadow-primary">
                            <p class="text-2xl xl:text-4xl text-primary">International Reach</p>
                            <p class="text-5xl xl:text-8xl text-white font-bold">{{ stats.Location.filter(item => item.name != "").length }}</p>
                            <p class="text-lg xl:text-2xl text-primary">Countries</p>
                        </div>
                    </div>
                    <StatsMap class="lg:col-span-2" title="Team Map" :data="stats.Location"/>
                </div>
                <USeparator class="text-xl text-primary md:text-4xl"> Team Info </USeparator>
                <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 *:w-full gap-4 w-full sm:p-6">
                    <StatsPieChart title="Team Type" :data="ref(applyKVNames(stats.TeamType, kvLists.TeamType))"/>
                    <StatsPieChart title="Budget" :data="ref(applyKVNames(stats.Budget, kvLists.Budget))"/>
                    <StatsPieChart title="Workspace" :data="ref(applyKVNames(stats.Workspace, kvLists.Workspace))"/>
                    <StatsPieChart title="# of Sponsors" :data="ref(applyKVNames(stats.Sponsors, kvLists.Sponsors))"/>
                </div>
                <USeparator class="text-xl text-primary md:text-4xl"> Robot Info </USeparator>
                <div class="grid grid-cols-1 lg:grid-cols-12 *:w-full gap-4 w-full sm:p-6">
                    <StatsPieChart class="lg:col-span-4" title="Drivetrain Types" :data="ref(applyKVNames(stats.Drivetrain, kvLists.Drivetrain))"/>
                    <StatsBarChart class="lg:col-span-8" title="Materials" :data="ref(applyKVNames(stats.Materials, kvLists.Materials))" :maxval="stats.NumTeams"/>
                    <StatsBarChart class="lg:col-span-6" title="Products" :data="ref(applyKVNames(stats.Products, kvLists.Products))" :maxval="stats.NumTeams"/>
                    <StatsBarChart class="lg:col-span-6" title="Systems" :data="ref(applyKVNames(stats.Systems, kvLists.Systems))" :maxval="stats.NumTeams"/>
                    <StatsBarChart class="lg:col-span-6" title="Odometry" :data="ref(applyKVNames(stats.Odometry, kvLists.Odometry))" :maxval="stats.NumTeams"/>
                    <StatsBarChart class="lg:col-span-6" title="Sensors" :data="ref(applyKVNames(stats.Sensors, kvLists.Sensors))" :maxval="stats.NumTeams"/>
                </div>
                <USeparator class="text-xl text-primary md:text-4xl"> Programming Info </USeparator>
                <div class="grid grid-cols-1 lg:grid-cols-2 justify-center gap-4 w-full sm:p-6">
                    <StatsPieChart title="Programming Language" :data="ref(applyKVNames(stats.CodeLang, kvLists.CodeLang))"/>
                    <StatsPieChart title="Programming Environment" :data="ref(applyKVNames(stats.CodeEnv, kvLists.CodeEnv))"/>
                    <StatsBarChart class="w-full lg:col-span-2" title="External Tools" :data="ref(applyKVNames(stats.CodeTools, kvLists.CodeTools))" :maxval="stats.NumTeams"/>
                </div>
            </div>
            <PageError v-if="errorDisplay" :errortext="errorDisplay.text" :errormessage="errorDisplay.message"/>
        </ClientOnly>
        <PageLoading :show="!errorDisplay && !stats" message="Loading Statistics..."/>
    </div>
</template>

<script setup>
import { ftcKV, frcKV } from '~/assets/scripts/formKV'
import { Program } from '~/assets/scripts/programs';
const program = useState('program', () => Program.Generic)
useState('title').value = 'Statistics'

if (useRoute().params.program.toLowerCase() == "ftc") {
    program.value = Program.FTC;
} else if (useRoute().params.program.toLowerCase() == "frc") {
    program.value = Program.FRC;
} else {
    errorDisplay.value = {
        text: "Invalid Program",
        message: "The specified program is not valid."
    }
}


let kvLists = computed(() => {
    switch (program.value) {
        case Program.FTC:
            return ftcKV
        case Program.FRC:
            return frcKV
        default:
            return ftcKV
    }
})

let errorDisplay = ref(null)
let stats = ref(null)

if (program.value == Program.FTC || program.value == Program.FRC) {

    await useAsyncData(async () => {
        await $fetch(`${useRuntimeConfig().public.API_URL}/internal/getTeamStats/${program.value}`, {
            onResponse({response}) {
                if (response._data.NumTeams < 1) {
                    errorDisplay.value = {
                        text: "No Teams!",
                        message: "Please check again later."
                    }
                } else if (response.ok) {
                    stats.value = response._data
                } else {
                    errorDisplay.value = {
                    text: "There was an issue while fetching the statistics data.",
                    message: response._data
                }
                }
            },
            onResponseError({error}) {
                errorDisplay.value = {
                    text: "There was an issue while fetching the statistics data.",
                    message: error.message
                }
            },
            onRequestError() {
                errorDisplay.value = {
                    text: "There was an issue while fetching the statistics data.",
                    message: "API Communication Error."
                }
            }
        })
    }, {server: false})

}

function applyKVNames(data, kvList) {

    let newData = []

    data.forEach(element => {
        newData.push({
            name: kvList[element.name],
            value: element.value
        })
    });

    return newData;

}

useSeoMeta({
    title: `Statistics | ${program.value} Open Alliance`,
    ogTitle: 'Statistics',
    description: 'The home of open and collaborative robotics for FIRST Robotics',
    ogDescription: 'The home of open and collaborative robotics for FIRST Robotics',
    ogImage: '/images/OALogos/TwoLineStacked.svg',
})

</script>