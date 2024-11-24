<template>
        <div class="p-5 pb-10 border-2 bg-black border-orange hover:border-orange-300 shadow-orange-800 hover:shadow-orange-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all ease-in-out">
            <div class="flex mb-5">

                    <div>
                        <p class="text-lg">{{ teamname }}</p>
                        <NuxtLink v-bind:to="`/teams/${teamnumber}`">
                            <p class="text-4xl lg:text-6xl text-orange hover:text-orange-300 font-bold">{{ teamnumber }}</p>
                        </NuxtLink>
                        <p class="text-xl text-orange-600">{{ teamlocation }}</p>
                    </div>
            </div>
            <div class="flex justify-end">
                <div class="flex flex-wrap max-w-72 justify-end *:m-[0.05em] *:rounded-none *:text-lg hover:*:ring-orange-200 *:hover:*:text-orange-200">
                        <UButton label="Build Thread" v-bind:to="normalizeUrl(buildthread)" v-if="checkNormalizable(buildthread)"/>
                        <UButton label="CAD" v-bind:to="normalizeUrl(cadlink)" v-if="checkNormalizable(cadlink)"/>
                        <UButton label="Code" v-bind:to="normalizeUrl(codelink)" v-if="checkNormalizable(codelink)"/>
                        <UButton label="Photos" v-bind:to="normalizeUrl(photolink)" v-if="checkNormalizable(photolink)"/>
                        <UButton label="Videos" v-bind:to="normalizeUrl(videolink)" v-if="checkNormalizable(videolink)"/>
                        <UButton label="Website" v-bind:to="normalizeUrl(weblink)" v-if="checkNormalizable(weblink)"/>
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