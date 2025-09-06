<template>
    <div class="p-5 absolute sm:fixed top-0 z-50 left-0 right-0 bg-gradient-to-b from-black to-transparent">
        <div id="header-bar" class="flex flex-col sm:flex-row sm:justify-between p-5 backdrop-blur shadow-lg shadow-orange-800 border border-orange">
            <div class="mx-auto sm:mx-0 max-w-48 sm:max-w-36">
                <NuxtLink to="/">
                    <img src="https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/svg/SHORT-HORIZONTAL.svg">
                </NuxtLink>
            </div>
            <div id="header-nav" class="flex flex-wrap justify-center -mx-5 sm:mx-0 pt-6 sm:pt-0 *:rounded-none *:mx-1 *:mb-2 sm:*:mb-0 hover:*:scale-105 *:transition-all" >
                <UButton label="Teams" to="/teams"/>
                <UButton label="Register/Update" to="/join"/>
                <UButton label="Donate" icon="i-heroicons-outline-heart" target="_blank" to="https://hcb.hackclub.com/donations/start/ftcopenalliance" class="ring-white *:text-white"/>
                <UButton label="FTCOA on CD" icon="i-heroicons-arrow-top-right-on-square-16-solid" target="_blank" to="https://www.chiefdelphi.com/c/first/ftc-open-alliance/" class="ring-white *:text-white"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        
        
        return {}
    }
}
</script>

<style scoped>

</style>