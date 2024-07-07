<template>
    <div class="p-5 border-4 bg-black border-orange hover:border-orange-300 shadow-orange-800 hover:shadow-orange-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all ease-in-out">
        <div class="flex justify-start mb-5">
            <div>
                <h1 class="text-lg">{{ teamname }}</h1>
                <NuxtLink class="text-4xl text-orange font-bold" v-bind:to="'/teams/' + teamnumber">{{ teamnumber }}</NuxtLink>
            </div>
        </div>
        <div class="flex justify-end">
            <div>
                <UButtonGroup class="*:rounded-none *:text-lg">
                    <UButton label="Build Thread" v-bind:to="buildthread" :class="{hidden: buildthread == undefined}"/>
                    <UButton label="CAD" v-bind:to="cadlink" v-bind:class="{hidden: cadlink == undefined}"/>
                    <UButton label="Code" v-bind:to="codelink" v-bind:class="{hidden: codelink == undefined}"/>
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
    codelink: String
})

</script>

<script>

</script>


<style scoped>

</style>