<template>
    <div class="flex flex-col items-center bg-dots">
        <PageTitle title="Ad Templates" class="w-full"/>
        <PageBlock class="flex-col lg:flex-row gap-16 justify-between lg:items-center max-w-[80rem] mx-8 my-16">
            <div class="flex flex-col justify-start text-start max-w-[30rem] gap-2">
                <h2 class="text-primary-200 text-2xl font-bold">Create your Custom Team Ads!</h2>
                <p class="text-lg">
                    Enter your team number and select your program to create
                    advertisements for your team's Open Alliance profile.
                </p>
                <div class="flex justify-between items-center gap-8">
                    <p class="text-xl">Format:</p>
                    <USelect v-model="imgFormat" class="w-full" :items="['PNG', 'JPG', 'SVG']" />
                </div>
                <div v-if="imgFormat != 'SVG'" class="flex justify-between items-center gap-8">
                    <p class="text-xl">Resolution:</p>
                    <URadioGroup v-model="imgResolution" orientation="horizontal" indicator="hidden" variant="card" :items="['MD', 'LG', 'XL']" />
                </div>
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
        <div class="flex flex-row flex-wrap items-center p-16 gap-8">
            <!-- 16:9 Ad -->
            <div v-if="showAds" id="16x9_AD" class="relative h-[28rem] outline-2 outline-primary shadow-xl shadow-primary-400/50 aspect-video overflow-hidden">
                <img v-if="bgImage" :src="bgURL" class="right-0 absolute object-cover w-[28rem] h-full brightness-75" />
                <div class="bg-grid-static absolute w-2/3 h-full shadow-2xl shadow-primary-400 border-4 border-primary-400 rotate-[-12deg] scale-150 translate-y-10 -translate-x-60"/>
                <div class="flex flex-col absolute justify-between h-full p-8">
                    <div class="max-w-1/2 *:leading-none">
                        <p class="text-3xl">Learn More About</p>
                        <h2 class="text-primary text-[6rem] font-bold">{{ teamNumber }}</h2>
                        <p class="text-2xl">{{ teamData.TeamName }}</p>
                    </div>
                    <div class="max-w-1/2 *:leading-none">
                        <USeparator class="w-full" size="xl">
                            <p class="text-primary text-2xl font-bold">ON</p>
                        </USeparator>
                        <img :src="`/images/${program}OALogos/TwoLineStacked.svg`"/>
                    </div>
                </div>
                <div class="absolute right-15 h-full w-60 flex items-center">
                    <Qrcode :value="qrURL" class="border-8 border-white" black-color="#000" white-color="#FFF"/>
                </div>
                <div class="absolute bottom-0 right-0 p-4">
                    <UButton label="Download" class="ad-download" variant="solid" icon="i-heroicons-arrow-down-tray" @click="downloadElement('16x9_AD')"/>
                </div>
            </div>
            <!-- Insta Ad -->
            <div v-if="showAds" id="INSTA_AD" class="relative h-[28rem] outline-2 outline-primary shadow-xl shadow-primary-400/50 aspect-square overflow-hidden">
                <img v-if="bgImage" :src="bgURL" class="absolute object-cover w-full h-2/3 brightness-75" />
                <div class="absolute flex items-center justify-between top-0 w-full h-20 p-4 bg-[linear-gradient(to_bottom,#000000_0%,#00000000_100%)]">
                    <img class="object-contain h-10" :src="`/images/${program}OALogos/TwoLineStacked.svg`"/>
                    <p class="text-2xl font-bold">TEAM HIGHLIGHT</p>
                </div>
                <div class="bg-grid-static absolute flex p-4 items-center justify-between bottom-0 w-full h-1/3 shadow-2xl shadow-primary-400 border-t-4 border-primary-400">
                    <div class="*:leading-none gap-2">
                        <p class="text-lg">{{ teamData.TeamName }}</p>
                        <h2 class="text-primary text-[4rem] font-bold">{{ teamNumber }}</h2>
                        <p class="text-primary-600">{{ teamData.Location }}</p>
                    </div>
                    <Qrcode class="w-30 border-8 border-white" :value="qrURL" black-color="#000" white-color="#FFF"/>
                </div>
                <div class="absolute bottom-0 right-0 p-4">
                    <UButton label="Download" class="ad-download" variant="solid" icon="i-heroicons-arrow-down-tray" @click="downloadElement('INSTA_AD')"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Program } from '~/assets/scripts/programs'
import { domToPng, domToJpeg, domToSvg, domToForeignObjectSvg } from 'modern-screenshot'

const apiURL = useRuntimeConfig().public.API_URL
let toast = useToast()

const program = useState("program")
const teamNumber = ref()
const teamData = ref(null)
const bgImage = ref()
const bgURL = computed(() => {
    return bgImage.value ? URL.createObjectURL(bgImage.value) : null
})
const qrURL = computed(() =>  teamNumber.value && teamData.value ? `https://theopenalliance.org/${program.value.toLowerCase()}/teams/${teamNumber.value}` : null)
const imgFormat = ref("PNG")
const imgResolution = ref("LG")

// TESTING VARIABLES!
// program.value = Program.FTC
// const teamNumber = ref(6347)
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

    let scale

    if (imgResolution.value === "XL") {
        scale = 4.8
    } else if (imgResolution.value === "LG") {
        scale = 3.6
    } else {
        scale = 2.4
    }

    domToImage(element, {scale: scale, quality: 1, filter: (node) => !(node.classList && node.classList.contains('ad-download'))})
        .then((dataurl) => {
            const link = document.createElement('a')
            link.href = dataurl
            link.download = `${teamNumber.value}_${name}_${imgResolution.value}.${imgFormat.value.toLowerCase()}`
            link.click()
        })
}

async function domToImage(element, options) {
    options.type = `image/${imgFormat.value.toLowerCase()}`
    if (imgFormat.value === 'SVG') {
        return await domToForeignObjectSvg(element, options)
    } else if (imgFormat.value === 'PNG') {
        return await domToPng(element, options)
    } else if (imgFormat.value === 'JPG') {
        return await domToJpeg(element, options)
    }
}

</script>

<style>

.bg-grid-static {
    background-image: linear-gradient(to right, transparent 60%, #000000aa 100%),linear-gradient(to right, var(--color-primary-800) 1px,transparent 1px),linear-gradient(to bottom,var(--color-primary-800) 1px,var(--color-primary-900) 1px);
    background-size: 100% 100%, 20px 20px, 20px 20px;
}

</style>