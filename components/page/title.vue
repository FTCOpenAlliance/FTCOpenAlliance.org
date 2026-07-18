<template>
    <div class="flex bg-grid border-b-primary-300 border-b-4">
            <div class="flex grow items-center justify-center pt-32 pb-14" :class="bannerHTML ? 'md:pt-42' : 'md:pt-32'">
                <div class="flex items-center text-center bg-glass shadow-xl ease-in-out shadow-primary-400/20 p-8 lg:p-12">
                    <h1 v-if="title" class="text-5xl lg:text-7xl text-primary font-bold">
                        {{ title }}
                    </h1>
                    <slot />
                </div>
            </div>
    </div>
</template>

<script setup>

    defineProps({
        title: String
    })

    const bannerHTML = useState('flags').value ? useState('flags').value.BannerHTML : ''

</script>