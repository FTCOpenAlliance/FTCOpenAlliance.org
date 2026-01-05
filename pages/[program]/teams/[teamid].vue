<template lang="">
    <div>
        <PageTitle v-if="errorDisplay || !teamData">
            <h1 class="text-6xl lg:text-8xl text-primary font-bold">
                {{teamid}}
            </h1>
        </PageTitle>
        <PageTitle v-if="!errorDisplay && teamData">
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
                        <TeamMiniStat name="Type" :val="ftcKV.TeamType[teamData.TeamType]"/>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row gap-2 w-full *:w-full">
                    <UButton v-if="useState('program').value == Program.FTC" :to="`https://ftcscout.org/teams/${teamid}`" target="_blank" icon="i-heroicons-arrow-top-right-on-square-16-solid" color="secondary" label="See Team on FTCScout"/>
                    <UButton v-if="useState('program').value == Program.FTC" :to="`https://theorangealliance.org/teams/${teamid}`" target="_blank" icon="i-heroicons-arrow-top-right-on-square-16-solid" color="secondary" label="See Team on Orange Alliance"/>
                    <UButton v-if="useState('program').value == Program.FRC" :to="`https://thebluealliance.com/team/${teamid}`" target="_blank" icon="i-heroicons-arrow-top-right-on-square-16-solid" color="secondary" label="See Team on The Blue Alliance"/>
                </div>
            </div>
        </PageTitle>
        <ClientOnly>
            <div v-if="!errorDisplay && teamData" class="flex flex-col gap-10 px-10 md:px-20 lg:px-48">
                <div>
                    <div class="flex justify-center mb-5">
                        <USeparator class="text-xl text-primary md:text-4xl mt-12">Team Links</USeparator>
                    </div>
                    <div class="flex justify-center">
                        <div class="flex flex-col md:flex-row w-full *:w-full gap-2 *:text-2xl *:hover:ring-primary-200 *:hover:*:text-primary-200">
                            <UButton label="Website" target="_blank" :to="normalizeUrl(teamData.TeamWebsite, normalizeOptions)" v-if="checkNormalizable(teamData.TeamWebsite)"/>
                            <UButton label="Build Thread" target="_blank" :to="normalizeUrl(teamData.BuildThread, normalizeOptions)" v-if="checkNormalizable(teamData.BuildThread)"/>
                            <UButton label="CAD" target="_blank" :to="normalizeUrl(teamData.CAD, normalizeOptions)" v-if="checkNormalizable(teamData.CAD)"/>
                            <UButton label="Code" target="_blank" :to="normalizeUrl(teamData.Code, normalizeOptions)" v-if="checkNormalizable(teamData.Code)"/>
                            <UButton label="Photos" target="_blank" :to="normalizeUrl(teamData.Photo, normalizeOptions)" v-if="checkNormalizable(teamData.Photo)"/>
                            <UButton label="Videos" target="_blank" :to="normalizeUrl(teamData.Video, normalizeOptions)" v-if="checkNormalizable(teamData.Video)"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-center mb-5">
                        <USeparator class="text-xl text-primary md:text-4xl">Team Statistics</USeparator>
                    </div>
                    <TeamStat name="Meeting Hours/Week" :val="teamData.MeetingHours"/>
                    <TeamStat name="Approx. Budget" :val="ftcKV.Budget[teamData.Budget]"/>
                    <TeamStat name="Workspace" :val="ftcKV.Workspace[teamData.Workspace]"/>
                    <TeamStat name="Sponsorship Status" :val="ftcKV.Sponsors[teamData.Sponsors]"/>
                </div>
                <div>
                    <div class="flex justify-center mb-5">
                        <USeparator class="text-xl text-primary md:text-4xl">Robot Statistics</USeparator>
                    </div>
                    <TeamStat name="Drivetrain" :val="ftcKV.Drivetrain[teamData.Drivetrain]"/>
                    <TeamStat name="Materials" :val="parseKVArray(teamData.Materials, ftcKV.Materials)"/>
                    <TeamStat name="Product Sources" :val="parseKVArray(teamData.Products, ftcKV.Products)"/>
                    <TeamStat name="Odometry" :val="parseKVArray(teamData.Odometry, ftcKV.Odometry)"/>
                    <TeamStat name="Sensors" :val="parseKVArray(teamData.Sensors, ftcKV.Sensors)"/>
                    <TeamStat name="Systems" :val="parseKVArray(teamData.Systems, ftcKV.Systems)"/>
                </div>
                <div>
                    <div class="flex justify-center mb-5">
                        <USeparator class="text-xl text-primary md:text-4xl">Code Statistics</USeparator>
                    </div>
                    <TeamStat name="Programming Language" :val="ftcKV.CodeLang[teamData.CodeLang]"/>
                    <TeamStat name="Development Environment" :val="ftcKV.CodeEnv[teamData.CodeEnv]"/>
                    <TeamStat name="3rd-Party Tools" :val="parseKVArray(teamData.CodeTools, ftcKV.CodeTools)"/>
                    <TeamStat name="Vision" :val="parseKVArray(teamData.Vision, ftcKV.Vision)"/>
                </div>
                <div v-if="teamData.Awards && teamData.Awards.length > 0" class="flex flex-col py-6 gap-5">
                    <USeparator class="text-xl text-primary md:text-4xl">Award History</USeparator>
                    <div class="flex flex-row justify-between items-center gap-4 p-2 md:p-6 bg-glass border-2 border-primary" v-for="award in teamData.Awards">
                        <p class="text-xl md:text-5xl font-bold text-primary">{{ award.Year }}</p>
                        <p class="text-lg md:text-2xl lg:text-3xl">{{ award.Award }}</p>
                    </div>
                </div>
                <div v-if="frqItems">
                    <USeparator class="text-xl text-primary md:text-4xl">Free-Response</USeparator>
                    <UCarousel class="flex py-10 *:*:items-center" v-if="frqItems" v-slot="{ item }" :items="frqItems" arrows>
                        <PageBlock class="flex flex-col mx-10 shadow-black">
                            <h2 class="text-xl md:text-2xl font-bold text-primary">{{item.q}}</h2>
                            <PageText>
                                {{ item.a }}
                            </PageText>
                        </PageBlock>
                    </UCarousel>
                </div>
            </div>
            <PageError v-if="errorDisplay" :errortext="errorDisplay.text" :errormessage="errorDisplay.message"/>
        </ClientOnly>
        <PageLoading :show="!errorDisplay && !teamData" :message="`Loading Team ${teamid}...`"/>
    </div>
