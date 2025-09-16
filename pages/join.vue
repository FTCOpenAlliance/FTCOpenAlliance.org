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
                    <UDivider class="text-xl text-primary font-bold mb-4">Team Identification</UDivider>
                    <p class="text-primary-300 mb-6">
                        Your team data may be used to fetch additional information through external APIs. <br>
                        Groups of teams (or "sister" teams) should register each team individually, although links and information may be shared/duplicated.
                    </p>
                    <FormKit @blur="numberChangeCallback" type="number" number="integer" :min="1" :max="99999" :step="1" name="TeamNumber" id="TeamNumber" label="Team Number" validation="required"/>
                    <UButton id="autofillBtn" @click="autofillTeamData" icon="i-mdi-database-refresh" class="mb-4 -mt-6 transition-all">Autofill Previous Data</UButton>
                    <FormKit type="text" name="TeamName" id="TeamName" label="Team Name" validation="required"/>
                    
                    <div id="PIIInput" class="relative">
                        <p class="text-primary-300 mb-6">
                            The email address and shipping address provided will not be publicly visible.
                            You may be contacted through email about your registration, appearance on the FTCOA Show, and the FTCOA Awards.
                            We may ship your team some free merchandise, and any items won through the FTCOA Awards.
                            After submission, they may not be changed. If you must update this information,
                            please send an email to <u><a href="mailto:contact@ftcopenalliance.org">contact@ftcopenalliance.org</a></u>.
                        </p>
                        <FormKit type="email" name="ContactEmail" id="ContactEmail" label="Contact Email Address" validation="required|email"/>
                        <FormKit type="text" name="ShipAddress" id="ShipAddress" label="Shipping Address" validation="required"/>
                        <div id="PIINotice" style="display: none;" class="absolute items-center top-0 left-0 w-full h-full bg-glass bg-[#00000066] border-primary border-2">
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
                    <UDivider class="text-xl text-primary font-bold mb-4">Hosted Links</UDivider>
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
                    <UDivider class="text-xl text-primary font-bold mb-4">Team Information</UDivider>
                    <p class="text-primary-300 mb-6">This data will be publicly visible on your FTC Open Alliance profile.</p>
                    <FormKit type="number" id="RookieYear" name="RookieYear" label="Rookie Year" number="integer" :min="2004"/>
                    <FormKit type="number" id="TeamMembers" name="TeamMembers" label="Number of Team Members" number="integer" :min="0"/>
                    <FormKit type="number" id="Mentors" name="Mentors" label="Number of Mentors" number="integer" :min="0"/>
                    <FormKit type="select" id="TeamType" name="TeamType" label="Type of Team" :options="kvLists.TeamType"/>
                    <FormKit type="number" id="MeetingHours" name="MeetingHours" label="Meeting Time (hours per week)" number="integer" :min="0" :max="168"/>
                    <FormKit type="select" id="Budget" name="Budget" label="Approximate Budget" :options="kvLists.Budget"/>
                    <FormKit type="select" id="Workspace" name="Workspace" label="Team Workspace" :options="kvLists.Workspace"/>
                    <FormKit type="select" id="Sponsors" name="Sponsors" label="Number of Sponsors" :options="kvLists.Sponsors"/>
                </div>
                <div :class="sectionStyle">
                    <UDivider class="text-xl text-primary font-bold mb-4">Robot Information</UDivider>
                    <p class="text-primary-300 mb-6">This data will be publicly visible on your FTC Open Alliance profile.</p>
                    <FormKit type="select" id="Drivetrain" name="Drivetrain" label="Drivetrain Type" :options="kvLists.Drivetrain"/>
                    <FormKit type="checkbox" id="Materials" name="Materials" label="Materials Used" :config="multiCheckboxStyle" :options="kvLists.Materials"/>
                    <FormKit type="checkbox" id="Products" name="Products" label="Product Sources" :config="multiCheckboxStyle" :options="kvLists.Products"/>
                    <FormKit type="checkbox" id="Systems" name="Systems" label="Systems" :config="multiCheckboxStyle" :options="kvLists.Systems"/>
                    <FormKit type="checkbox" id="Odometry" name="Odometry" label="Odometry System" :config="multiCheckboxStyle" :options="kvLists.Odometry"/>
                    <FormKit type="checkbox" id="Sensors" name="Sensors" label="Sensors" :config="multiCheckboxStyle" :options="kvLists.Sensors"/>
                </div>
                <div :class="sectionStyle">
                    <UDivider class="text-xl text-primary font-bold mb-4">Programming Information</UDivider>
                    <p class="text-primary-300 mb-6">This data will be publicly visible on your FTC Open Alliance profile.</p>
                    <FormKit type="select" id="CodeLang" name="CodeLang" label="Programming Language" :options="kvLists.CodeLang"/>
                    <FormKit type="select" id="CodeEnv" name="CodeEnv" label="Code Editor / IDE" :options="kvLists.CodeEnv"/>
                    <FormKit type="checkbox" id="CodeTools" name="CodeTools" label="Third-Party Programming Tools/Libraries" :config="multiCheckboxStyle" :options="kvLists.CodeTools"/>
                    <FormKit type="checkbox" id="Vision" name="Vision" label="Computer Vision" :config="multiCheckboxStyle" :options="kvLists.Vision"/>
                </div>
                <div :class="sectionStyle">
                    <UDivider class="text-xl text-primary font-bold mb-4">Free-Response Questions</UDivider>
                    <p class="text-primary-300 mb-6">
                        Responses will be publicly visible on your FTC Open Alliance profile.<br><br>
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

