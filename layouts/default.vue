<template>
    <UApp>
        <div>
            <div>
                <NuxtLoadingIndicator :height="2" :color="(flags && flags.BannerHTML) ? '#000' : '--color-primary'" />
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
import { Program } from '~/assets/scripts/programs';

    const config = useRuntimeConfig();
    const appConfig = useAppConfig()

    useColorMode().preference = 'dark'

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