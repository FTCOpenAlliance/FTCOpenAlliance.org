<template>
    <div>
        <PageTitle>
            <h1 class="text-6xl lg:text-8xl text-orange font-bold">
                Register
            </h1>
        </PageTitle>
        <div class="p-10">
            <iframe id="formembed" :src="embedFormLink" class="h-[60vh] md:h-[80vh] w-full"/>
            <div class="h-12 flex items-center justify-end">
                <UButton class="text-orange" icon="i-heroicons-arrow-top-right-on-square-16-solid" label="View Externally" :to="formLink"/>
            </div>
        </div>
    </div>
</template>

<script setup>

const formLink = "https://forms.gle/1MthSEqFH2DRnqie9"
const embedFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSe4x8Qa3hqtqaOzF0VZ2nQu4MEtpc9JtyxUFyw0xvlnIVJ17w/viewform?embedded=true"
</script>


<style>



</style>