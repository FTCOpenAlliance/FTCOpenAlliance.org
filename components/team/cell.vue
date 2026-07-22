<template>
    <div :class="`${starred ? 'border-primary-200 shadow-primary-300' : ''} ${row ? 'flex-col lg:flex-row' : 'flex-col max-w-180'}`" class="flex gap-4 min-w-80 md:min-w-120 justify-between p-5 border-2 bg-glass border-primary hover:border-primary-300 shadow-primary-800 hover:shadow-primary-600 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all ease-in-out group">
        <div class="flex justify-between">
            <div class="flex" :class="award && !row ? ' max-w-[60%]' : ''">
                <NuxtLink :to="`/${program}/teams/${teamnumber}`">
                    <div v-if="!row">
                        <p class="text-lg line-clamp-2">{{ teamname }}</p>
                        <p class="text-4xl lg:text-6xl text-primary-300 hover:text-primary-200 font-bold">{{ teamnumber }}</p>
                        <p class="text-xl text-primary-600">{{ teamlocation }}</p>
                    </div>
                </NuxtLink>
                    <div v-if="row" class="flex items-center gap-4">
                        <div class="flex flex-col items-center gap-2">
                            <UIcon v-if="award && awardyear" name="i-heroicons-trophy" class=" size-6 text-primary-200 transition-all"/>
                            <UButton v-if="row" @click="toggleStarred" size="xl" variant="ghost" class="rounded-full p-0 hover:text-primary-200" :icon="starred ? 'i-heroicons-star-solid' : 'i-heroicons-star'" />
                        </div>
                        <NuxtLink :to="`/${program}/teams/${teamnumber}`" class="flex items-center gap-4">
                            <p class="text-4xl text-primary-300 hover:text-primary-200 font-bold">{{ teamnumber }}</p>
                            <div>
                                <p class="text-lg line-clamp-2">{{ teamname }}</p>
                                <p class="text-xl text-primary-600">{{ teamlocation }}</p>
                            </div>
                        </NuxtLink>
                    </div>
            </div>
            <div v-if="award && awardyear && !row" class="flex items-center absolute top-0 right-0 h-6 md:h-10 bg-primary-500 hover:bg-primary-400 award-clip transition-all">
                <NuxtLink class="flex gap-2 pr-4 pl-10 md:pr-5 md:pl-12 md:hover:pr-8 md:hover:pl-14 items-center transition-all" :to="`/${program}/teams/${teamnumber}#awards`">
                    <p class="font-bold text-xl">{{ awardyear }}</p>
                    <p class="text-md">{{ award }}</p>
                </NuxtLink>
            </div>
        </div>
        <div class="flex" :class="row ? 'items-center gap-2 justify-end' : 'items-end justify-between'">
            <UButton v-if="!row" @click="toggleStarred" size="xl" variant="ghost" class="rounded-full p-0 hover:text-primary-200" :icon="starred ? 'i-heroicons-star-solid' : 'i-heroicons-star'" />
            <div class="flex flex-wrap *:grow  justify-end gap-1 *:text-lg *:hover:ring-primary-200 *:hover:*:text-primary-200" :class="row ? '' : 'max-w-64'">
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
import { useStorage } from '@vueuse/core';

const props = defineProps({
    program: String,
    teamname: String,
    teamnumber: Number | String,
    teamlocation: String,
    buildthread: String,
    cadlink: String,
    codelink: String,
    photolink: String,
    videolink: String,
    weblink: String,
    awardyear: Number | String,
    award: String,
    row: Boolean
})

const starredTeams = useStorage('starredTeams', [])
const starred = computed({
    get() {
        return starredTeams.value.includes(props.program.toUpperCase() + props.teamnumber)
    },
    set(newValue) {
        let teamid = props.program.toUpperCase() + props.teamnumber

        if (newValue && !starredTeams.value.includes(teamid)) {
            starredTeams.value.push(teamid)
        } else if (!newValue && starredTeams.value.includes(teamid)) {
            starredTeams.value = starredTeams.value.filter(id => id !== teamid)
        }
    }
})

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

function toggleStarred() {
    starred.value = !starred.value
}

</script>

<script>

</script>


<style scoped>
.award-clip {
    @media (min-width: 48rem) {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 2.5rem 100%);
    }
    @media (max-width: 48rem) {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 1.5rem 100%);
    }
}

</style>