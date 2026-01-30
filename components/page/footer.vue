<template>
    <div class="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:*:w-[50%] border-t-2 border-primary p-4 md:p-8">
        <div class="flex gap-4 items-center">
            <img src="/public/images/OALogos/Icon.svg" class="hidden md:block md:w-24"/>
            <p class="text-center md:text-left">
                Made with <UIcon class="scale-150 translate-y-1.5 hover:animate-ping m-1 text-primary" name="i-heroicons-heart-solid" /> by the robotics community, for the robotics community.<br>
                Check out our code on <a class="text-primary font-bold" target="_blank" href="https://github.com/FTCOpenAlliance">GitHub</a><br>
                Contact Us: <u><a class="text-primary font-bold" href="mailto:contact@theopenalliance.org">contact@theopenalliance.org</a></u>
            </p>
        </div>
        <p class="text-sm text-center md:text-right text-[#666666]">
            <a href="https://hcb.hackclub.com/openalliance" target="_blank">
                The Open Alliance is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).
            </a><br>

            <a href="https://www.firstinspires.org" target="_blank">
                <i>FIRST</i>®, <i>FIRST</i>® Robotics Competition, and <i>FIRST</i>® Tech Challenge, are registered trademarks of <i>FIRST</i>® (www.firstinspires.org) which is not overseeing, involved with, or responsible for this activity, product, or service.
            </a><br>

            <a v-if="program == Program.FTC" href="https://ftcscout.org/about" target="_blank">
                The FTC Open Alliance uses data graciously provided by FTCScout. Learn more at ftcscout.org/about.
            </a>
            <a v-if="program == Program.FRC" href="https://thebluealliance.com/about" target="_blank">
                The FRC Open Alliance uses data graciously provided by The Blue Alliance. Learn more at thebluealliance.com/about.
            </a>
        </p>
    </div>
</template>

<script setup>
import { Program } from '~/assets/scripts/programs';

let program = useState('program', () => Program.Generic)

</script>