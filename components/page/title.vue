<template>
    <div class="flex bg-grid border-b-primary border-b-4">
            <div class="flex grow items-center justify-center backdrop-blur-[1px] pt-56 pb-20" :class="bannerHTML ? 'md:pt-48' : 'md:pt-36'">
                <div class="flex items-center text-center bg-glass shadow-lg ease-in-out shadow-primary-600 p-8 lg:p-16">
                    <slot />
                </div>
            </div>
    </div>
</template>

<script setup>

    const bannerHTML = useState('flags').value ? useState('flags').value.BannerHTML : ''

</script>