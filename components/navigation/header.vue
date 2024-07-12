<template>
    <div class="p-5 fixed top-0 z-50 left-0 right-0 bg-gradient-to-b from-black to-transparent">
        <div id="header-bar" class="block sm:flex sm:justify-between p-5 backdrop-blur-sm shadow-lg shadow-orange-800 border border-orange">
            <div class="mx-auto sm:mx-0 max-w-72 sm:max-w-36">
                <NuxtLink to="/">
                    <img src="https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/svg/SHORT-HORIZONTAL.svg">
                </NuxtLink>
            </div>
            <div id="header-nav" class="flex justify-center pt-6 sm:pt-0 *:rounded-none *:ml-2" >
                <UButton label="Teams" to="/teams"/>
                <UButton label="Statistics" to="/stats"/>
                <UButton label="Register" to="/register" class="ring-white *:text-white"/>
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