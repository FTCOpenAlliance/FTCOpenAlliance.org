<template>
    <div>
        <div>
            <PageTitle class="*:*:flex-col lg:*:*:flex-row min-h-screen *:px-4 *:md:px-auto">
                <div class="flex justify-center items-center lg:mr-10 w-3/5 lg:w-auto">
                    <img src="https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/svg/ICON.svg">
                </div>
                <div>
                    <h1 class="my-5 text-4xl md:text-7xl xl:text-8xl font-bold text-primary">
                        <span class="text-white">FTC</span> Open Alliance
                    </h1>
                    <p class="text-xl pb-5">
                        The home of open and collaborative robotics for <strong>FIRST Tech Challenge</strong>.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-2 pt-6 sm:pt-0 justify-center *:justify-center *:text-lg *:mx-1 *:mb-2 sm:*:mb-0">
                        <UButton class="w-full sm:w-1/3" label="Explore Teams" to="/teams"/>
                        <UButton class="w-full sm:w-1/3" label="Join the Alliance" to="/join"/>
                    </div>
                </div>
            </PageTitle>
            <div class="justify-center items-center animate-bounce flex">
                <UIcon class="scale-[3] translate-y-[-3.5em]" name="i-heroicons-chevron-double-down"/>
            </div>
        </div>
        <div class="flex flex-col p-6 md:p-12 lg:px-36 xl:px-60 z-10 gap-12 bg-radial">
            <PageBlock title="What is the FTC Open Alliance?">
                <PageText>
                    Based on FRC's The Open Alliance, FTC Open Alliance
                    is an organization created to help teams easily share their information and statistics to a wider audience.
                    The Alliance is a great resource for newer teams that are looking to get started or veteran teams that are looking to
                    expand their capabilities.
                    Being a member of the FTC Open Alliance is not required to access the information of Alliance teams.<br><br>
                    
                    FTC Open Alliance was started with the permission of The Open Alliance. It is modelled after them and follows the same 6
                    guiding principles.
                </PageText>
            </PageBlock>
            <PageDualBlock title="What can the Alliance do for my team?">
                    <p class="px-6 md:px-12 text-md md:text-xl 2xl:w-1/2">
                        The way your team uses FTC Open Alliance data is up to you.
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
            <PageBlock title="FTC Open Alliance Principles">
                <PageText>
                    FTC Open Alliance follows the same basic principles laid out by FRC's The Open Alliance:<br><br>
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
        <div class="flex flex-col py-16 px-6 md:px-12 lg:px-36 xl:px-60 gap-12 bg-dots">
            <USeparator id="partners" class="text-xl text-primary md:text-4xl -my-8">Our Partners</USeparator>
            <p class="text-lg md:text-xl text-center px-4 md:px-12">
                These organizations have generously funded or otherwise supported the
                FTC Open Alliance to ensure that FTC teams around the world can keep sharing
                and collaborating without limits.
            </p>
                <UCarousel loop dots :autoplay="{ delay: 2000, stopOnInteraction: false }" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full'}" class="bg-glass shadow-lg shadow-primary">
                    <div class="flex grow justify-center items-center p-8">
                        <a :href="item.link" target="_blank" class="flex flex-col justify-between gap-6" draggable="false">
                            <p class="text-center text-4xl text-primary font-bold">{{ item.name }}</p>
                                <img class="object-contain h-32 scale-95 hover:scale-100 transition-transform" :src="item.image" draggable="false">
                            <p class="text-center text-xl text-primary font-bold">{{ item.status }}</p>
                        </a>
                    </div>
                </UCarousel>
                <PageDualBlock title="FUN Robotics Network">
                    <div class="flex flex-col w-full 2xl:w-1/2">
                        <p class="px-6 md:px-12 text-md md:text-xl">
                            The FTC Open Alliance is supported by the FUN Robotics Network, who host the FTC Open Alliance Show.<br><br>
                            The FTCOA Show is where FTCOA teams show off their progress throughout the season in an engaging
                            visual format. Instead of poring over build threads and statistics, get a quick look at what other
                            teams are doing by watching their FTCOA Show episodes!
                        </p>
                    </div>
                    <div class="flex flex-col gap-2 justify-center items-center w-full 2xl:w-1/2 *:w-full">
                        <iframe class="aspect-video" src="https://www.youtube.com/embed/videoseries?list=PLkZ6_Ld1x9Y-MhjlvNZuG9sTWT-RypmIU&rel=0&loop=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                        <PartnerLinks website="https://funroboticsnetwork.com/"/>
                    </div>
                </PageDualBlock>
                <PageDualBlock title="Studica Robotics">
                    <PageText class="2xl:w-3/4">
                        Studica Robotics is a sponsor of the FTC Open Alliance, and has been an educational robotics supplier for over 35 years.
                        They specialize in creating an educational robotics platform for classrooms and FTC teams. Their motto, "Build Better Robots",
                        is exemplified through their durable and well-designed structural parts, actuators, motion parts, electronics, and more.
                        Check out what Studica has to offer on
                            <a href="https://www.studica.com/" target="_blank" class="text-primary hover:text-primary-300 font-bold">their website</a>,
                        and visit their
                            <a href="https://www.instagram.com/studicacom" target="_blank" class="text-primary hover:text-primary-300 font-bold">Instagram</a>
                        for updates!
                    </PageText>
                    <PartnerLinks class="w-full 2xl:w-1/4" website="https://studica.com/" instagram="https://instagram.com/studicacom" facebook="https://www.facebook.com/StudicaRobotics" youtube="https://www.youtube.com/StudicaRobotics"/>
                </PageDualBlock>
                <PageDualBlock title="Ferra Components">
                    <PageText class="2xl:w-3/4">
                        Ferra Components is an FTC-oriented company with the mission to provide teams with cheap, high-quality wiring and electrical components.
                        Their unique cable kits give teams a head-start on wiring their robots elegantly, with multiple sizes of all cables needed for the FTC control system.
                        They also provide DIY cable kits for teams inclined to create custom-length cables.
                        Their catalog includes all sort of signal, power, and motor cables, including XT30, JST, and Anderson Powerpole. They also have free 3D printed case files
                        for Driver Hubs, Control/Expansion Hubs, and Servo Hubs.
                        Check out their
                            <a href="https://ferracomponents.com/" target="_blank" class="text-primary hover:text-primary-300 font-bold">online store</a>
                        today, and take your robot wiring game to the next level.
                    </PageText>
                    <PartnerLinks class="w-full 2xl:w-1/4" website="https://ferracomponents.com/" facebook="https://www.facebook.com/profile.php?id=61577231486964" instagram="http://instagram.com/ferracomponents" />
                </PageDualBlock>
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

const items = [
    {
        name: "HCB",
        image: '/images/HCB.svg',
        link: "https://hackclub.com/hcb",
        status: "Fiscal Sponsorship Provider"
    },
    {
        name: "FUN Robotics Network",
        image: '/images/FUNNetwork.png',
        link: "https://funroboticsnetwork.com/",
        status: "Media Partner"
    },
    {
        name: "Chief Delphi",
        image: '/images/ChiefDelphi.png', 
        link: "https://chiefdelphi.com/",
        status: "Content Partner"
    },
    {
        name: "Studica Robotics",
        image: '/images/Studica.png', 
        link: "https://www.studica.com/",
        status: "Sponsor"
    },
    {
        name: "Ferra Components",
        image: '/images/Ferra.svg',
        link: "https://ferracomponents.com/",
        status: "Awards Sponsor"
    }
]

</script>
<style>

</style>