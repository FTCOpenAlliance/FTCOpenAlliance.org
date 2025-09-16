<template lang="">
    <div>
        <PageTitle>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col lg:flex-row justify-between items-center w-[70vw] max-w-200">
                    <div class="flex flex-col mb-5">
                        <h1 class="text-6xl md:text-8xl text-primary font-bold flex justify-center lg:justify-start">
                            {{ teamid }}
                        </h1>
                        <p class="text-2xl md:text-4xl flex justify-center lg:justify-start">
                            {{ teamData.TeamName }}
                        </p>
                        <p class="text-xl md:text-2xl text-primary-600 font-bold flex justify-center lg:justify-start">
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
                <div class="flex flex-row gap-2 w-full *:w-full">
                    <UButton :to="`https://ftcscout.org/teams/${teamid}`" target="_blank" icon="i-heroicons-arrow-top-right-on-square-16-solid" color="secondary" label="See Team on FTCScout"/>
                    <UButton :to="`https://theorangealliance.org/teams/${teamid}`" target="_blank" icon="i-heroicons-arrow-top-right-on-square-16-solid" color="secondary" label="See Team on Orange Alliance"/>
                </div>
            </div>
        </PageTitle>
        <div class="px-10 md:px-20 lg:px-48">
            <div class="pb-10">
                <div class="flex justify-center mb-5">
                    <USeparator class="text-xl text-primary md:text-4xl mt-12">Team Links</USeparator>
                </div>
                <div class="flex justify-center">
                    <div class="flex flex-col md:flex-row w-full *:w-full gap-2 *:text-2xl *:hover:ring-primary-200 *:hover:*:text-primary-200">
                        <UButton label="Website" target="_blank" v-bind:to="normalizeUrl(teamData.TeamWebsite)" v-if="checkNormalizable(teamData.TeamWebsite)"/>
                        <UButton label="Build Thread" target="_blank" v-bind:to="normalizeUrl(teamData.BuildThread)" v-if="checkNormalizable(teamData.BuildThread)"/>
                        <UButton label="CAD" target="_blank" v-bind:to="normalizeUrl(teamData.CAD)" v-if="checkNormalizable(teamData.CAD)"/>
                        <UButton label="Code" target="_blank" v-bind:to="normalizeUrl(teamData.Code)" v-if="checkNormalizable(teamData.Code)"/>
                        <UButton label="Photos" target="_blank" v-bind:to="normalizeUrl(teamData.Photo)" v-if="checkNormalizable(teamData.Photo)"/>
                        <UButton label="Videos" target="_blank" v-bind:to="normalizeUrl(teamData.Video)" v-if="checkNormalizable(teamData.Video)"/>
                    </div>
                </div>
            </div>
            <div class="pb-10">
                <div class="flex justify-center mb-5">
                    <USeparator class="text-xl text-primary md:text-4xl">Team Statistics</USeparator>
                </div>
                <TeamStat name="Meeting Hours/Week" v-bind:val="teamData.MeetingHours"/>
                <TeamStat name="Approx. Budget" v-bind:val="kvLists.Budget[teamData.Budget]"/>
                <TeamStat name="Workspace" v-bind:val="kvLists.Workspace[teamData.Workspace]"/>
                <TeamStat name="Sponsorship Status" v-bind:val="kvLists.Sponsors[teamData.Sponsors]"/>
            </div>
            <div class="pb-10">
                <div class="flex justify-center mb-5">
                    <USeparator class="text-xl text-primary md:text-4xl">Robot Statistics</USeparator>
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
                    <USeparator class="text-xl text-primary md:text-4xl">Code Statistics</USeparator>
                </div>
                <TeamStat name="Programming Language" v-bind:val="kvLists.CodeLang[teamData.CodeLang]"/>
                <TeamStat name="Development Environment" v-bind:val="kvLists.CodeEnv[teamData.CodeEnv]"/>
                <TeamStat name="3rd-Party Tools" v-bind:val="parseKVArray(teamData.CodeTools, kvLists.CodeTools)"/>
                <TeamStat name="Vision" v-bind:val="parseKVArray(teamData.Vision, kvLists.Vision)"/>
            </div>
        </div>
        <div v-if="items.length > 0" class="bg-radial">
            <div class="flex flex-col justify-center mb-5 md:px-20 lg:px-48">
                <USeparator class="text-xl text-primary md:text-4xl">Free-Response</USeparator>
                <UCarousel class="flex py-10" v-if="items" v-slot="{ item }" :items="items" arrows>
                    <PageBlock class="flex flex-col mx-10 shadow-black">
                        <h2 class="text-xl md:text-2xl font-bold text-primary">{{item.q}}</h2>
                        <PageText>
                            {{ item.a }}
                        </PageText>
                    </PageBlock>
                </UCarousel>
            </div>
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