<template lang="">
    <div>
        <PageTitle>
            <div class="flex flex-col lg:flex-row justify-between items-center w-[70vw] max-w-[50rem]">
                <div class="flex flex-col mb-5">
                    <h1 class="text-6xl md:text-8xl text-orange font-bold flex justify-center lg:justify-start">
                        {{ teamid }}
                    </h1>
                    <p class="text-2xl md:text-4xl flex justify-center lg:justify-start">
                        {{ teamData.TeamName }}
                    </p>
                    <p class="text-xl md:text-2xl text-orange-600 font-bold flex justify-center lg:justify-start">
                        {{ teamData.Location }}
                    </p>
                </div>
                <div class="flex flex-col *:text-xl justify-center w-60">
                    <TeamMiniStat name="Rookie Year" :val="teamData.RookieYear"/>
                    <TeamMiniStat name="Members" :val="teamData.TeamMembers"/>
                    <TeamMiniStat name="Mentors" :val="teamData.Mentors"/>
                    <TeamMiniStat name="Type" :val="kvLists.TeamType[teamData.TeamType]"/>
                </div>
            </div>
        </PageTitle>
        <div class="px-10 md:px-20 lg:px-48">
            <div class="pb-10">
                <div class="flex justify-center mb-5">
                    <UDivider class="text-xl text-orange md:text-4xl mt-12">Team Links</UDivider>
                </div>
                <div class="flex justify-center">
                    <div class="flex flex-col w-full justify-evenly md:flex-row *:rounded-none *:text-2xl *:px-[1vw] *:md:px-[2vw] *:justify-center *:mb-2 hover:*:ring-orange-200 *:hover:*:text-orange-200">
                        <UButton label="Website" v-bind:to="normalizeUrl(teamData.TeamWebsite)" v-if="checkNormalizable(teamData.TeamWebsite)"/>
                        <UButton label="Build Thread" v-bind:to="normalizeUrl(teamData.BuildThread)" v-if="checkNormalizable(teamData.BuildThread)"/>
                        <UButton label="CAD" v-bind:to="normalizeUrl(teamData.CAD)" v-if="checkNormalizable(teamData.CAD)"/>
                        <UButton label="Code" v-bind:to="normalizeUrl(teamData.Code)" v-if="checkNormalizable(teamData.Code)"/>
                        <UButton label="Photos" v-bind:to="normalizeUrl(teamData.Photo)" v-if="checkNormalizable(teamData.Photo)"/>
                        <UButton label="Videos" v-bind:to="normalizeUrl(teamData.Video)" v-if="checkNormalizable(teamData.Video)"/>
                    </div>
                </div>
            </div>
            <div class="pb-10">
                <div class="flex justify-center mb-5">
                    <UDivider class="text-xl text-orange md:text-4xl">Team Statistics</UDivider>
                </div>
                <TeamStat name="Meeting Hours/Week" v-bind:val="teamData.MeetingHours"/>
                <TeamStat name="Approx. Budget" v-bind:val="kvLists.Budget[teamData.Budget]"/>
                <TeamStat name="Workspace" v-bind:val="kvLists.Workspace[teamData.Workspace]"/>
                <TeamStat name="Sponsorship Status" v-bind:val="kvLists.Sponsors[teamData.Sponsors]"/>
            </div>
            <div class="pb-10">
                <div class="flex justify-center mb-5">
                    <UDivider class="text-xl text-orange md:text-4xl">Robot Statistics</UDivider>
                </div>
                <TeamStat name="Drivetrain" v-bind:val="kvLists.Drivetrain[teamData.Drivetrain]"/>
                <TeamStat name="Materials" v-bind:val="parseKVArray(teamData.Materials, kvLists.Materials)"/>
                <TeamStat name="Product Sources" v-bind:val="parseKVArray(teamData.Products, kvLists.Products)"/>
                <TeamStat name="Odometry" v-bind:val="parseKVArray(teamData.Odometry, kvLists.Odometry)"/>
                <TeamStat name="Sensors" v-bind:val="parseKVArray(teamData.Sensors, kvLists.Sensors)"/>
                <TeamStat name="Systems" v-bind:val="parseKVArray(teamData.Systems, kvLists.Systems)"/>
            </div>
            <div class="pb-10">
                <div class="flex justify-center mb-5">
                    <UDivider class="text-xl text-orange md:text-4xl">Code Statistics</UDivider>
                </div>
                <TeamStat name="Programming Language" v-bind:val="kvLists.CodeLang[teamData.CodeLang]"/>
                <TeamStat name="Development Environment" v-bind:val="kvLists.CodeEnv[teamData.CodeEnv]"/>
                <TeamStat name="3rd-Party Tools" v-bind:val="parseKVArray(teamData.CodeTools, kvLists.CodeTools)"/>
                <TeamStat name="Vision" v-bind:val="parseKVArray(teamData.Vision, kvLists.Vision)"/>
            </div>
        </div>
        <div class="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#f60_100%)]">
            <div class="flex justify-center mb-5 px-10 md:px-20 lg:px-48">
                <UDivider class="text-xl text-orange md:text-4xl">Free-Response</UDivider>
            </div>
            <UCarousel class="px-[10vw] py-10" v-if="items" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full'}" arrows :prev-button="{icon: 'i-heroicons-arrow-left-20-solid'}" :next-button="{icon: 'i-heroicons-arrow-right-20-solid'}">
                <PageTextBlock class="flex flex-col mx-10 shadow-black">
                    <p class="text-xl xl:text-3xl font-bold text-orange">
                        {{ item.q }}
                    </p>
                    <p class="p-6 md:p-12 text-md md:text-xl">
                        {{ item.a }}
                    </p>
                </PageTextBlock>
            </UCarousel>
        </div>
    </div>
