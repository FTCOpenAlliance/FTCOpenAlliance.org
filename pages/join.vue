<template>
    <div>
        <PageTitle>
            <h1 class="text-6xl lg:text-8xl text-primary font-bold">
                Register
            </h1>
        </PageTitle>
        
        <div class="flex flex-col py-10 items-center bg-dots">
            
            <div class="md:w-[70vw] xl:w-[50vw]">
                <FormKit
                type="form"
                :config="{ classes: {
                    input: 'border border-primary bg-black p-2 w-full accent-primary-500',
                    message: 'text-red-400 mb-2',
                } }"
                id="joinForm"
                submit-label="Register/Update"
                @submit="formCallback"
                >
                <div :class="sectionStyle">
                    <USeparator class="text-xl text-primary font-bold mb-4">Team Identification</USeparator>
                    <p class="text-primary-300 mb-6">
                        Your team data may be used to fetch additional information through external APIs. <br>
                        Groups of teams (or "sister" teams) should register each team individually, although links and information may be shared/duplicated.
                    </p>
                    <div class="flex gap-2 w-full items-end">
                        <FormKit v-model="program" name="Program" id="Program" label="Program" type="radio" :options="['FTC', 'FRC']" :config="multiCheckboxStyle" validation="required"/>
                        <FormKit @blur="numberChangeCallback" :config="{ classes: {
                            outer: 'flex flex-col grow',
                            wrapper: 'flex flex-col grow',
                            input: 'border border-primary bg-black p-2 w-full accent-primary-500',
                            message: 'text-red-400 mb-2',
                        }}" type="number" number="integer" :min="1" :max="99999" :step="1" name="TeamNumber" id="TeamNumber" label="Team Number" validation="required"/>
                    </div>
                    <UButton id="autofillBtn" @click="autofillTeamData" icon="i-mdi-database-refresh" class="-mt-4 transition-all">Autofill Previous Data</UButton>
                    <FormKit type="text" name="TeamName" id="TeamName" label="Team Name" validation="required"/>
                    
                    <div id="PIIInput" class="relative">
                        <p class="text-primary-300 mb-6">
                            The email address and shipping address provided will not be publicly visible.
                            You may be contacted through email about your registration, appearance on the Open Alliance Show, and the Open Alliance Awards.
                            We may ship your team some free merchandise, and any items won through the Open Alliance Awards.
                            After submission, they may not be changed. If you must update this information,
                            please send an email to <u><a href="mailto:contact@ftcopenalliance.org">contact@ftcopenalliance.org</a></u>.
                        </p>
                        <FormKit type="email" name="ContactEmail" id="ContactEmail" label="Contact Email Address" :validation="piiExists ? '' : 'required|email'"/>
                        <FormKit type="text" name="ShipAddress" id="ShipAddress" label="Shipping Address" :validation="piiExists ? '' : 'required'"/>
                        <div id="PIINotice" :class="piiExists ? 'visible' : 'invisible'" class="absolute items-center top-0 left-0 w-full h-full bg-glass bg-[#000000b8] border-primary border-2 scale-105">
                            <div class="flex items-center w-full h-full text-center p-4 md:p-12 sm:text-lg md:text-xl">
                                <p class="text-primary-300">
                                    Your contact email address and shipping address have already been collected.<br>
                                    If you believe this is a mistake, or wish to update this information, please
                                    email <u><a href="mailto:contact@ftcopenalliance.org">contact@ftcopenalliance.org</a></u>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div :class="sectionStyle">
                    <USeparator class="text-xl text-primary font-bold mb-4">Hosted Links</USeparator>
                    <ul class="list-disc list-inside mb-6 text-primary-300">
                        <li>Any links provided must be accessible publicly, without need for an account.</li>
                        <li>You must create a Chief Delphi build thread for your team before submitting and update it regularly.</li>
                        <li>Your CAD must be available through Onshape. Either use it to design your robot or upload versions from your other CAD software regularly.</li>
                        <li>Photo albums may be hosted on platforms such as Google Photos, Flickr, Imgur, and Smugmug.</li>
                        <li>Videos may be hosted on YouTube, Vimeo, or similar platforms. If you wish to add multiple, link a playlist.</li>
                    </ul>
                    
                    <FormKit type="url" id="TeamWebsite" name="TeamWebsite" label="Team Website" validation="url"/>
                    <FormKit type="url" id="BuildThread" name="BuildThread" label="Chief Delphi Build Thread" validation="required|url"/>
                    <FormKit type="url" id="CAD" name="CAD" label="Onshape CAD Project" validation="url"/>
                    <FormKit type="url" id="Code" name="Code" label="Code Repository" validation="url"/>
                    <FormKit type="url" id="Photo" name="Photo" label="Photos Link" validation="url"/>
                    <FormKit type="url" id="Video" name="Video" label="Videos Link" validation="url"/>
                </div>
                <div :class="sectionStyle">
                    <USeparator class="text-xl text-primary font-bold mb-4">Team Information</USeparator>
                    <p class="text-primary-300 mb-6">This data will be publicly visible on your {{ program }} Open Alliance profile.</p>
                    <FormKit type="number" id="RookieYear" name="RookieYear" label="Rookie Year" number="integer" :min="program == Program.FRC ? 1992 : 2004"/>
                    <FormKit type="number" id="TeamMembers" name="TeamMembers" label="Number of Team Members" number="integer" :min="0"/>
                    <FormKit type="number" id="Mentors" name="Mentors" label="Number of Mentors" number="integer" :min="0"/>
                    <FormKit type="select" id="TeamType" name="TeamType" label="Type of Team" :options="kvLists.TeamType"/>
                    <FormKit type="number" id="MeetingHours" name="MeetingHours" label="Meeting Time (hours per week)" number="integer" :min="0" :max="168"/>
                    <FormKit type="select" id="Budget" name="Budget" label="Approximate Budget" :options="kvLists.Budget"/>
                    <FormKit type="select" id="Workspace" name="Workspace" label="Team Workspace" :options="kvLists.Workspace"/>
                    <FormKit type="select" id="Sponsors" name="Sponsors" label="Number of Sponsors" :options="kvLists.Sponsors"/>
                </div>
                <div :class="sectionStyle">
                    <USeparator class="text-xl text-primary font-bold mb-4">Robot Information</USeparator>
                    <p class="text-primary-300 mb-6">This data will be publicly visible on your {{ program }} Open Alliance profile.</p>
                    <FormKit type="select" id="Drivetrain" name="Drivetrain" label="Drivetrain Type" :options="kvLists.Drivetrain"/>
                    <FormKit type="checkbox" id="Materials" name="Materials" label="Materials Used" :config="multiCheckboxStyle" :options="kvLists.Materials"/>
                    <FormKit type="checkbox" id="Products" name="Products" label="Product Sources" :config="multiCheckboxStyle" :options="kvLists.Products"/>
                    <FormKit type="checkbox" id="Systems" name="Systems" label="Systems" :config="multiCheckboxStyle" :options="kvLists.Systems"/>
                    <FormKit type="checkbox" id="Odometry" name="Odometry" label="Odometry System" :config="multiCheckboxStyle" :options="kvLists.Odometry"/>
                    <FormKit type="checkbox" id="Sensors" name="Sensors" label="Sensors" :config="multiCheckboxStyle" :options="kvLists.Sensors"/>
                </div>
                <div :class="sectionStyle">
                    <USeparator class="text-xl text-primary font-bold mb-4">Programming Information</USeparator>
                    <p class="text-primary-300 mb-6">This data will be publicly visible on your {{ program }} Open Alliance profile.</p>
                    <FormKit type="select" id="CodeLang" name="CodeLang" label="Programming Language" :options="kvLists.CodeLang"/>
                    <FormKit type="select" id="CodeEnv" name="CodeEnv" label="Code Editor / IDE" :options="kvLists.CodeEnv"/>
                    <FormKit type="checkbox" id="CodeTools" name="CodeTools" label="Third-Party Programming Tools/Libraries" :config="multiCheckboxStyle" :options="kvLists.CodeTools"/>
                    <FormKit type="checkbox" id="Vision" name="Vision" label="Computer Vision" :config="multiCheckboxStyle" :options="kvLists.Vision"/>
                </div>
                <div :class="sectionStyle">
                    <USeparator class="text-xl text-primary font-bold mb-4">Free-Response Questions</USeparator>
                    <p class="text-primary-300 mb-6">
                        Responses will be publicly visible on your {{ program }} Open Alliance profile.<br><br>
                        Feel free to make your responses long and detailed, ideally a few sentences to a paragraph each. (max 750 characters each)<br>
                        If you don't have an answer for a question at this time, you may leave it blank and update it later.
                    </p>
                    <FormKit type="textarea" id="UniqueFeatures" name="UniqueFeatures" label="What is something unique about your robot this season? What about your robot stands out at a competition?" validation="length:0,750"/>
                    <FormKit type="textarea" id="Outreach" name="Outreach" label="What sort of Outreach does your team plan on pursuing this season? Which are you most proud of?" validation="length:0,750"/>
                    <FormKit type="textarea" id="CodeAdvantage" name="CodeAdvantage" label="Describe an element of your code which you think will be the most advantageous this season." validation="length:0,750"/>
                    <FormKit type="textarea" id="Competitions" name="Competitions" label="What competitions will you be attending this season? Any in particular that you're looking forward to?" validation="length:0,750"/>
                    <FormKit type="textarea" id="TeamStrategy" name="TeamStrategy" label="How do you organize your team and manage time, tasks, and resources? What's the strategy at competitions?" validation="length:0,750"/>
                    <FormKit type="textarea" id="GameStrategy" name="GameStrategy" label="Describe a unique or noteworthy strategic element that your team has employed for its effectiveness in this year's game." validation="length:0,750"/>
                    <FormKit type="textarea" id="DesignProcess" name="DesignProcess" label="What's your team's design process? (This can include design philosophy, strategy, theoretical design, visualization, CAD, and more.)" validation="length:0,750"/>
                </div>
            </FormKit>   
        </div>
    </div>
