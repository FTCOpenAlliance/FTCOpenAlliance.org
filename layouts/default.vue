<template>
    <UApp>
        <div>
            <div>
                <NuxtLoadingIndicator :height="2" :color="(flags && flags.BannerHTML) ? '#000' : '#ff6600'" />
                <NavigationHeader />
            </div>
            <slot/>
            <div>
                <PageFooter />
            </div>
        </div>
    </UApp>
</template>

<script setup>
    const config = useRuntimeConfig();

    const flags = useState('flags', () => ({ BannerHTML: '' }));

    const { data } = await useAsyncData('web-flags', () => 
        $fetch(`${config.public.API_URL}/internal/getWebFlags`), 
        { server: false }
    );

    watch(data, (newData) => {
        if (newData) {
            flags.value = newData;
        }
    }, { immediate: true });
</script>