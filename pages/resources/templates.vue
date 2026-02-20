<template>
    <div class="bg-dots">
        <PageTitle title="Ad Templates"/>
        <PageBlock class="flex-row gap-16 justify-between items-center max-w-[80rem] my-16 mx-auto">
            <div class="flex flex-col justify-start text-start max-w-[30rem]">
                <h2 class="text-primary-200 text-2xl font-bold">Create your Custom Team Ads!</h2>
                <p class="text-lg">
                    Enter your team number and select your program to create
                    advertisements for your team's Open Alliance profile.
                </p>
            </div>
            <div class="flex flex-col gap-2">
                <div class="flex justify-between items-center gap-8">
                    <p class="text-xl">Program:</p>
                    <URadioGroup v-model="program" orientation="horizontal" indicator="hidden" variant="card" :items="['FTC', 'FRC']" />
                </div>
                <div class="flex justify-between items-center gap-8">
                    <p class="text-xl">Team Number:</p>
                    <UInput v-model="teamNumber" type="number"/>
                </div>
                <div class="flex justify-between items-center gap-8">
                    <p class="text-xl">Background Image:</p>
                    <UFileUpload
                        v-model="bgImage"
                        label="Drop your image here"
                        class="w-96 min-h-12"
                        accept="image/*"
                    />
                </div>
                <UButton size="xl" @click="fetchTeamData">Generate Advertisements</UButton>
            </div>
        </PageBlock>
        <USeparator v-if="showAds" class="text-xl text-primary md:text-4xl px-16">Generated Ads</USeparator>
        <div class="flex flex-col items-center p-16 gap-8">
            <!-- 16:9 Ad -->
            <div v-if="showAds" id="16x9_AD" class="relative w-[50rem] outline-2 outline-primary shadow-xl shadow-primary-400/50 aspect-video overflow-hidden">
                <img v-if="bgImage" :src="bgURL" class="right-0 absolute object-cover w-[28rem] h-full brightness-75" />
                <div class="grid clip-slash absolute w-2/3 h-full shadow-2xl shadow-primary-400 border-4 border-primary-400 rotate-[-12deg] scale-150 translate-y-10 -translate-x-60"/>
                <div class="flex flex-col absolute justify-between h-full p-8">
                    <div class="max-w-2/3 *:leading-none">
                        <p class="text-3xl">Learn More About</p>
                        <h2 class="text-primary text-[7rem] font-bold">{{ teamNumber }}</h2>
                        <p class="text-2xl">{{ teamData.TeamName }}</p>
                    </div>
                    <div class="max-w-1/2 *:leading-none">
                        <USeparator class="w-full" size="xl">
                            <p class="text-primary text-2xl font-bold">ON</p>
                        </USeparator>
                        <img :src="`/images/${program}OALogos/TwoLineStacked.svg`"/>
                        <img :src="qrURL" />
                    </div>
                </div>
                <div class="absolute bottom-0 right-0 p-4">
                    <UButton class="ad-download" variant="solid" icon="i-heroicons-arrow-down-tray" @click="downloadElement('16x9_AD')"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Program } from '~/assets/scripts/programs'
import { domToPng } from 'modern-screenshot'

const apiURL = useRuntimeConfig().public.API_URL
let toast = useToast()

const program = useState("program")
const teamNumber = ref()
const teamData = ref(null)
const bgImage = ref()
const bgURL = computed(() => {
    return bgImage.value ? URL.createObjectURL(bgImage.value) : null
})
const qrURL = ref(null)

// TESTING VARIABLES!
// program.value = Program.FTC
// const teamNumber = ref(12736)
// const teamData = ref(null)
// const bgImage = ref(new Blob())
// const bgURL = ref("https://www.firstinspires.org/hubfs/image-library/ftc-20250416ben00346.jpg")
// await fetchTeamData()
// END OF TESTING VARIABLES

const showAds = computed(() => {
    return teamNumber.value && teamData.value && bgImage.value && program.value != Program.Generic
})

watch(program, () => {
    teamNumber.value = null
    teamData.value = null
    bgImage.value = null
})

watch(teamNumber, () => { teamData.value = null })

async function fetchTeamData() {
    await $fetch(`${apiURL}/teams/${program.value}/${parseInt(teamNumber.value)}`, {
        onResponse({response}) {
            if (response.ok) {
                teamData.value = response._data
            }
        },
        onResponseError({response}) {
            toast.add({
                title: "Your team's data could not be fetched.",
                description: response._data ?? "API Error",
                icon: "i-heroicons-outline-exclamation-circle",
                color: 'error'
            })
        },
        onRequestError() {
            toast.add({
                title: "Your team's data could not be fetched.",
                description: "API Request Failed",
                icon: "i-heroicons-outline-exclamation-circle",
                color: 'error'
            })
        }
    })
}

async function downloadElement(name) {
    const element = document.getElementById(name)

    if (!element) {
        return
    }

    domToPng(element, {scale: 2, quality: 1, filter: (node) => !(node.classList && node.classList.contains('ad-download'))})
        .then((dataurl) => {
            const link = document.createElement('a')
            link.href = dataurl
            link.download = `${teamNumber.value}_${name}.png`
            link.click()
        })
}

</script>

<style>

.grid {
    background-image: linear-gradient(to right, transparent 60%, #000000aa 100%),linear-gradient(to right, var(--color-primary-800) 1px,transparent 1px),linear-gradient(to bottom,var(--color-primary-800) 1px,var(--color-primary-900) 1px);
    background-size: 100% 100%, 20px 20px, 20px 20px;
}

</style>