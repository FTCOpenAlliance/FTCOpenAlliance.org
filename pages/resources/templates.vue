<template>
    <div class="flex flex-col items-center bg-dots">
        <PageTitle title="Team Graphics" class="w-full"/>
        <PageBlock class="flex-col lg:flex-row gap-4 md:gap-16 items-center justify-between lg:items-center max-w-[80rem] mx-8 my-16">
            <div class="flex flex-col justify-start text-start max-w-[30rem] gap-2">
                <h2 class="text-primary-200 text-2xl font-bold">Create your Custom Team Graphics!</h2>
                <p class="gap-2">
                    Enter your team number and select your program to create
                    custom graphics for your team's Open Alliance profile.
                    <br><br>
                    The image you choose is used differently in each template.
                    Feel free to experiment to find which image works best for each one.
                </p>
            </div>
            <div class="flex flex-col gap-2 *:flex-col *:md:flex-row *:gap-2 *:md:gap-8">
                <div class="flex justify-between items-center">
                    <p class="text-xl">Team:</p>
                    <div class="flex gap-2">
                        <URadioGroup v-model="program" :ui="{label: 'text-sm font-bold'}" orientation="horizontal" size="xs" indicator="hidden" variant="card" :items="['FTC', 'FRC']" />
                        <UInput v-model="teamNumber" type="number"/>
                    </div>
                </div>
                <div class="flex justify-between items-center gap-8">
                    <p class="text-xl">Resolution:</p>
                    <URadioGroup v-model="imgResolution" orientation="horizontal" indicator="hidden" variant="card" :items="['MD', 'LG', 'XL']" />
                </div>
                <div class="flex justify-between items-center">
                    <p class="text-xl">Image:</p>
                    <UFileUpload
                    v-model="bgImage"
                    label="Click to select an image"
                    class="w-96 min-h-6"
                    accept="image/*"
                    />
                </div>
                <UButton size="xl" @click="fetchTeamData">Generate Advertisements</UButton>
            </div>
            <div v-if="browserWarn" class="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-2xl bg-black/90 p-4 transition-opacity">
                <p class="text-lg text-center font-bold text-primary-200">This tool is only compatible with Chrome or Chromium-based browsers (e.g. Microsoft Edge, Brave, Opera).</p>
                <p class="text-md text-center text-white/80">Using another browser, such as Firefox or Safari, may result in improperly-rendered images being downloaded.</p>
                <UButton class="mt-4 w-1/3" size="xl" @click="() => {browserWarn = false}">Dismiss</UButton>
            </div>
        </PageBlock>
        <USeparator v-if="showAds" class="text-xl text-primary md:text-4xl px-16">Generated Graphics</USeparator>
        <p class="text-lg text-center xl:text-[0px] xl:opacity-0 transition-all max-w-4xl py-4 px-16">
            Your screen resolution is less optimal for viewing the graphics below.
            You may view the full images by scrolling horizontally or using the "Desktop View" if on a mobile browser.
        </p>
        <div class="max-w-dvw overflow-x-auto">
            <div class="flex flex-row flex-wrap items-stretch justify-center p-16 gap-8 w-[1405px]">
                <!-- 16:9 Ad -->
                <div v-if="showAds" id="16x9_AD" class="relative h-[28rem] outline-2 outline-primary shadow-xl shadow-primary-400/50 aspect-video overflow-hidden">
                    <img v-if="bgImage" :src="bgURL" class="right-0 absolute object-cover w-[28rem] h-full brightness-75" />
                    <div class="bg-grid-static absolute w-4/5 h-full shadow-2xl shadow-primary-400 border-4 border-primary-400 rotate-[72deg] scale-150 translate-y-10 -translate-x-60"/>
                    <div class="flex flex-col absolute justify-between h-full p-8">
                        <div class="h-40 max-w-1/2 *:leading-none">
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
                            <p class="text-primary-600 font-semibold">{{ teamData.Location }}</p>
                        </div>
                        <Qrcode class="w-30 border-8 border-white" :value="qrURL" black-color="#000" white-color="#FFF"/>
                    </div>
                    <div class="absolute bottom-0 right-0 p-4">
                        <UButton label="Download" class="ad-download" variant="solid" icon="i-heroicons-arrow-down-tray" @click="downloadElement('INSTA_AD')"/>
                    </div>
                </div>
                <!-- Build Thread Banner-->
                <div v-if="showAds" id="BUILD_THREAD" class="relative h-[20rem] outline-2 outline-primary shadow-xl shadow-primary-400/50 aspect-[4/1] overflow-hidden">
                    <img v-if="bgImage" :src="bgURL" class="absolute object-cover w-full h-full brightness-25" />
                    <div class="bg-grid-static absolute left-0 scale-150 w-40 h-full shadow-2xl shadow-primary rotate-[168deg]"/>
                    <div class="bg-grid-static absolute right-0 scale-150 w-40 h-full shadow-2xl shadow-primary rotate-[-12deg]"/>
                    <div class="absolute flex flex-col w-full h-full gap-2 items-center justify-center">
                        <div class="flex items-center gap-4">
                            <p class="text-6xl font-bold text-primary flex items-center gap-4">{{ teamNumber }}<span class="text-4xl text-white font-medium">{{ teamData.TeamName }}</span></p>
                        </div>
                        <p class="text-8xl font-bold text-primary-200">BUILD THREAD</p>
                        <div class="flex items-center gap-4">
                            <img :src="`/images/${program}OALogos/ShortHorizontal.svg`" class="object-contain h-14">
                            <USeparator orientation="vertical"/>
                            <img src="/images/partnerLogos/ChiefDelphi.png" class="object-contain h-12">
                        </div>
                    </div>
                    <div class="absolute bottom-0 right-0 p-4">
                        <UButton label="Download" class="ad-download" variant="solid" icon="i-heroicons-arrow-down-tray" @click="downloadElement('BUILD_THREAD')"/>
                    </div>
                </div>
                <div v-if="showAds" id="TRADING_CARD" class="relative h-[40rem] outline-2 outline-primary shadow-xl shadow-primary-400/50 aspect-[2/3] overflow-hidden bg-grid-static">
                    <div class="flex flex-col">
                        <div class="flex items-center gap-2 p-4">
                            <div class="bg-black/20 ring-1 ring-primary shadow-lg shadow-primary-500/40 -ml-4 p-2 w-16 rounded-r-full">
                                <p class="text-center font-bold">{{ program }}</p>
                            </div>
                            <p class="text-4xl text-primary-400 font-extrabold">{{ teamNumber }}</p>
                            <span class="mx-auto"></span>
                            <div class="flex items-baseline gap-1">
                                <p class="font-medium">GP</p>
                                <p class="text-3xl font-semibold">100</p>
                            </div>
                            <div class="flex items-center justify-center size-10 rounded-full bg-primary-200/10 ring-1 ring-primary shadow-[0px_0px_8px_4px] shadow-primary-500/40">
                                <img src="/public/images/OALogos/Icon.svg" class="p-1"/>
                            </div>
                        </div>
                        <div class="mx-6">
                            <div class="bg-tcg-frame p-2">
                                <img class="border-2 border-primary-900/25 object-cover aspect-[3/2]" :src="bgURL">
                            </div>
                            <div class="rounded-b-[20px] p-1 bg-black/30 ring-1 ring-primary backdrop-blur-[1px]">
                                <p class="text-center text-xl font-bold">{{ teamData.TeamName }}</p>
                            </div>
                        </div>
                        <div class="mx-6 pt-4">
                            <table class="w-full bg-black/50 backdrop-blur-[1px]">
                                <tbody class="border-2 border-primary-200/40 **:border-1 **:border-primary-200/50 **:p-1 [&>tr>th]:text-left [&>tr>td]:text-center [&>tr>th]:w-1/3">
                                    <tr> <th>Location</th> <td>{{ teamData.Location }}</td> </tr>
                                    <tr> <th>Rookie Year</th> <td>{{ teamData.RookieYear }}</td> </tr>
                                    <tr> <th>Members</th> <td>{{ teamData.TeamMembers }}</td> </tr>
                                    <tr> <th>Drivetrain</th> <td>{{ kv.Drivetrain[teamData.Drivetrain] }}</td> </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="absolute bottom-0 w-full flex items-center justify-between p-4 bg-black/50 backdrop-blur-[1px]">
                            <div>
                                <img class="w-48" :src="`/images/${program}OALogos/ShortHorizontal.svg`"/>
                                <p class="text-primary-600 font-bold">{{ qrURL.replace("https://", "") }}</p>
                            </div>
                            <Qrcode class="w-20" :value="qrURL" black-color="#000" white-color="#FFF"/>
                        </div>
                    </div>
                    <div class="absolute bottom-0 right-0 p-4">
                        <UButton label="Download" class="ad-download" variant="solid" icon="i-heroicons-arrow-down-tray" @click="downloadElement('TRADING_CARD')"/>
                    </div>
                </div>
                <div class="flex items-center justify-center grow bg-black/50 backdrop-blur-[1px] p-4 m-8 border-2 border-dashed border-primary-500/50">
                    <div class="flex flex-col gap-2 text-center max-w-[600px]">
                        <p class="text-primary-200 text-3xl font-semibold">{{ showAds ? "Nothing catching your eye?" : "Don't want templates?" }}</p>
                        <p class="text-lg">
                            You can also use the Open Alliance Brand Kit to create your own custom graphics,
                            or add Open Alliance logos into your team's existing designs!
                        </p>
                        <a class="font-bold text-xl text-primary-400" href="https://brand.theopenalliance.org" target="_blank">brand.theopenalliance.org</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Program } from '~/assets/scripts/programs'
