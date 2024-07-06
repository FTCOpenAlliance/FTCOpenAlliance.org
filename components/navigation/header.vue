<template>
    <div id="header-bar" class="flex justify-between backdrop-blur-sm fixed top-0 left-0 right-0 p-5 m-4 shadow-lg shadow-orange-800 border border-orange">
        <div class="inline-flex justify-start max-w-36">
            <img src="https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/svg/SHORT-HORIZONTAL.svg">
        </div>
        <div id="header-nav" class="flex mx-5 *:rounded-none *:ml-2" >
            <UButton label="Home" to="/" />
            <UButton label="Teams" to="/teams"/>
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