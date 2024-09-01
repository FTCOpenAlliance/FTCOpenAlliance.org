<template lang="">
    <div>
        <PageTitle>
            <div class="flex flex-col lg:flex-row justify-between items-center w-[70vw] max-w-[50rem]">
                <div class="flex flex-col mb-5">
                    <h1 class="text-6xl md:text-8xl text-orange font-bold flex justify-center lg:justify-start">
                        {{ teamid }}
                    </h1>
                    <p class="text-2xl md:text-4xl flex justify-center lg:justify-start">
                        {{ teamData[1] }}
                    </p>
                </div>
                <div class="flex flex-col *:text-xl justify-center w-60">
                    <TeamMiniStat name="Rookie Year" :val="teamData[8]"/>
                    <TeamMiniStat name="Members" :val="teamData[9]"/>
                    <TeamMiniStat name="Mentors" :val="teamData[10]"/>
                    <TeamMiniStat name="Type" :val="teamData[11]"/>
                </div>
            </div>
        </PageTitle>
        <div class="px-10 md:px-20 lg:px-48">
            <div class="pb-10">
                <div class="flex justify-center mb-5">
                    <UDivider class="text-xl text-orange md:text-4xl">Team Links</UDivider>
                </div>
                <div class="flex justify-center">
                    <div class="flex flex-col w-full justify-evenly md:flex-row *:rounded-none *:text-2xl *:px-[1vw] *:md:px-[2vw] *:justify-center *:mb-2">
                        <UButton label="Website" v-bind:to="normalizeUrl(teamData[2], {normalizeProtocol: true})" v-if="teamData[2] != ''"/>
                        <UButton label="Build Thread" v-bind:to="normalizeUrl(teamData[3], {normalizeProtocol: true})" v-if="teamData[3] != ''"/>
                        <UButton label="CAD" v-bind:to="normalizeUrl(teamData[4], {normalizeProtocol: true})" v-if="teamData[4] != ''"/>
                        <UButton label="Code" v-bind:to="normalizeUrl(teamData[5], {normalizeProtocol: true})" v-if="teamData[5] != ''"/>
                        <UButton label="Photos" v-bind:to="normalizeUrl(teamData[6], {normalizeProtocol: true})" v-if="teamData[6] != ''"/>
                        <UButton label="Videos" v-bind:to="normalizeUrl(teamData[7], {normalizeProtocol: true})" v-if="teamData[7] != ''"/>
                    </div>
                </div>
            </div>
            <div class="pb-10">
                <div class="flex justify-center mb-5">
                    <UDivider class="text-xl text-orange md:text-4xl">Team Statistics</UDivider>
                </div>
                <TeamStat name="Meeting Hours/Week" v-bind:val="teamData[12]"/>
                <TeamStat name="Approx. Budget" v-bind:val="teamData[13]"/>
                <TeamStat name="Workspace" v-bind:val="teamData[14]"/>
                <TeamStat name="Sponsorship Status" v-bind:val="teamData[15]"/>
            </div>
            <div class="pb-10">
                <div class="flex justify-center mb-5">
                    <UDivider class="text-xl text-orange md:text-4xl">Robot Statistics</UDivider>
                </div>
                <TeamStat name="Drivetrain" v-bind:val="teamData[16]"/>
                <TeamStat name="Materials" v-bind:val="teamData[17]"/>
                <TeamStat name="Providers" v-bind:val="teamData[18]"/>
                <TeamStat name="Odometry" v-bind:val="teamData[19]"/>
                <TeamStat name="Sensors" v-bind:val="teamData[20]"/>
                <TeamStat name="Systems" v-bind:val="teamData[24]"/>
            </div>
            <div class="pb-10">
                <div class="flex justify-center mb-5">
                    <UDivider class="text-xl text-orange md:text-4xl">Code Statistics</UDivider>
                </div>
                <TeamStat name="Programming Language" v-bind:val="teamData[21]"/>
                <TeamStat name="Development Environment" v-bind:val="teamData[25]"/>
                <TeamStat name="3rd-Party Tools" v-bind:val="teamData[22]"/>
                <TeamStat name="Vision" v-bind:val="teamData[23]"/>
            </div>
        </div>
        <div class="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#f60_100%)]">
            <div class="flex justify-center mb-5 px-10 md:px-20 lg:px-48">
                <UDivider class="text-xl text-orange md:text-4xl">Free-Response</UDivider>
            </div>
            <UCarousel class="px-[10vw] py-10" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full'}" arrows>
                <PageTextBlock>
                    <p class="text-xl xl:text-4xl font-bold text-orange">
                        {{ item.q }}
                    </p>
                    <p class="p-6 md:p-12 text-lg md:text-xl">
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

let url = 'https://script.google.com/macros/s/AKfycbycFM4msB2ZJTt_vEGPi3gOL0EBeekRxUbH248JZExRoSHZmfbJZZTVtv1pBZyClfT1/exec'


const {data} = await useFetch(url, {
    query: {request: 'getTeamData', team: teamid}
})

const teamData = data._rawValue.data

if (teamData[0] == undefined) {
    throw createError({ statusCode: 404, statusMessage: `The team you specified [ ${teamid} ] does not exist or is not registered on FTC Open Alliance.` })
}

let items = [
{
    q: "What is something that you think is unique about your robot this season? What about your robot do you think would make it stand out at competition?",
    a: teamData[26]
},
{
    q: "What types of Outreach do you plan to do for this season? Which of those Outreach initiatives are you most proud of?",
    a: teamData[27]
},
{
    q: "Describe an element of your code which you think will be most advantageous to your performance over the season.",
    a: teamData[28]
},
{
    q: "What competitions will you be attending? Which of the ones that you listed are you looking forward to the most?",
    a: teamData[29]
},
{
    q: "How will you be organizing your team at competitions?",
    a: teamData[30]
},
{
    q: "Describe a unique or noteworthy strategic device or element that you think would be useful for this game.",
    a: teamData[31]
},
{
    q: "How would you describe your design process? How many options/strategies do you compare? How do you visualize your designs before building?",
    a: teamData[32]
},
{
    q: "How do you divide your team's time between things like design, building, programming etc. Do you enforce this timing? If so, why?",
    a: teamData[33]
}
]

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