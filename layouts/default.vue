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

    useHead({
        style: [
            {
                id: 'dynamic-primary',
                textContent: computed(() => {

                    let pL = program.value;

                    return `:root {
                            --color-primary: var(--primary-${pL});
                            --color-primary-50: var(--primary-${pL}-50);
                            --color-primary-100: var(--primary-${pL}-100);
                            --color-primary-200: var(--primary-${pL}-200);
                            --color-primary-300: var(--primary-${pL}-300);
                            --color-primary-400: var(--primary-${pL}-400);
                            --color-primary-500: var(--primary-${pL}-500);
                            --color-primary-600: var(--primary-${pL}-600);
                            --color-primary-700: var(--primary-${pL}-700);
                            --color-primary-800: var(--primary-${pL}-800);
                            --color-primary-900: var(--primary-${pL}-900);
                            --color-primary-950: var(--primary-${pL}-950);
                        }`
                })
            }
        ]
    })
</script>