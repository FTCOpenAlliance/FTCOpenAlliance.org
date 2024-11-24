<template>
    <div class="flex bg-grid border-b-orange border-b-4">
            <div class="flex grow items-center justify-center backdrop-blur-[1px] md:px-24 px-12 pt-56 sm:pt-36 pb-20">
                <div class="flex items-center text-center backdrop-blur-sm shadow-lg hover:backdrop-blur hover:shadow-xl hover:-translate-y-2 transition-all ease-in-out shadow-orange-600 hover:shadow-orange p-8 md:p-16">
                    <slot />
                </div>
            </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>

</style>