<template>
    <PageBlock :title="title">
            <div class="flex flex-col 2xl:flex-row justify-between items-center gap-4">
                <slot />
            </div>
    </PageBlock>
</template>

<script setup>

defineProps({
    title: String
})

</script>