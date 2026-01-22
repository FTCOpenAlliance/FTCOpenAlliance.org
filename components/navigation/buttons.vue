<template>
    
    <div class="flex flex-wrap justify-center gap-2" >
        <UButton v-if="program == Program.FTC" label="Teams" to="/ftc/teams"/>
        <UButton v-if="program == Program.FRC" label="Teams" to="/frc/teams"/>

        <UButton v-if="program == Program.Generic" class="ring-[var(--primary-ftc)] text-[var(--primary-ftc-200)]" label="Explore FTC" to="/ftc"/>
        <UButton v-if="program == Program.Generic" class="ring-[var(--primary-frc)] text-[var(--primary-frc-200)]" label="Explore FRC" to="/frc"/>

        <UButton label="Register/Update" to="/join"/>

        <UButton v-if="program == Program.FTC" label="Statistics" to="/ftc/stats"/>
        <UButton v-if="program == Program.FRC" label="Statistics" to="/frc/stats"/>

        <UButton label="Archives" to="/archive" color="secondary"/>
        
        <UButton label="Donate" icon="i-heroicons-outline-heart" target="_blank" to="https://hcb.hackclub.com/donations/start/openalliance" color="secondary"/>

        <UButton v-if="program == Program.FTC" label="FTCOA on CD" icon="i-heroicons-arrow-top-right-on-square-16-solid" target="_blank" to="https://www.chiefdelphi.com/c/first/ftc-open-alliance/" color="secondary"/>
        <UButton v-if="program == Program.FRC" label="FRCOA on CD" icon="i-heroicons-arrow-top-right-on-square-16-solid" target="_blank" to="https://www.chiefdelphi.com/c/first/open-alliance/" color="secondary"/>
    </div>

</template>

<script setup>
import { Program } from '~/assets/scripts/programs';

    defineProps({
        program: String
    })
</script>