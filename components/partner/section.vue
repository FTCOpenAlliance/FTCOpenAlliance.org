<template>
    <div class="flex flex-col py-16 px-6 md:px-12 lg:px-36 xl:px-60 gap-12 bg-dots">
        <USeparator id="partners" class="text-2xl text-primary md:text-4xl -my-8">
            <div class="flex items-center justify-center gap-3 px-8 md:px-12">
                <img class="h-8 md:h-10" src="/images/OALogos/ShortHorizontal.svg">
                Partners
            </div>
        </USeparator>
        <p class="text-lg md:text-xl text-center px-4 md:px-12">
            These organizations have generously funded or otherwise supported the
            Open Alliance to ensure that FIRST® Robotics teams around the world can keep sharing
            and collaborating without limits.
        </p>
        <UCarousel loop :autoplay="{ delay: 2000, stopOnInteraction: false }" v-slot="{ item }" :items="sponsorCarouselItems" :ui="{ item: 'basis-full' }" class="bg-glass border-2 border-primary-300 shadow-xl shadow-primary-400/50 *:*:items-center lg:-mx-10">
            <div class="flex grow justify-center items-center p-8">
                <a :href="item.link" target="_blank" class="flex flex-col justify-between gap-6" draggable="false">
                    <p class="text-center text-4xl text-primary-400 font-bold">{{ item.name }}</p>
                    <img class="object-contain h-32 scale-95 hover:scale-100 transition-transform" :src="item.image" draggable="false">
                    <p class="text-center text-xl text-primary-200 font-bold">{{ item.status }}</p>
                </a>
            </div>
        </UCarousel>
        <PageDualBlock title="FUN Robotics Network">
            <div class="flex flex-col w-full 2xl:w-1/2">
                <p class="px-6 md:px-12 text-md md:text-xl">
                    The Open Alliance is supported by the FUN Robotics Network, who host the FTC and FRC Open Alliance Shows.<br><br>
                    On the Open Alliance show, Alliance teams show off their progress throughout the season in an engaging
                    visual format. Instead of poring over build threads and statistics, get a quick look at what other
                    teams are doing by watching their Open Alliance Show episodes!
                </p>
            </div>
            <div class="flex flex-col gap-2 justify-center items-center w-full 2xl:w-1/2 *:w-full">
                <UCarousel loop :autoplay="{ delay: 4000, stopOnInteraction: true }" v-slot="{ item }" :items="OAShowCarouselItems" :ui="{ item: 'basis-full'}" class="*:*:items-center">
                    <div class="flex flex-col *:w-full">
                        <p :class="`text-[${item.color}] font-bold text-xl text-center`">{{ item.name }}</p>
                        <iframe class="aspect-video" :src="item.link" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                </UCarousel>
                <PartnerLinks website="https://funroboticsnetwork.com/"/>
            </div>
        </PageDualBlock>
        <PageDualBlock title="Studica Robotics">
            <PageText class="2xl:w-3/4">
                Studica Robotics is a sponsor of the Open Alliance, and has been an educational robotics supplier for over 35 years.
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
</template>

<script setup>
import { Program } from '~/assets/scripts/programs';

    
    const sponsorCarouselItems = [
    {
        name: "HCB",
        image: '/images/partnerLogos/HCB.svg',
        link: "https://hackclub.com/hcb",
        status: "Fiscal Sponsorship Provider"
    },
    {
        name: "FUN Robotics Network",
        image: '/images/partnerLogos/FUNNetwork.png',
        link: "https://funroboticsnetwork.com/",
        status: "Media Partner"
    },
    {
        name: "Chief Delphi",
        image: '/images/partnerLogos/ChiefDelphi.png', 
        link: "https://chiefdelphi.com/",
        status: "Content Partner"
    },
    {
        name: "Studica Robotics",
        image: '/images/partnerLogos/Studica.png', 
        link: "https://www.studica.com/",
        status: "Sponsor"
    },
    {
        name: "Ferra Components",
        image: '/images/partnerLogos/Ferra.svg',
        link: "https://ferracomponents.com/",
        status: "Awards Sponsor"
    }
    ]

    const OAShowCarouselItems = []

    if (useState('program').value != Program.FTC) {
        OAShowCarouselItems.push({
            name: "FRC Open Alliance Show",
            color: "var(--primary-frc)",
            link: "https://www.youtube.com/embed/videoseries?list=PLkZ6_Ld1x9Y8bSo4O4hUBKgyL9e5uscD3&rel=0&loop=1"
        })
    }

    if (useState('program').value != Program.FRC) {
        OAShowCarouselItems.push({
            showOn: [Program.Generic, Program.FTC],
            name: "FTC Open Alliance Show",
            color: "var(--primary-ftc)",
            link: "https://www.youtube.com/embed/videoseries?list=PLkZ6_Ld1x9Y-MhjlvNZuG9sTWT-RypmIU&rel=0&loop=1"
        })
    }

</script>