</template>
<script setup>
import normalizeUrl from 'normalize-url';
const { teamid } = useRoute().params
import { kvLists } from '~/assets/scripts/formKV'

function checkNormalizable(inputUrl) {

    try{
        normalizeUrl(inputUrl)
    } catch (e) {
        return false
    }

    return true

    }

function parseKVArray(inputArray, kvList) {
    let outputArray = []
    inputArray.forEach(element => {
        if (kvList[element]) {
            outputArray.push(kvList[element])
        }
    });
    return outputArray.join(", ")
}

const {data} = await useFetch(`${useRuntimeConfig().public.API_URL}/teams/${teamid}/all`)

const teamData = data.value[0] || []

console.log(teamData)

if (teamData == []) {
    throw createError({ statusCode: 404, statusMessage: `The team you specified [ ${teamid} ] does not exist or is not registered on FTC Open Alliance.` })
}

let items = [
{
    q: "What is something that you think is unique about your robot this season? What about your robot do you think would make it stand out at competition?",
    a: teamData.UniqueFeatures
},
{
    q: "What types of Outreach do you plan to do for this season? Which of those Outreach initiatives are you most proud of?",
    a: teamData.Outreach
},
{
    q: "Describe an element of your code which you think will be most advantageous to your performance over the season.",
    a: teamData.CodeAdvantage
},
{
    q: "What competitions will you be attending? Which of the ones that you listed are you looking forward to the most?",
    a: teamData.Competitions
},
{
    q: "How will you be organizing your team at competitions?",
    a: teamData.TeamStrategy
},
{
    q: "Describe a unique or noteworthy strategic device or element that you think would be useful for this game.",
    a: teamData.GameStrategy
},
{
    q: "How would you describe your design process? How many options/strategies do you compare? How do you visualize your designs before building?",
    a: teamData.DesignProcess
},
].filter(item => item.a !== null);

useSeoMeta({
    title: `${teamid} | FTC Open Alliance`,
    ogTitle: teamid,
    description: 'The home of open and collaborative robotics for FIRST Tech Challenge',
    ogDescription: 'The home of open and collaborative robotics for FIRST Tech Challenge',
    ogImage: 'https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/png_4k/bg/2STACK-HORIZONTAL.png',
})

useHead
({
    title
    : `${teamid} | FTC Open Alliance`
})

</script>
<style lang="">

</style>