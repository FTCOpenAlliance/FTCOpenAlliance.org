<template>
    <UApp>
        <div>
            <PageTitle>
                <h1 class="text-6xl lg:text-8xl text-orange font-bold">
                    Register
                </h1>
            </PageTitle>
            
            <div class="flex flex-col py-10 items-center bg-dots">
                
                <div class="md:w-[70vw] xl:w-[50vw]">
                    <FormKit
                    type="form"
                    :config="{ classes: {
                        input: 'border border-orange bg-black p-2 w-full accent-orange-500',
                        message: 'text-red-400 mb-2',
                    } }"
                    submit-label="Register/Update"
                    @submit="formCallback"
                    >
                    <div :class="sectionStyle">
                        <UDivider class="text-xl text-orange font-bold mb-4">Team Identification</UDivider>
                        <p class="text-orange-300 mb-6">Your team data may be used to fetch additional information through external APIs.</p>
                        <FormKit type="number" number="integer" :min="1" :max="99999" :step="1" name="teamNumber" id="teamNumber" label="Team Number" validation="required"/>
                        <UButton @click="autofillTeamData" icon="i-mdi-database-refresh" class="mb-4 -mt-6 rounded-none transition-all">Autofill Previous Data</UButton>
                        <FormKit type="text" name="teamName" id="teamName" label="Team Name" validation="required"/>
                        <!-- <FormKit type="email" name="contactEmail" label="Contact Email Address" validation="required|email"/>
                        <FormKit type="text" name="shipAddress" label="Shipping Address" validation="required"/> -->
                    </div>
                    <div :class="sectionStyle">
                        <UDivider class="text-xl text-orange font-bold mb-4">Hosted Links</UDivider>
                        <ul class="list-disc list-inside mb-6 text-orange-300">
                            <li>Any links provided must be accessible publicly, without need for an account.</li>
                            <li>You must create a Chief Delphi build thread for your team before submitting and update it regularly.</li>
                            <li>Your CAD must be available through Onshape. Either use it to design your robot or upload versions from your other CAD software regularly.</li>
                            <li>Photo albums may be hosted on platforms such as Google Photos, Flickr, Imgur, and Smugmug.</li>
                            <li>Videos may be hosted on YouTube, Vimeo, or similar platforms. If you wish to add multiple, link a playlist.</li>
                        </ul>
                        
                        <FormKit type="url" id="teamWebsite" name="teamWebsite" label="Team Website" validation="url"/>
                        <FormKit type="url" id="buildThread" name="buildThread" label="Chief Delphi Build Thread" validation="required|url"/>
                        <FormKit type="url" id="cadLink" name="cadLink" label="Onshape CAD Project" validation="url"/>
                        <FormKit type="url" id="codeLink" name="codeLink" label="Code Repository" validation="url"/>
                        <FormKit type="url" id="photoLink" name="photoLink" label="Photos Link" validation="url"/>
                        <FormKit type="url" id="videoLink" name="videoLink" label="Videos Link" validation="url"/>
                    </div>
                    <div :class="sectionStyle">
                        <UDivider class="text-xl text-orange font-bold mb-4">Team Information</UDivider>
                        <p class="text-orange-300 mb-6">This data will be publicly visible on your FTC Open Alliance profile.</p>
                        <FormKit type="number" id="rookieYear" name="rookieYear" label="Rookie Year" number="integer" :min="2004"/>
                        <FormKit type="number" id="teamMembers" name="teamMembers" label="Number of Team Members" number="integer" :min="0"/>
                        <FormKit type="number" id="mentors" name="mentors" label="Number of Mentors" number="integer" :min="0"/>
                        <FormKit
                        type="select"
                        name="teamType"
                        label="Type of Team"
                        :options="kvLists.teamType"
                        />
                        <FormKit type="number" id="meetingHours" name="meetingHours" label="Meeting Time (hours per week)" number="integer" :min="0" :max="168"/>
                        <FormKit type="select" id="budget" name="budget" label="Approximate Budget" :options="kvLists.budget"/>
                        <FormKit type="select" id="workspace" name="workspace" label="Team Workspace" :options="kvLists.workspace"/>
                        <FormKit type="select" id="sponsors" name="sponsors" label="Number of Sponsors" :options="kvLists.sponsors"/>
                    </div>
                    <div :class="sectionStyle">
                        <UDivider class="text-xl text-orange font-bold mb-4">Robot Information</UDivider>
                        <p class="text-orange-300 mb-6">This data will be publicly visible on your FTC Open Alliance profile.</p>
                        <FormKit type="select" id="drivetrain" name="drivetrain" label="Drivetrain Type" :options="kvLists.drivetrain"/>
                        <FormKit type="checkbox" id="materials" name="materials" label="Materials Used" :config="multiCheckboxStyle" :options="kvLists.materials"/>
                        <FormKit type="checkbox" id="products" name="products" label="Product Sources" :config="multiCheckboxStyle" :options="kvLists.products"/>
                        <FormKit type="checkbox" id="systems" name="systems" label="Systems" :config="multiCheckboxStyle" :options="kvLists.systems"/>
                        <FormKit type="checkbox" id="odometry" name="odometry" label="Odometry System" :config="multiCheckboxStyle" :options="kvLists.odometry"/>
                        <FormKit type="checkbox" id="sensors" name="sensors" label="Sensors" :config="multiCheckboxStyle" :options="kvLists.sensors"/>
                    </div>
                    <div :class="sectionStyle">
                        <UDivider class="text-xl text-orange font-bold mb-4">Programming Information</UDivider>
                        <p class="text-orange-300 mb-6">This data will be publicly visible on your FTC Open Alliance profile.</p>
                        <FormKit type="select" id="codeLang" name="codeLang" label="Programming Language" :options="kvLists.codeLang"/>
                        <FormKit type="select" id="codeEnv" name="codeEnv" label="Code Editor / IDE" :options="kvLists.codeEnv"/>
                        <FormKit type="checkbox" id="codeTools" name="codeTools" label="Third-Party Programming Tools/Libraries" :config="multiCheckboxStyle" :options="kvLists.codeTools"/>
                        <FormKit type="checkbox" id="vision" name="vision" label="Computer Vision" :config="multiCheckboxStyle" :options="kvLists.vision"/>
                    </div>
                    <div :class="sectionStyle">
                        <UDivider class="text-xl text-orange font-bold mb-4">Free-Response Questions</UDivider>
                        <p class="text-orange-300 mb-6">
                            Responses will be publicly visible on your FTC Open Alliance profile.<br><br>
                            Feel free to make your responses long and detailed, ideally a few sentences to a paragraph each. (max 750 characters each)<br>
                            If you don't have an answer for a question at this time, you may leave it blank and update it later.
                        </p>
                        <FormKit type="textarea" id="uniqueFeatures" name="uniqueFeatures" label="What is something unique about your robot this season? What about your robot stands out at a competition?" validation="length:0,750"/>
                        <FormKit type="textarea" id="outreach" name="outreach" label="What sort of Outreach does your team plan on pursuing this season? Which are you most proud of?" validation="length:0,750"/>
                        <FormKit type="textarea" id="codeAdvantage" name="codeAdvantage" label="Describe an element of your code which you think will be the most advantageous this season." validation="length:0,750"/>
                        <FormKit type="textarea" id="competitions" name="competitions" label="What competitions will you be attending this season? Any in particular that you're looking forward to?" validation="length:0,750"/>
                        <FormKit type="textarea" id="teamStrategy" name="teamStrategy" label="How do you organize your team and manage time, tasks, and resources? What's the strategy at competitions?" validation="length:0,750"/>
                        <FormKit type="textarea" id="gameStrategy" name="gameStrategy" label="Describe a unique or noteworthy strategic element that your team has employed for its effectiveness in this year's game." validation="length:0,750"/>
                        <FormKit type="textarea" id="designProcess" name="designProcess" label="What's your team's design process? (This can include design philosophy, strategy, theoretical design, visualization, CAD, and more.)" validation="length:0,750"/>
                    </div>
                </FormKit>
                
            </div>
        </div>
    </div>