import { domToPng, domToJpeg, domToSvg, domToForeignObjectSvg } from 'modern-screenshot'
import { ftcKV, frcKV } from '~/assets/scripts/formKV'

useState('title').value = 'Team Graphics'
const apiURL = useRuntimeConfig().public.API_URL
let toast = useToast()

const program = useState("program")
const kv = computed(() => {
    switch (program.value) {
        case Program.FTC:
            return ftcKV
        case Program.FRC:
            return frcKV
        default:
            return ftcKV
    }
})
const browserWarn = ref(false)

if (import.meta.client) {
    browserWarn.value = !navigator.userAgent.includes("Chrome")
}

const teamNumber = ref()
const teamData = ref(null)
const bgImage = ref()
const bgURL = computed(() => {
    return bgImage.value ? URL.createObjectURL(bgImage.value) : null
})
const qrURL = computed(() =>  teamNumber.value && teamData.value ? `https://theopenalliance.org/${program.value.toLowerCase()}/teams/${teamNumber.value}` : null)
const imgResolution = ref("LG")

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
    await $fetch(`${apiURL}/teams/${program.value}/${parseInt(teamNumber.value)}/all`, {
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

    domToPng(element, {scale: scale, type: "image/png", quality: 1, filter: (node) => !(node.classList && node.classList.contains('ad-download'))})
        .then((dataurl) => {
            const link = document.createElement('a')
            link.href = dataurl
            link.download = `${teamNumber.value}_${name}_${imgResolution.value}.png`
            link.click()
        })
}

</script>

<style>

.bg-grid-static {
    background-image: linear-gradient(to top, transparent 40%, #000000aa 100%),linear-gradient(to right, var(--color-primary-800) 1px,transparent 1px),linear-gradient(to bottom,var(--color-primary-800) 1px,var(--color-primary-900) 1px);
    background-size: 100% 100%, 20px 20px, 20px 20px;
}

.bg-tcg-frame {
    background-image: linear-gradient(45deg, var(--color-primary-600) 40%, var(--color-primary-200) 50%, var(--color-primary-600) 80%)
}

</style>