<template>
    <div :class="props.show ? 'backdrop-blur-2xl bg-[#00000088]' : 'backdrop-blur-none bg-transparent'" class="flex justify-center items-center backdrop-blur-2xl pointer-events-none fixed top-0 bottom-0 z-40 left-0 right-0 transition-all duration-500">
        <div :class="props.show ? 'flex' : 'hidden'" class="flex flex-col items-center justify-center">
            <img src="/public/images/FTCOALogos/loading.gif" class="h-32 object-contain">
            <p class="text-primary font-bold text-xl lg:text-4xl">{{ message }}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        show: Boolean,
        message: String
    })
</script>