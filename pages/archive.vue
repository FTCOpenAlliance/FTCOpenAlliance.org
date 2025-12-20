<template>
    <div>
        <PageTitle>
                <h1 class="text-6xl lg:text-8xl text-primary font-bold">
                    The Archives
                </h1>
        </PageTitle>
        <ClientOnly>
            <div v-if="!error" class="flex flex-col gap-8 p-4 md:p-16">
                <ArchiveBlock
                    v-for="archive of archiveData"
                    :key="archive"
                    v-bind:name="archive.Name"
                    v-bind:timestamp="archive.Timestamp"
                    v-bind:tag="archive.Tag"
                    v-bind:sizekb="archive.SizeKB"
                />
            </div>
            <PageError v-if="errorDisplay" :errortext="errorDisplay.text" :errormessage="errorDisplay.message"/>
        </ClientOnly>
        <PageLoading :show="!errorDisplay && !archiveData" message="Loading Archives..."/>
    </div>
</template>

<script setup>

let errorDisplay = ref(null)
let archiveData = ref(null)

await useAsyncData(async () => {
    await $fetch(`${useRuntimeConfig().public.API_URL}/internal/getArchiveList`, {
        onResponse({response}) {
            archiveData.value = response._data
        },
        onResponseError({error}) {
            errorDisplay.value = {
                text: "There was an issue while fetching the archives.",
                message: error.message
            }
        },
        onRequestError() {
            errorDisplay.value = {
                text: "There was an issue while fetching the archives.",
                message: "API Communication Error."
            }
        }
    })
}, {server: false})

useHead
({
    title
    : 'Archive | FTC Open Alliance'
})
</script>