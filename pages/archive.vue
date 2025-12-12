<template>
    <div>
        <PageTitle>
                <h1 class="text-6xl lg:text-8xl text-primary font-bold">
                    The Archives
                </h1>
        </PageTitle>
        <div v-if="!error" class="flex flex-col gap-8 p-4 md:p-16">
            <ArchiveBlock
                v-for="archive of archiveList"
                :key="archive"
                v-bind:name="archive.Name"
                v-bind:timestamp="archive.Timestamp"
                v-bind:tag="archive.Tag"
                v-bind:sizekb="archive.SizeKB"
            />
        </div>
        <PageError :error="error" :errortext="errorText" :errormessage="errorMessage"/>
    </div>
</template>

<script setup>

const archiveFetch = await useFetch(`${useRuntimeConfig().public.API_URL}/internal/getArchiveList`, {server: false})

const archiveList = archiveFetch.data.value || undefined

let error, errorText, errorMessage

if (archiveList == undefined) {
    error = true
    errorText = "Archive listing could not be retrieved."
    errorMessage = archiveFetch.error.value.data
}

useHead
({
    title
    : 'Archive | FTC Open Alliance'
})
</script>