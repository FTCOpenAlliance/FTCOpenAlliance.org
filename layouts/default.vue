<template>
    <UApp>
        <div>
            <div>
                <NuxtLoadingIndicator :height="2" :color="(banner) ? '#000' : '#ff6600'" />
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

    const { data } = await useFetch(`${useRuntimeConfig().public.API_URL}/internal/getWebFlags`, {server: false})

    const flags = useState('flags')

    flags.value = data.value || undefined

    let banner

    if (flags.value && flags.value.BannerHTML) {
        banner = true
    }
    
</script>