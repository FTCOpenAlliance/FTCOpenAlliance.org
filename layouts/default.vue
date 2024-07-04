<template>
    <div>
        <div class="header-bar">
            <div class="header-nav">
                <div class="header-button">
                    <nuxt-link to="/">Home</nuxt-link>
                </div>
                <div class="header-button">
                    <nuxt-link to="/teams">Teams</nuxt-link>
                </div>
            </div>
        </div>

        <div>
            <slot />
        </div>
    </div>
</template>

<style  scoped>

</style>