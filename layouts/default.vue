<template>
    <UApp>
        <div>
            <NuxtLoadingIndicator :height="2" :color="(flags && flags.BannerMD && !dismissed) ? '#000' : '--color-primary'" />
            <div class="static md:sticky top-0 left-0 right-0 z-50 pointer-events-none">
                <PageBanner />
                <NavigationHeader />
            </div>
                <slot/>
                <PageFooter />
        </div>
    </UApp>
</template>

<script setup>
import { Program } from '~/assets/scripts/programs';

    const config = useRuntimeConfig();
    const appConfig = useAppConfig()

    useColorMode().preference = 'dark'

    const flags = useState('flags', () => ({}));
    const dismissed = useState('bannerDismissed', () => false);

    const { data } = await useAsyncData('web-flags', () => 
        $fetch(`${config.public.API_URL}/internal/getWebFlags`), 
        { server: false }
    );

    watch(data, (newData) => {
        if (newData) {
            flags.value = newData;
        }
    }, { immediate: true });

    let program = useState('program', () => Program.Generic);
    let title = useState('title', () => '');

    useHead({
        title: computed(() => `${title.value != '' ? `${title.value} | ` : ''} ${program.value == Program.Generic ? 'The' : program.value} Open Alliance`),
        link: computed(() => [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: program.value == Program.FTC ? '/images/FTCOALogos/Icon.ico' : program.value == Program.FRC ? '/images/FRCOALogos/Icon.ico' : '/images/OALogos/Icon.ico'
            },
        ]),
    })

    watch(program, () => {
        appConfig.ui.colors.primary = `${program.value.toLowerCase()}-primary`
    }, {immediate: true})

</script>