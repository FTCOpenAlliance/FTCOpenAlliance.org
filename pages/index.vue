<template>
    <div>
        <div>
            <PageTitle class="*:*:flex-col lg:*:*:flex-row min-h-screen *:px-4 *:md:px-auto">
                <div class="flex justify-center items-center lg:mr-10 w-3/5 lg:w-auto">
                    <img src="/images/OALogos/Icon.svg">
                </div>
                <div>
                    <h1 class="my-5 text-4xl md:text-7xl xl:text-8xl font-bold">
                        The Open Alliance
                    </h1>
                    <p class="text-xl pb-5">
                        The home of open and collaborative robotics for <strong>FIRST® Robotics</strong>.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-2 pt-6 sm:pt-0 justify-center *:justify-center *:text-lg *:mx-1 *:mb-2 sm:*:mb-0">
                        <UButton class="w-full sm:w-1/3 ring-[var(--primary-ftc)] text-[var(--primary-ftc-200)]" label="Explore FTC Teams" to="/ftc/teams"/>
                        <UButton class="w-full sm:w-1/3" label="Join the Alliance" to="/join"/>
                        <UButton class="w-full sm:w-1/3 ring-[var(--primary-frc)] text-[var(--primary-frc-200)]" label="Explore FRC Teams" to="/frc/teams"/>
                    </div>
                </div>
            </PageTitle>
            <div class="justify-center items-center animate-bounce flex">
                <UIcon class="scale-[3] translate-y-[-3.5em]" name="i-heroicons-chevron-double-down"/>
            </div>
        </div>
        <div class="flex flex-col p-6 md:p-12 lg:px-36 xl:px-60 z-10 gap-12 bg-radial">
            <PageBlock title="What is the Open Alliance?">
                <PageText>
                    The Open Alliance is an organization created to help FIRST® Robotics teams easily <strong>share their information and statistics to a wider audience</strong>.
                    The Alliance is a great resource for newer teams that are looking to get started or veteran teams that are looking to
                    expand their capabilities.
                    Being a member of an Open Alliance team is not required to access the information of Alliance teams.
                </PageText>
            </PageBlock>
            <PageDualBlock title="What can the Alliance do for my team?">
                    <p class="px-6 md:px-12 text-md md:text-xl 2xl:w-1/2">
                        Even if your team is not a member of the Open Alliance, you are still free to be inspired by any information that Alliance teams make available.
                        The Alliance presents information to teams in a way that allows them to study the decisions and statistics of
                        specific teams while also observing Alliance-wide trends throughout a season.
                        This information can be used to compare your team's structure, process, and design to other Alliance teams.
                        The data that the Alliance collects can be useful in many parts of the season, as it can be used by teams as
                        they build their robots as well as at competitions to reinforce scouting data.
                    </p>
                    <div class="w-full 2xl:w-1/2 relative">
                        <TeamCell teamnumber=99999 teamname="Your Team Name Here" teamlocation="Your City Here"
                        cadlink="https://www.example.com" codelink="https://example.com" buildthread="https://example.com"
                        weblink="https://example.com" photolink="https://example.com" videolink="https://example.com" awardyear="20XX" award="Best Example"/>
                        <div class="absolute top-0 left-0 w-full h-full"></div>
                    </div>
            </PageDualBlock>
            <PageBlock title="Open Alliance Principles">
                <PageText>
                    All Open Alliance teams should strive to follow these principles:<br><br>
                    <ul class="list-[square]">
                        <li>Alliance teams do not keep secrets.</li>
                        <li>Alliance teams do their best to provide frequent updates throughout the year.</li>
                        <li>Alliance teams use Chief Delphi to post updates and answer questions. They are also encouraged to explore other mediums.</li>
                        <li>Alliance teams provide open code and/or CAD.</li>
                        <li>Alliance teams include the bad and the good.</li>
                        <li>Alliance teams join to help all teams, not just other Open Alliance teams.</li>
                    </ul>
                </PageText>
            </PageBlock>
            <PageBlock title="How do I join the Alliance?">
                <PageText>
                    You can sign your team up using the “Register/Update” button at the top of the page.
                    When you sign up, you will be asked to provide some information about both your team structure and robot.
                    You'll also be asked to provide links to your team's build thread, CAD, Code, and other resources. The build thread
                    is a required component that must be created before you register. You can create one on the Chief Delphi forum, and should update it regularly.
                    All information provided except for your contact email and shipping address are public and able to be changed at a later time.
                </PageText>
            </PageBlock>
        </div>
        <PartnerSection/>
    </div>
</template>

<script setup>
import { Program } from '~/assets/scripts/programs';

useState('program').value = Program.Generic
useState('title').value = 'Home'

useSeoMeta({
    title: 'The Open Alliance',
    ogTitle: 'The Open Alliance',
    description: 'The home of open and collaborative robotics for FIRST Robotics',
    ogDescription: 'The home of open and collaborative robotics for FIRST Robotics',
    ogImage: '/images/OALogos/ShortHorizontal.png',
})

</script>
<style>

</style>