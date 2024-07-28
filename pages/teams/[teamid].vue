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
                        <UButton label="Website" v-bind:to="'//' + teamData[2]" v-if="teamData[2] != ''"/>
                        <UButton label="Build Thread" v-bind:to="'//' + teamData[3]" v-if="teamData[3] != ''"/>
                        <UButton label="CAD" v-bind:to="'//' + teamData[4]" v-if="teamData[4] != ''"/>
                        <UButton label="Code" v-bind:to="'//' + teamData[5]" v-if="teamData[5] != ''"/>
                        <UButton label="Photos" v-bind:to="'//' + teamData[6]" v-if="teamData[6] != ''"/>
                        <UButton label="Videos" v-bind:to="'//' + teamData[7]" v-if="teamData[7] != ''"/>
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
            <div class="pb-10">
                <div class="flex justify-center mb-5">
                    <UDivider class="text-xl text-orange md:text-4xl">Free-Response</UDivider>
                </div>
                <PageTextBlock>
                    <p class="text-xl xl:text-4xl font-bold text-orange">
                        What is something that you think is unique about your robot this season?
                        What about your robot do you think would make it stand out at competition?
                    </p>
                    <p class="p-6 md:p-12 text-lg md:text-xl">
                        {{ teamData[26] }}
                    </p>
                </PageTextBlock>
                <PageTextBlock>
                    <p class="text-xl xl:text-4xl font-bold text-orange">
                        What types of Outreach do you plan to do for this season?
                        Which of those Outreach initiatives are you most proud of?
                    </p>
                    <p class="p-6 md:p-12 text-lg md:text-xl">
                        {{ teamData[27] }}
                    </p>
                </PageTextBlock>
                <PageTextBlock>
                    <p class="text-xl xl:text-4xl font-bold text-orange">
                        Describe an element of your code which you think will be most
                        advantageous to your performance over the season.
                    </p>
                    <p class="p-6 md:p-12 text-lg md:text-xl">
                        {{ teamData[28] }}
                    </p>
                </PageTextBlock>
                <PageTextBlock>
                    <p class="text-xl xl:text-4xl font-bold text-orange">
                        What competitions will you be attending?
                        Which of the ones that you listed are you looking forward to the most?
                    </p>
                    <p class="p-6 md:p-12 text-lg md:text-xl">
                        {{ teamData[29] }}
                    </p>
                </PageTextBlock>
                <PageTextBlock>
                    <p class="text-xl xl:text-4xl font-bold text-orange">
                        How will you be organizing your team at competitions?
                    </p>
                    <p class="p-6 md:p-12 text-lg md:text-xl">
                        {{ teamData[30] }}
                    </p>
                </PageTextBlock>
                <PageTextBlock>
                    <p class="text-xl xl:text-4xl font-bold text-orange">
                        Describe a unique or noteworthy strategic device or element that
                        you think would be useful for this game.
                    </p>
                    <p class="p-6 md:p-12 text-lg md:text-xl">
                        {{ teamData[31] }}
                    </p>
                </PageTextBlock>
                <PageTextBlock>
                    <p class="text-xl xl:text-4xl font-bold text-orange">
                        How would you describe your design process? How many options/strategies do you compare?
                        How do you visualize your designs before building?
                    </p>
                    <p class="p-6 md:p-12 text-lg md:text-xl">
                        {{ teamData[32] }}
                    </p>
                </PageTextBlock>
                <PageTextBlock>
                    <p class="text-xl xl:text-4xl font-bold text-orange">
                        How do you divide your team's time between things like design, building, programming etc.
                        Do you enforce this timing? If so, why?
                    </p>
                    <p class="p-6 md:p-12 text-lg md:text-xl">
                        {{ teamData[33] }}
                    </p>
                </PageTextBlock>
            </div>
        </div>
    </div>
</template>
<script setup>
const { teamid } = useRoute().params

let url = 'https://script.google.com/macros/s/AKfycbycFM4msB2ZJTt_vEGPi3gOL0EBeekRxUbH248JZExRoSHZmfbJZZTVtv1pBZyClfT1/exec'


const {data} = await useFetch(url, {
    query: {request: 'getTeamData', team: teamid}
})

const teamData = data._rawValue.data

if (teamData[0] == undefined) {
    throw createError({ statusCode: 404, statusMessage: `The team you specified [ ${teamid} ] does not exist or is not registered on FTC Open Alliance.` })
}
</script>
<style lang="">

</style>