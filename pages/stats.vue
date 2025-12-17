<template>
    <div>
        <PageTitle>
            <h1 class="text-6xl lg:text-8xl text-primary font-bold">
                Statistics
            </h1>
        </PageTitle>
        <div v-if="!showError" class="flex flex-col gap-8 pt-8 sm:px-12 md:px-24">
            <USeparator class="text-xl text-primary md:text-4xl"> Alliance Stats </USeparator>
            <div class="grid grid-cols-1 lg:grid-cols-3 *:w-full gap-8 w-full sm:p-6">
                <div class="flex flex-col gap-4 bg-grid h-80 lg:h-auto">
                    <div class="flex flex-col lg:gap-4 w-full h-full items-center justify-center bg-glass shadow-lg shadow-orange">
                        <p class="text-2xl lg:text-4xl text-orange">Alliance Teams</p>
                        <p class="text-5xl lg:text-8xl text-white font-bold">{{ stats.NumTeams }}</p>
                    </div>
                    <div class="flex flex-col lg:gap-4 w-full h-full items-center justify-center bg-glass shadow-lg shadow-orange">
                        <p class="text-2xl lg:text-4xl text-orange">International Reach</p>
                        <p class="text-5xl lg:text-8xl text-white font-bold">{{ stats.Location.filter(item => item.name != "").length }}</p>
                        <p class="text-lg lg:text-2xl text-orange">Countries</p>
                    </div>
                </div>
                <StatsMap class="lg:col-span-2" title="Team Map" :data="stats.Location"/>
            </div>
            <USeparator class="text-xl text-primary md:text-4xl"> Team Info </USeparator>
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 *:w-full gap-4 w-full sm:p-6">
                <StatsPieChart title="Team Type" :data="ref(applyKVNames(stats.TeamType, ftcKV.TeamType))"/>
                <StatsPieChart title="Budget" :data="ref(applyKVNames(stats.Budget, ftcKV.Budget))"/>
                <StatsPieChart title="Workspace" :data="ref(applyKVNames(stats.Workspace, ftcKV.Workspace))"/>
                <StatsPieChart title="# of Sponsors" :data="ref(applyKVNames(stats.Sponsors, ftcKV.Sponsors))"/>
            </div>
            <USeparator class="text-xl text-primary md:text-4xl"> Robot Info </USeparator>
            <div class="grid grid-cols-1 lg:grid-cols-12 *:w-full gap-4 w-full sm:p-6">
                <StatsPieChart class="lg:col-span-4" title="Drivetrain Types" :data="ref(applyKVNames(stats.Drivetrain, ftcKV.Drivetrain))"/>
                <StatsBarChart class="lg:col-span-8" title="Materials" :data="ref(applyKVNames(stats.Materials, ftcKV.Materials))" :maxval="stats.NumTeams"/>
                <StatsBarChart class="lg:col-span-6" title="Products" :data="ref(applyKVNames(stats.Products, ftcKV.Products))" :maxval="stats.NumTeams"/>
                <StatsBarChart class="lg:col-span-6" title="Systems" :data="ref(applyKVNames(stats.Systems, ftcKV.Systems))" :maxval="stats.NumTeams"/>
                <StatsBarChart class="lg:col-span-6" title="Odometry" :data="ref(applyKVNames(stats.Odometry, ftcKV.Odometry))" :maxval="stats.NumTeams"/>
                <StatsBarChart class="lg:col-span-6" title="Sensors" :data="ref(applyKVNames(stats.Sensors, ftcKV.Sensors))" :maxval="stats.NumTeams"/>
            </div>
            <USeparator class="text-xl text-primary md:text-4xl"> Programming Info </USeparator>
            <div class="grid grid-cols-1 lg:grid-cols-2 justify-center gap-4 w-full sm:p-6">
                <StatsPieChart title="Programming Language" :data="ref(applyKVNames(stats.CodeLang, ftcKV.CodeLang))"/>
                <StatsPieChart title="Programming Environment" :data="ref(applyKVNames(stats.CodeEnv, ftcKV.CodeEnv))"/>
                <StatsBarChart class="w-full lg:col-span-2" title="External Tools" :data="ref(applyKVNames(stats.CodeTools, ftcKV.CodeTools))" :maxval="stats.NumTeams"/>
            </div>
        </div>
        <PageError :error="showError" :errortext="errorText" :errormessage="errorMessage"/>
    </div>
</template>

<script setup>
import { ftcKV } from '~/assets/scripts/formKV'
const fetch = await useFetch(`${useRuntimeConfig().public.API_URL}/internal/getTeamStats`, {server: false})
let showError, errorText, errorMessage

let stats = fetch.data.value ?? undefined

if (stats == undefined) {
    showError = true
    errorText = "There was an issue while fetching team data."
    errorMessage = fetch.error.value.data
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

useHead
({
    title
    : 'Statistics | FTC Open Alliance'
})
</script>