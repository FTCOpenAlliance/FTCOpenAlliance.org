<template>
    <div>
        <PageTitle>
            <div class="flex gap-16 justify-between items-center">
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
                        <UInput v-model="bgImage" type="file"/>
                    </div>
                </div>
            </div>
        </PageTitle>
        <div class="flex flex-col p-16 gap-8 bg-dots">
            <div class="w-full border-4 border-primary aspect-video">
                <img :src="bgImage" class="object-cover w-full h-full" />
            </div>
        </div>
    </div>
</template>

<script setup>

const program = useState("program")
const teamNumber = ref()
const bgImage = ref()

</script>