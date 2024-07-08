<template>
        <div class="p-5 h-56 sm:h-44 lg:h-60 border-4 bg-black border-orange hover:border-orange-300 shadow-orange-800 hover:shadow-orange-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all ease-in-out">
            <div class="flex mb-5">
                <NuxtLink v-bind:to="`/teams/${teamnumber}`">
                    <div>
                        <p class="text-lg">{{ teamname }}</p>
                        <p class="text-4xl lg:text-6xl text-orange hover:text-orange-300 font-bold">{{ teamnumber }}</p>
                    </div>
                </NuxtLink>
            </div>
            <div class="flex justify-end">
                <div class="grid grid-rows-2 sm:block lg:grid lg:grid-rows-2">
                    <UButtonGroup class="*:rounded-none *:text-lg justify-end">
                        <UButton label="Build Thread" v-bind:to="buildthread" :class="{hidden: buildthread == undefined}"/>
                        <UButton label="CAD" v-bind:to="cadlink" v-bind:class="{hidden: cadlink == undefined}"/>
                        <UButton label="Code" v-bind:to="codelink" v-bind:class="{hidden: codelink == undefined}"/>
                    </UButtonGroup>
                    <UButtonGroup class="*:rounded-none *:text-lg *:ring-white mt-1 justify-end">
                        <UButton label="Photos" v-bind:to="photolink" :class="{hidden: photolink == undefined}"/>
                        <UButton label="Videos" v-bind:to="videolink" v-bind:class="{hidden: videolink == undefined}"/>
                        <UButton label="Website" v-bind:to="weblink" v-bind:class="{hidden: weblink == undefined}"/>
                    </UButtonGroup>
                </div>
            </div>
        </div>
</template>

<script setup>

defineProps({
    teamname: String,
    teamnumber: String,
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