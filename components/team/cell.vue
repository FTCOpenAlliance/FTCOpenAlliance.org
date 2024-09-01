<template>
        <div class="p-5 h-56 sm:h-44 lg:h-60 border-2 bg-black border-orange hover:border-orange-300 shadow-orange-800 hover:shadow-orange-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all ease-in-out">
            <div class="flex mb-5">
                <NuxtLink v-bind:to="`/teams/${teamnumber}`">
                    <div>
                        <p class="text-lg">{{ teamname }}</p>
                        <p class="text-4xl lg:text-6xl text-orange hover:text-orange-300 font-bold">{{ teamnumber }}</p>
                    </div>
                </NuxtLink>
            </div>
            <div class="flex justify-end">
                <div class="grid gap-2 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1  lg:grid-rows-2 lg:grid-cols-1">
                    <UButtonGroup class="*:rounded-none *:text-lg justify-end">
                        <UButton label="Build Thread" v-bind:to="normalizeUrl(buildthread)" v-if="checkNormalizable(buildthread)"/>
                        <UButton label="CAD" v-bind:to="normalizeUrl(cadlink)" v-if="checkNormalizable(cadlink)"/>
                        <UButton label="Code" v-bind:to="normalizeUrl(codelink)" v-if="checkNormalizable(codelink)"/>
                    </UButtonGroup>
                    <UButtonGroup class="*:rounded-none *:text-lg justify-end">
                        <UButton label="Photos" v-bind:to="normalizeUrl(photolink)" v-if="checkNormalizable(photolink)"/>
                        <UButton label="Videos" v-bind:to="normalizeUrl(videolink)" v-if="checkNormalizable(videolink)"/>
                        <UButton label="Website" v-bind:to="normalizeUrl(weblink)" v-if="checkNormalizable(weblink)"/>
                    </UButtonGroup>
                </div>
            </div>
        </div>
</template>

<script setup>
import normalizeUrl from 'normalize-url';

function checkNormalizable(inputUrl) {

    try{
        normalizeUrl(inputUrl)
    } catch (e) {
        return false
    }

    return true

}

defineProps({
    teamname: String,
    teamnumber: Number,
    buildthread: String,
    cadlink: String,
    codelink: String,
    photolink: String,
    videolink: String,
    weblink: String
})

</script>

<script>

</script>


<style scoped>

</style>