import { kvLists } from '~/assets/scripts/formKV'
import { getNode } from '@formkit/core'

let toast = useToast()
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
    
    try {
        $fetch(`${apiURL}/internal/formSubmission`, {
            method: 'POST',
            body: formData
        })
        document.getElementById
        toast.add({
            title: "Your team's data was updated successfully!.",
            description: "You will be redirected to your team's page momentarily.",
            icon: "i-heroicons-outline-check-circle",
            color: 'success'
        })
        setTimeout(async () => {
            await navigateTo(`/teams/${formData.TeamNumber}`)
        }, 1000);
        
    } catch (e) {
        toast.add({
            title: "Your team's data could not be saved.",
            description: "An error occured while communicating with the database.",
            icon: "i-heroicons-outline-exclamation-circle",
            color: 'error'
        })
    }
    
}

function autofillTeamData() {
    
    const teamNumber = getNode('TeamNumber').value
    
    updatePIIInputs(teamNumber)

    
    if (isNaN(parseInt(teamNumber))) {
        toast.add({
            title: "Please enter a team number before autofilling.",
            icon: "i-heroicons-outline-exclamation-circle",
            color: 'warning'
        })
    } else {
        fetch(`${apiURL}/teams/${parseInt(teamNumber)}/all`)
        .then(response => {
            if (response.ok) {
                return response.json()    
            } else {return []}
        })
        .then(data => {
            if (data.length !== 0) {
                getNode('TeamNumber').props.disabled = true
                document.getElementById("autofillBtn").hidden = true
                document.getElementById("autofillBtn").disabled = true
                
                for (const key in data[0]) {
                    if (getNode(key)) {
                        getNode(key).input(data[0][key] || '')
                    }
                }
            } else {
                toast.add({
                    title: "Your team's data could not be fetched.",
                    description: "Your team likely has not submitted data before.",
                    icon: "i-heroicons-outline-exclamation-circle",
                    color: 'error'
                })
            }
        })
        .catch(error => {
            toast.add({
                title: "Your team's data could not be fetched.",
                description: "An error occured while communicating with the database.",
                icon: "i-heroicons-outline-exclamation-circle",
                color: 'error'
            })
        })
    }
}

function numberChangeCallback(event) {
    const teamNumber = event.target.value
    updatePIIInputs(teamNumber)
}

function updatePIIInputs(teamNumber) {
    
    if (isNaN(parseInt(teamNumber))) {
        document.getElementById("PIINotice").style.display = "none"
        getNode("ContactEmail").props.validation = "required|email"
        getNode("ShipAddress").props.validation = "required"
        return
    }
    
    fetch(`${apiURL}/internal/checkTeamPII/${parseInt(teamNumber)}`)
    .then(response => {
        if (response.ok || true) {
            return response.json()    
        }
    })
    .then(data => {
        if (data.PIIExists !== undefined) {
            document.getElementById("PIINotice").style.display = data.PIIExists ? "block" : "none"
            getNode("ContactEmail").props.validation = data.PIIExists ? "" : "required|email"
            getNode("ShipAddress").props.validation = data.PIIExists ? "" : "required"
        }
    })
    .catch(error => {
        console.error("Error checking team PII:", error)
    })
}

useHead
({
    title
    : 'Register | FTC Open Alliance'
})

</script>