<template>
    <div class="flex flex-col gap-4 justify-between p-5 border-2 bg-glass bg-glass-hover border-primary hover:border-primary-300 shadow-primary-800 hover:shadow-primary-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all ease-in-out">
        <div class="flex flex-row justify-between">
            <div class="flex max-w-[60%]">
                <NuxtLink :to="`/teams/${teamnumber}`">
                    <div>
                        <p class="text-lg line-clamp-2">{{ teamname }}</p>
                        <p class="text-4xl lg:text-6xl text-primary hover:text-primary-300 font-bold">{{ teamnumber }}</p>
                        <p class="text-xl text-primary-600">{{ teamlocation }}</p>
                    </div>
                </NuxtLink>
            </div>
            <div v-if="award && awardyear" class="-mt-5 items-center min-h-40 w-30 *:text-center hover:*:translate-y-5 bg-no-repeat bg-contain bg-[url('../images/awardBanner.svg')]">
                <div class="h-full w-full pt-2 px-4 bg-no-repeat bg-contain bg-[url('../images/awardBanner.svg')] transition-transform">
                    <NuxtLink class="flex flex-col gap-2 w-full h-full" :to="`/teams/${teamnumber}#awards`">
                        <p class="font-bold text-xl leading-3">{{ awardyear }}</p>
                        <p class="text-lg leading-5">{{ award }}</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="flex justify-end">
            <div class="flex flex-wrap max-w-64 justify-end gap-1 *:text-lg *:hover:ring-primary-200 *:hover:*:text-primary-200">
                <UButton label="Build Thread" target="_blank" v-bind:to="normalizeUrl(buildthread, normalizeOptions)" v-if="checkNormalizable(buildthread)"/>
                <UButton label="CAD" target="_blank" v-bind:to="normalizeUrl(cadlink, normalizeOptions)" v-if="checkNormalizable(cadlink)"/>
                <UButton label="Code" target="_blank" v-bind:to="normalizeUrl(codelink, normalizeOptions)" v-if="checkNormalizable(codelink)"/>
                <UButton label="Photos" target="_blank" v-bind:to="normalizeUrl(photolink, normalizeOptions)" v-if="checkNormalizable(photolink)"/>
                <UButton label="Videos" target="_blank" v-bind:to="normalizeUrl(videolink, normalizeOptions)" v-if="checkNormalizable(videolink)"/>
                <UButton label="Website" target="_blank" v-bind:to="normalizeUrl(weblink, normalizeOptions)" v-if="checkNormalizable(weblink)"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import normalizeUrl from 'normalize-url';
const normalizeOptions = {
    stripWWW: false
}

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
    teamnumber: Number | String,
    teamlocation: String,
    buildthread: String,
    cadlink: String,
    codelink: String,
    photolink: String,
    videolink: String,
    weblink: String,
    awardyear: Number,
    award: String
})

</script>

<script>

</script>


<style scoped>

</style>