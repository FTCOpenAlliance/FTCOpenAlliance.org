<template>
    
    <div class="flex flex-wrap justify-center gap-2" >
        <UButton v-if="program == 'ftc'" label="Teams" to="/ftc/teams"/>
        <UButton v-if="program == 'frc'" label="Teams" to="/frc/teams"/>

        <UButton v-if="program == 'generic'" label="Explore FTC" to="/ftc"/>
        <UButton v-if="program == 'generic'" label="Explore FRC" to="/frc"/>

        <UButton label="Register/Update" to="/join"/>
        <UButton label="Archives" to="/archive"/>

        <UButton v-if="program == 'ftc'" label="Statistics" to="/ftc/statistics"/>
        <UButton v-if="program == 'frc'" label="Statistics" to="/frc/statistics"/>
        
        <UButton label="Donate" icon="i-heroicons-outline-heart" target="_blank" to="https://hcb.hackclub.com/donations/start/ftcopenalliance" color="secondary"/>

        <UButton v-if="program == 'ftc'" label="FTCOA on CD" icon="i-heroicons-arrow-top-right-on-square-16-solid" target="_blank" to="https://www.chiefdelphi.com/c/first/ftc-open-alliance/" color="secondary"/>
        <UButton v-if="program == 'frc'" label="FRC on CD" icon="i-heroicons-arrow-top-right-on-square-16-solid" target="_blank" to="https://www.chiefdelphi.com/c/first/open-alliance/" color="secondary"/>
    </div>

</template>

<script setup>
    defineProps({
        program: String
    })
</script>