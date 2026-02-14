<template>
  <div>
      <PageTitle title="Resources" />

      <div class="bg-dots flex flex-col gap-4 p-8 items-center w-full *:max-w-[80rem] *:w-full">
        <PageBlock v-for="item in items" :key="item.title" :style="`
            background: linear-gradient(to right, #000000bb, black), url(${item.image});
            background-size: cover;
            background-position: center;
        `">
            <div class="flex flex-col md:flex-row justify-between md:items-center gap-8">
                <div class="flex items-center gap-4">
                    <UIcon :name="item.icon" class="hidden md:block text-primary-400 min-w-12 size-12" />
                    <div class="flex flex-col">
                        <h2 class="text-primary-200 text-2xl md:text-3xl font-bold">{{ item.title }}</h2>
                        <p class="text-lg">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
                <UButton class="w-full md:w-auto md:min-w-48" :to="item.link" :target="item.link.startsWith('/') ? '_self' : '_blank'" size="xl">{{ item.linklabel }}</UButton>
            </div>
        </PageBlock>
      </div>
  </div>
</template>

<script setup>

    const items = [
        {
            icon: "i-heroicons-paint-brush",
            title: "Brand Kit",
            description: "Download the official logo and brand files for the Open Alliance. Available in PNG and SVG format.",
            image: "/images/brandbts.png",
            linklabel: "Browse",
            link: "https://brand.theopenalliance.org"
        },
        {
            icon: "i-heroicons-photo",
            title: "Advertisement Designer",
            description: "Create stunning advertisements tailored to your team using pre-made templates for various media platforms.",
            image: "/images/templatebts.png",
            linklabel: "Create",
            link: "/resources/templates"
        },
        {
            icon: "i-heroicons-shopping-cart",
            title: "Merchandise (Coming Soon!)",
            description: "Purchase official Open Alliance merchandise, and support our platform!",
            image: "",
            linklabel: "Shop",
            link: ""
        }
    ]

</script>