</div>
</template>

<script setup>

import { ftcKV, frcKV } from '~/assets/scripts/formKV'
import { getNode } from '@formkit/core'
import { Program } from '~/assets/scripts/programs'

let toast = useToast()
const program = useState('program', () => Program.Generic)
let kvLists = computed(() => {
    switch (program.value) {
        case Program.FTC:
            return ftcKV
        case Program.FRC:
            return frcKV
        default:
            return ftcKV
    }
})

const apiURL = useRuntimeConfig().public.API_URL

const multiCheckboxStyle = {
    classes: {
        options: 'flex flex-col md:flex-row md:flex-wrap gap-2',
        option: 'border border-primary has-checked:bg-primary-900 hover:scale-[1.02] has-checked:scale-[1.02] has-checked:border-primary-200 transition-all shadow-xs has-checked:shadow-primary-400',
        label: 'inline-block w-full p-2',
        input: 'hidden',
    }   
}

const sectionStyle = "flex flex-col gap-6 backdrop-blur-sm p-10 mb-6 shadow-xl shadow-primary-800 border border-primary"

async function formCallback(formData) {

    if (program.value != Program.FTC && program.value != Program.FRC) {
        toast.add({
                title: "Your team's data could not be saved.",
                description: "A program (FTC or FRC) was not correctly selected.",
                icon: "i-heroicons-outline-exclamation-circle",
                color: 'error'
            })
        return
    }

    if (isNaN(formData.TeamNumber)) {
        toast.add({
                title: "Your team's data could not be saved.",
                description: "A valid team number was not provided.",
                icon: "i-heroicons-outline-exclamation-circle",
                color: 'error'
            })
        return
    }

    formData["TeamID"] = program.value.toUpperCase() + formData.TeamNumber

    await $fetch(`${apiURL}/internal/formSubmission`, {
        method: 'POST',
        body: formData,
        onResponse({response}) {
            if (response.ok){
                toast.add({
                    title: "Your team's data was updated successfully!.",
                    description: "You will be redirected to your team's page momentarily. Changes may take some time to appear.",
                    icon: "i-heroicons-outline-check-circle",
                    color: 'success'
                })
                setTimeout(async () => {
                    await navigateTo(`/${program.value}/teams/${formData.TeamNumber}`)
                }, 1000);
            }
        },
        onResponseError({response}) {
            toast.add({
                title: "Your team's data could not be saved.",
                description: response._data,
                icon: "i-heroicons-outline-exclamation-circle",
                color: 'error'
            })
        },
        onRequestError() {
            toast.add({
                title: "Your team's data could not be saved.",
                description: "API Request Error",
                icon: "i-heroicons-outline-exclamation-circle",
                color: 'error'
            })
        }
    })
}

