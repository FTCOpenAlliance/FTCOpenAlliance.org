<template>
    <div>
        <div>
            <PageTitle class="*:block *:lg:flex min-h-screen">
                    <div class="flex justify-center items-center lg:mr-10">
                        <img src="https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/svg/ICON.svg">
                    </div>
                    <div>
                        <h1 class="my-5 text-6xl md:text-7xl xl:text-8xl font-bold text-orange">
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
        <div class="p-6 md:p-12 lg:px-36 z-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#f60_100%)]">
            <PageTextBlock>
                <p class="text-4xl md:text-6xl font-bold text-orange">What is FTC Open Alliance?</p>
                <p class="p-6 md:p-12 text-lg md:text-xl">
                    FTC Open Alliance, inspired by <a class="text-orange" href="https://www.theopenalliance.com/">The Open Alliance</a>
                    for FRC, is a resource for teams in the FIRST Tech Challenge to share their knowledge, designs, and 
                    data to help other teams, even those not in the Alliance. Members of the Alliance use its infrastructure
                    to publicize their designs and progress.
                </p>
            </PageTextBlock>
            <PageTextBlock>
                <p class="text-4xl md:text-6xl font-bold text-orange">How do I join the Alliance?</p>
                <p class="p-6 md:p-12 text-lg md:text-xl">
                    Currently, FTC Open Alliance is its beta testing stage. During our first pilot year, we've only invited
                    a select few teams to join the Alliance in order to ensure that all of our systems are functional, refined,
                    and tested. After this initial testing period, we'll allow any team who wants to join to do so by filling out
                    a form at the beginning of the season.
                </p>
            </PageTextBlock>
            <PageTextBlock>
                <p class="text-4xl md:text-6xl font-bold text-orange">What data goes to the Alliance?</p>
                    <p class="p-6 md:p-12 text-lg md:text-xl">
                        At the beginning of each season, FTC Open Alliance teams provide links to a build thread (hosted on Chief Delphi), a CAD
                        project, a code repository, photos, videos and their website for us to host on this website. Additionally, teams also
                        provide scouting-type data about their hardware and software, which we can use for Open Scouting and statistics visualizations.
                    </p>
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