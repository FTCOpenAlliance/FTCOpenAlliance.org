<template>
    <UApp>
        <div>
            <PageTitle>
                <h1 class="text-6xl lg:text-8xl text-orange font-bold">
                    Registration
                </h1>
            </PageTitle>
            
            <div class="flex flex-col p-10 items-center bg-dots">
                
                <div class="w-[50vw]">
                    <FormKit
                    type="form"
                    :config="{ classes: {
                        wrapper: 'flex flex-col',
                        input: 'flex border border-orange bg-black p-2 mb-6 w-full',
                        message: 'text-red py-4',
                        label: 'mb-2',
                    } }"
                    submit-label="Register/Update"
                    @submit="formCallback"
                    >
                    <div class="flex flex-col justify-center backdrop-blur py-6 px-10 mb-6 shadow-lg shadow-orange-800 border border-orange">
                        <UDivider class="text-xl text-orange font-bold mb-4">Team Identification</UDivider>
                        <p class="text-orange-300 mb-6"> Your team data may be used to fetch additional information through external APIs. </p>
                        <div class="flex flex-row items-end">
                            <div class="grow mr-14">
                                <FormKit
                                type="number"
                                number="integer"
                                :min="1"
                                :max="99999"
                                :step="1"
                                name="teamNumber"
                                label="Team Number"
                                validation="required"
                                />
                            </div>
                            
                            <UButton @click="autofillTeamData" icon="i-mdi-database-refresh" class="my-6 h-11 rounded-none">Autofill</UButton>
                        </div>
                        <FormKit
                        type="text"
                        name="teamName"
                        label="Team Name"
                        validation="required"
                        />
                    </div>
                    <div class="flex flex-col justify-center backdrop-blur py-6 px-10 mb-6 shadow-lg shadow-orange-800 border border-orange">
                        <UDivider class="text-xl text-orange font-bold mb-4">Hosted Links</UDivider>
                        <ul class="list-disc list-inside mb-6 text-orange-300">
                            <li>Any links provided must be accessible publicly, without need for an account.</li>
                            <li>You must create a Chief Delphi build thread for your team before submitting and update it regularly.</li>
                            <li>Your CAD must be available through Onshape. Either use it to design your robot or upload versions from your other CAD software regularly.</li>
                            <li>Photo albums may be hosted on platforms such as Google Photos, Flickr, Imgur, and Smugmug.</li>
                            <li>Videos may be hosted on YouTube, Vimeo, or similar platforms. If you wish to add multiple, link a playlist.</li>
                        </ul>
                        
                        <FormKit
                        type="url"
                        name="buildThread"
                        label="Chief Delphi Build Thread"
                        validation="required|url"
                        />
                    </div>
                </FormKit>
                
            </div>
        </div>
    </div>
</UApp>
</template>

<script setup>


function formCallback(formData) {
    console.log("FORM SUBMITTED")
    console.log(formData);
}

function autofillTeamData() {
    console.log("Autofill team data triggered");
}

</script>

<style>

</style>