<template>
    <div class="p-5 border-4 hover:border-orange-300 border-orange bg-black shadow-orange-800 hover:shadow-orange-600 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all ease-in-out">
        <div class="flex justify-start">
            <div>
                <h1 class="text-lg">{{ teamname }}</h1>
                <NuxtLink class="text-4xl text-orange" v-bind:to="'/teams/' + teamnumber">{{ teamnumber }}</NuxtLink>
            </div>
        </div>
        <div class="flex justify-end">
            <div>
                <UButtonGroup class="*:rounded-none *:text-lg">
                    <UButton label="Build Thread" v-bind:to="buildthread" :class="{hidden: buildthread == undefined}"/>
                    <UButton label="CAD" v-bind:to="cadlink" :class="{hidden: cadlink == undefined}"/>
                    <UButton label="Code" v-bind:to="codelink" :class="{hidden: codelink == undefined}"/>
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

<style scoped>

</style>