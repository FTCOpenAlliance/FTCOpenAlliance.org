<template>
    <div class="p-5 fixed top-0 z-50 left-0 right-0 bg-gradient-to-b from-black to-transparent">
        <div id="header-bar" class="flex justify-between p-5 backdrop-blur-sm shadow-lg shadow-orange-800 border border-orange">
            <div class="inline-flex justify-start max-w-36">
                <NuxtLink to="/">
                    <img src="https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/svg/SHORT-HORIZONTAL.svg">
                </NuxtLink>
            </div>
            <div id="header-nav" class="flex mx-5 *:rounded-none *:ml-2" >
                <UButton label="Home" to="/" />
                <UButton label="Teams" to="/teams"/>
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