</UApp>
</template>

<script setup>

import { kvLists } from '~/assets/scripts/formKV'
import { getNode } from '@formkit/core'

// for accessing by key: kvLists.teamType["COMMUNITY"]

const multiCheckboxStyle = {
    classes: {
        options: 'flex flex-col md:flex-row md:flex-wrap gap-2',
        option: 'p-1 md:p-2 border border-orange has-[:checked]:bg-orange-900 hover:scale-[1.02] has-[:checked]:scale-[1.02] has-[:checked]:border-orange-200 transition-all shadow-sm has-[:checked]:shadow-orange-400',
        input: 'hidden',
    }   
}

const sectionStyle = "flex flex-col gap-6 backdrop-blur p-10 mb-6 shadow-xl shadow-orange-800 border border-orange"

function formCallback(formData) {
    console.log("FORM SUBMITTED")
    console.log(formData);
}

function autofillTeamData() {
    const teamNumber = getNode('teamNumber').value;
    if (teamNumber != '') {
        fetch(`https://api.ftcopenalliance.org/teams/${parseInt(teamNumber)}`)
        .then(response => {
            if (response.ok || true) {
                return response.json()         
            }
        })
        .then(data => {
            if (data) {
                getNode('teamName').input(data[0].TeamName || '')
            }
        })
        .catch(error => {
            console.error("Error fetching team data:", error)
        });
    }
}

useHead
({
    title
    : 'Register | FTC Open Alliance'
})

</script>

<style>

</style>