async function autofillTeamData() {
    
    const teamNumber = getNode('TeamNumber').value
    
    if (isNaN(parseInt(teamNumber))) {
        toast.add({
            title: "Please enter a team number before autofilling.",
            icon: "i-heroicons-outline-exclamation-circle",
            color: 'warning'
        })
        return;
    }
    
    await $fetch(`${apiURL}/internal/formAutofillData/${program.value}/${parseInt(teamNumber)}`, {
        onResponse({response}) {
            if (response.ok) {
                getNode('TeamNumber').props.disabled = true
                document.getElementById("autofillBtn").hidden = true
                document.getElementById("autofillBtn").disabled = true
                
                for (const key in response._data) {
                    if (getNode(key)) {
                        getNode(key).input(response._data[key] || '')
                    }
                }
                
                updatePIIInputs(teamNumber)
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

function numberChangeCallback(event) {
    const teamNumber = event.target.value
    updatePIIInputs(teamNumber)
}

let piiExists = ref(false)

async function updatePIIInputs(teamNumber) {
    
    if (isNaN(parseInt(teamNumber))) {
        piiExists.value = false
        return
    }

    await $fetch(`${apiURL}/internal/checkTeamPII/${program.value}/${parseInt(teamNumber)}`, {
        onResponse({response}) {
            if (response._data != undefined && response._data.PIIExists != undefined) {
                piiExists.value = response._data.PIIExists
            }
        },
        onResponseError({response}) {
            toast.add({
                title: "There was an issue while checking your team's registration status.",
                description: response._data ?? "API Error",
                icon: "i-heroicons-outline-exclamation-circle",
                color: 'error'
            })
        },
        onRequestError() {
            toast.add({
                title: "There was an issue while checking your team's registration status.",
                description: "API Request Failed",
                icon: "i-heroicons-outline-exclamation-circle",
                color: 'error'
            })
        }
    })
}


useHead
({
    title
    : 'Register | FTC Open Alliance'
})

</script>