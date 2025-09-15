<template>
    <div class="p-6 flex flex-col gap-2 border-2 bg-black border-orange hover:border-orange-300 shadow-orange-800 hover:shadow-orange-600 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all ease-in-out">
        <div class="flex flex-col md:flex-row justify-between items-start gap-2">
            <div class="flex flex-row items-center gap-2 *:text-orange">
                <UIcon name="i-heroicons-table-cells-20-solid" class=" size-8" />
                <p class="text-2xl font-bold">{{ name }}</p>
            </div>
            <div class="flex items-center w-full md:w-auto">
                <UButton class="w-full md:w-auto items-center justify-center text-lg rounded-none mx-1 mb-2 sm:mb-0 hover:scale-105 transition-all" label="Download" icon="i-heroicons-arrow-down-tray-solid" :to="`https://archive.ftcopenalliance.org/${name}`"/>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-1 lg:gap-4 *:text-neutral-600 *:text-sm">
            <p>MD5: {{ tag }}</p>
            <p>Uploaded: {{ new Date(Date.parse(timestamp)).toUTCString() }}</p>
            <p>Size: {{ sizekb }}kB</p>
        </div>
    </div>
</template>

<script setup>

defineProps({
    name: String,
    timestamp: String,
    tag: String,
    sizekb: String
})

</script>