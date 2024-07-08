<template>
    <div class="flex items-center justify-center bg-[linear-gradient(to_right,#ff660055_1px,transparent_1px),linear-gradient(to_bottom,#ff660055_1px,#000_1px)] bg-[size:40px_40px] md:px-24 px-12 pt-36 pb-20">
            <div class="items-center text-center backdrop-blur-sm shadow-lg hover:backdrop-blur hover:shadow-xl hover:-translate-y-2 transition-all ease-in-out shadow-orange-600 hover:shadow-orange p-8 md:p-16">
                <slot />
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