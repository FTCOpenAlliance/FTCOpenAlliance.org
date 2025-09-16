<template>
    <div class="p-5 pb-10 border-2 bg-glass bg-glass-hover border-primary hover:border-primary-300 shadow-primary-800 hover:shadow-primary-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all ease-in-out">
        <div class="flex mb-5">
            <NuxtLink v-bind:to="`/teams/${teamnumber}`">
                <div>
                    <p class="text-lg">{{ teamname }}</p>
                    <p class="text-4xl lg:text-6xl text-primary hover:text-primary-300 font-bold">{{ teamnumber }}</p>
                    <p class="text-xl text-primary-600">{{ teamlocation }}</p>
                </div>
            </NuxtLink>
        </div>
        <div class="flex justify-end">
            <div class="flex flex-wrap max-w-64 justify-end gap-1 *:text-lg *:hover:ring-primary-200 *:hover:*:text-primary-200">
                <UButton label="Build Thread" target="_blank" v-bind:to="normalizeUrl(buildthread)" v-if="checkNormalizable(buildthread)"/>
                <UButton label="CAD" target="_blank" v-bind:to="normalizeUrl(cadlink)" v-if="checkNormalizable(cadlink)"/>
                <UButton label="Code" target="_blank" v-bind:to="normalizeUrl(codelink)" v-if="checkNormalizable(codelink)"/>
                <UButton label="Photos" target="_blank" v-bind:to="normalizeUrl(photolink)" v-if="checkNormalizable(photolink)"/>
                <UButton label="Videos" target="_blank" v-bind:to="normalizeUrl(videolink)" v-if="checkNormalizable(videolink)"/>
                <UButton label="Website" target="_blank" v-bind:to="normalizeUrl(weblink)" v-if="checkNormalizable(weblink)"/>
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
    teamlocation: String,
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