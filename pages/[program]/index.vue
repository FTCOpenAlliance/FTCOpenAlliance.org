<template>
    
    <div>
        <PageTitle class="*:*:flex-col lg:*:*:flex-row min-h-screen *:px-4 *:md:px-auto">
            <div class="flex justify-center items-center lg:mr-10 w-3/5 lg:w-auto">
                <img :src="`/images/${program}OALogos/Icon.svg`">
            </div>
            <div>
                <h1 class="my-5 text-4xl md:text-7xl xl:text-8xl font-bold gradient-overlay">
                    <span class="text-primary">{{ program }}</span> Open Alliance
                </h1>
                <p class="text-xl pb-5">
                    The home of open and collaborative robotics for <strong>{{ programDetails.full }}</strong>.
                </p>
                <div class="flex flex-col flex-wrap sm:flex-row gap-2 pt-6 sm:pt-0 justify-center *:justify-center *:text-lg *:grow">
                    <UButton label="Explore Teams" :to="`/${program.toLowerCase()}/teams`"/>
                    <UButton label="View Statistics" :to="`/${program.toLowerCase()}/stats`"/>
                    <UButton :label="`Join the ${program}OA`" to="/join"/>
                    <UButton :class="`ring-[var(--primary-${programDetails.other})] text-[var(--primary-${programDetails.other}-200)]`" :label="`Go To ${programDetails.other.toUpperCase()}`" :to="`/${programDetails.other}`"/>
                </div>
            </div>
        </PageTitle>
        <div class="justify-center items-center animate-bounce flex">
            <UIcon class="scale-[3] translate-y-[-3.5em]" name="i-heroicons-chevron-double-down"/>
        </div>
        <div class="flex flex-col p-6 md:p-12 lg:px-36 xl:px-60 z-10 gap-12 bg-radial">
            <PageBlock :title="`What is the ${program} Open Alliance?`">
                <PageText>
                    The {{ program }} Open Alliance is an organization created to help {{ programDetails.full }} teams easily <strong>share their information and statistics to a wider audience</strong>.
                    The Alliance is a great resource for newer teams that are looking to get started or veteran teams that are looking to expand their capabilities.
                    Being a member of an {{ program }} Open Alliance team is not required to access the information of Alliance teams.
                    <br><br>
                    Teams that sign up for the {{ program }} Open Alliance provide links to their robot CAD, Code, and media, and provide updates to their progress through a build thread on <a href="https://www.chiefdelphi.com/" target="_blank" class="text-primary hover:text-primary-300 font-bold">Chief Delphi</a>.
                    They may also provide useful statistics and answers relating to their team, robot design, and strategy.
                    {{ program }} Open Alliance teams strive to be open and transparent, and should share both successful progress and frustrating challenges.
                    <br><br>
                    <strong>Join the conversation!</strong> Share your team's insights with the community by <NuxtLink to="/join" class="text-primary hover:text-primary-300 font-bold">signing up today</NuxtLink>!
                </PageText>
            </PageBlock>
            <PageBlock v-if="program == Program.FTC" title="History of the FTC Open Alliance">
                <PageText>
                    Prior to the 2024-2025 FIRST® Tech Challenge season (INTO THE DEEP), and inspired by the original FRC Open Alliance (then "The Open Alliance"), the FTC Open Alliance was formed to bring collaboration and the values of said program to FIRST® Tech Challenge teams.
                    Alongside providing a listing for teams' CAD, Code, Build Thread, and media links, the new platform also gathered further robot/team statistics, and provided enhanced visualization and API capabilities.
                    Started with permission from the original Open Alliance, the FTC Open Alliance received much community interaction and support during its first year.
                    <br><br>
                    After a successful beta-testing season, the FTC Open Alliance went through a number of monumental changes. Aside from adding support for statistics visualizations and better backend infrastructure, the platform added support for FIRST® Robotics Competition teams, unifying the Open Alliance program.
                    The Open Alliance also became a fiscally-sponsored nonprofit organization (through Hack Club's HCB), and gained partnerships with multiple robotics providers.
                </PageText>
            </PageBlock>
            <PageBlock v-if="program == Program.FRC" title="History of the FRC Open Alliance">
                <PageText>
                    The FRC Open Alliance (originally referred to as simply, "The Open Alliance") was created in 2020 by a group of FRC teams who wanted to share more knowledge with the FRC community.
                    The goal was to create a less secretive competition environment where all teams could perform at their best.
                    Starting with just 6 teams, the alliance was first hosted only on the Chief Delphi forum. In 2022, the Alliance was opened to all teams, and hosted on a dedicated website.
                    <br><br>
                    Shortly after the creation of the FTC Open Alliance in 2024, the FRC Open Alliance migrated back to Chief Delphi, as their online platform went unmaintained.
                    Since the FTC Open Alliance website had all of the features of the previous FRC Open Alliance website, the new service was extended to both programs.
                    With that, the combined Open Alliance platform was born, now a mature platform with nonprofit status and industry partners.
                </PageText>
            </PageBlock>
        </div>
        <PartnerSection />
    </div>    
</template>

<script setup>
import { Program } from '~/assets/scripts/programs';
    
const program = useState('program', () => Program.Generic)
useState('title').value = 'Home'

let programDetails = {}

if (useRoute().params.program.toLowerCase() == "ftc") {
    program.value = Program.FTC;
    programDetails = {
        full: 'FIRST® Tech Challenge',
        other: 'frc'
    }
} else if (useRoute().params.program.toLowerCase() == "frc") {
    program.value = Program.FRC;
    programDetails = {
        full: 'FIRST® Robotics Competition',
        other: 'ftc'
    }
} else if (import.meta.server) {
    throw createError({
    status: 404,
    statusText: 'Page Not Found',
  })
}

useSeoMeta({
    title: `Home | ${useState('program').value} Open Alliance`,
    ogTitle: 'Home',
    description: 'The home of open and collaborative robotics for FIRST Robotics',
    ogDescription: 'The home of open and collaborative robotics for FIRST Robotics',
    ogImage: '/images/OALogos/TwoLineStacked.svg',
})
</script>