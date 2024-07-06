<template>
    <div class="bg-black">
        <div id="header-bar" class="flex justify-between bg-black p-5 m-4 shadow-lg shadow-orange-800 border-4 border-orange">
            <div class="inline-flex justify-start max-w-36">
                <img src="https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/svg/SHORT-HORIZONTAL.svg">
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