</template>
<script setup>
import normalizeUrl from 'normalize-url';
import { ftcKV } from '~/assets/scripts/formKV'
import { Program } from '~/assets/scripts/programs';
const { program, teamid } = useRoute().params
const normalizeOptions = {
    stripWWW: false
}

if (program.toLowerCase() == "ftc") {
    useState('program').value = Program.FTC;
} else if (program.toLowerCase() == "frc") {
    useState('program').value = Program.FRC;
} else {
    useState('program').value = Program.Generic;
}

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

let errorDisplay = ref(null)
let teamData = ref(null)
let frqItems = ref(null)

await useAsyncData(async () => {
    await $fetch(`${useRuntimeConfig().public.API_URL}/teams/${program}/${teamid}/all`, {
        onResponse({response}) {
            if (!response.ok) {
                errorDisplay.value = {
                    text: "There was an issue while fetching the list of teams.",
                    message: response._data
                }
            } else {
                teamData.value = response._data
                assembleFRQItems()
            }
        },
        onResponseError({error}) {
            errorDisplay.value = {
                text: "There was an issue while fetching this team's data.",
                message: error.message
            }
        },
        onRequestError() {
            errorDisplay.value = {
                text: "There was an issue while fetching this team's data.",
                message: "API Communication Error."
            }
        }
    })
}, {server: false})

function assembleFRQItems() {
    frqItems.value = [
        {
            q: "What is something that you think is unique about your robot this season? What about your robot do you think would make it stand out at competition?",
            a: teamData.value.UniqueFeatures
        },
        {
            q: "What types of Outreach do you plan to do for this season? Which of those Outreach initiatives are you most proud of?",
            a: teamData.value.Outreach
        },
        {
            q: "Describe an element of your code which you think will be most advantageous to your performance over the season.",
            a: teamData.value.CodeAdvantage
        },
        {
            q: "What competitions will you be attending? Which of the ones that you listed are you looking forward to the most?",
            a: teamData.value.Competitions
        },
        {
            q: "How will you be organizing your team at competitions?",
            a: teamData.value.TeamStrategy
        },
        {
            q: "Describe a unique or noteworthy strategic device or element that you think would be useful for this game.",
            a: teamData.value.GameStrategy
        },
        {
            q: "How would you describe your design process? How many options/strategies do you compare? How do you visualize your designs before building?",
            a: teamData.value.DesignProcess
        },
    ].filter(item => item.a !== null)
    if (frqItems.value.length < 1) {
        frqItems.value = null
    }
}

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