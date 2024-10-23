<template>
    <div>
        <div>
            <PageTitle class="*:block *:lg:flex min-h-screen px-4 md:px-auto">
                <div class="flex justify-center items-center lg:mr-10">
                    <img src="https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/svg/ICON.svg">
                </div>
                <div>
                    <h1 class="my-5 text-4xl md:text-7xl xl:text-8xl font-bold text-orange">
                        <span class="text-white">FTC</span> Open Alliance
                    </h1>
                    <p class="text-xl pb-5">
                        The home of open and collaborative robotics for <span class="font-bold">FIRST Tech Challenge</span>.
                    </p>
                </div>
            </PageTitle>
            <div class="flex justify-center items-center animate-bounce">
                <UIcon class="scale-[3] translate-y-[-3.5em]" name="i-heroicons-chevron-double-down"/>
            </div>
        </div>
        <div class="p-6 md:p-12 lg:px-36 xl:px-60 z-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#f60_100%)]">
            <PageTextBlock>
                <p class="text-4xl md:text-6xl font-bold text-orange">What is FTC Open Alliance?</p>
                <p class="p-6 md:p-12 text-lg md:text-xl lg:text-2xl">
                    Based on FRC's <a class="text-orange" href="https://www.theopenalliance.com/">The Open Alliance</a>, FTC Open Alliance
                    is an organization created to help teams easily share their information and statistics to a wider audience.
                    The Alliance is a great resource for newer teams that are looking to get started or veteran teams that are looking to
                    expand their capabilities.
                    Being a member of the FTC Open Alliance is not required to access the information of Alliance teams.<br><br>
                    
                    FTC Open Alliance was started with the permission of The Open Alliance. It is modelled after them and follows the same 6
                    guiding principles.
                </p>
            </PageTextBlock>
            <PageTextBlock>
                <p class="text-4xl md:text-6xl font-bold text-orange">What can the Alliance do for my team?</p>
                <p class="p-6 md:p-12 text-lg md:text-xl lg:text-2xl">
                    The way your team uses FTC Open Alliance data is up to you.
                    The Alliance presents information to teams in a way that allows them to study the decisions and statistics of
                    specific teams while also observing Alliance-wide trends throughout a season.
                    This information can be used to compare your team's structure, process, and design to other Alliance teams.
                    The data that the Alliance collects can be useful in many parts of the season, as it can be used by teams as
                    they build their robots as well as at competitions to reinforce scouting data.
                </p>
            </PageTextBlock>
            <PageTextBlock>
                <p class="text-4xl md:text-6xl font-bold text-orange">FTC Open Alliance Principles</p>
                <p class="p-6 md:p-12 text-lg md:text-xl lg:text-2xl">
                    FTC Open Alliance follows the same basic principles that FRC Open Alliance follows. <br><br>
                    - Open Alliance teams do not keep secrets. <br>
                    - Open Alliance teams do their best to provide frequent updates throughout the year. <br>
                    - Open Alliance teams use Chief Delphi to post updates and answer questions. They are also encouraged to explore other mediums. <br>
                    - Open Alliance teams provide open code and/or CAD. <br>
                    - Open Alliance teams include the bad and the good. <br>
                    - Open Alliance teams join to help all teams, not just other Open Alliance teams. <br>                    
                </p>
            </PageTextBlock>
            <PageTextBlock>
                <p class="text-4xl md:text-6xl font-bold text-orange">How do I join the Alliance?</p>
                <p class="p-6 md:p-12 text-lg md:text-xl lg:text-2xl">
                    FTC Open Alliance is currently in an open beta for our first year of operation.
                    We've made registration available to all teams, and have kept it open to teams for the rest of the season.
                    You can sign your team up using the “Register” button at the top of the page.
                    When you sign up, you will be asked to provide some information about both your team structure and robot.
                    You can update this information at any time when plans change, and it's in the best interest of everyone that this be done regularly.
                </p>
            </PageTextBlock>
            <PageTextBlock>
                <div class="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
                    <div class="flex flex-col">
                        <p class="text-4xl md:text-6xl font-bold text-orange">The FTCOA Show</p>
                        <p class="p-6 md:p-12 text-lg md:text-xl lg:text-2xl">
                            Catch up on new episodes of the FTC Open Alliance Show, presented by FIRST Updates Now!<br><br>
                            The FTCOA Show is where FTCOA teams show off their progress throughout the season in an engaging
                            visual format. Instead of poring over build threads and statistics, get a quick look at what other
                            teams are doing by watching their FTCOA Show episodes!                            
                        </p>
                    </div>
                    <div class="flex justify-center items-center *:w-full *:h-full">
                        <iframe src="https://www.youtube.com/embed/videoseries?list=PLkZ6_Ld1x9Y-MhjlvNZuG9sTWT-RypmIU&rel=0&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                </div>
            </PageTextBlock>
        </div>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'FTC Open Alliance',
    ogTitle: 'FTC Open Alliance',
    description: 'The home of open and collaborative robotics for FIRST Tech Challenge',
    ogDescription: 'The home of open and collaborative robotics for FIRST Tech Challenge',
    ogImage: 'https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/png_4k/bg/2STACK-HORIZONTAL.png',
})

useHead
({
    title
    : 'Home | FTC Open Alliance'
})
</script>
<style>

</style>