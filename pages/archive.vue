<template>
    <div>
        <PageTitle>
                <h1 class="text-6xl lg:text-8xl text-primary font-bold">
                    The Archives
                </h1>
        </PageTitle>
        <div v-if="archiveList != []" class="flex flex-col gap-8 p-4 md:p-16">
            <ArchiveBlock
                v-for="i in archiveList.length"
                :key="i"
                v-bind:name="archiveList[i-1].Name"
                v-bind:timestamp="archiveList[i-1].Timestamp"
                v-bind:tag="archiveList[i-1].Tag"
                v-bind:sizekb="archiveList[i-1].SizeKB"
            />
        </div>
    </div>
</template>

<script setup>

const {data: archiveFetch} = await useFetch(`${useRuntimeConfig().public.API_URL}/internal/getArchiveList`)

const archiveList = archiveFetch || []

</script>