<template>
    <div>
        <div class="header-bar">
        <div class="header-logo">
                <img src="https://raw.githubusercontent.com/FTCOpenAlliance/brandkit/main/svg/SHORT-HORIZONTAL.svg"/> 
        </div>
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
    .header-bar {
        margin: 2%;
        padding: 2%;
        background: black;
        border: solid 0.2em #f60;
        display: block;
    }
    .header-nav {
        display: flex;
        justify-content: center;
    }

    .header-button {
        background: #000;
        border: solid #f60;
        box-shadow: inset 0px 0px 10px #f60;
        padding: 1%;
        margin: 1%;
    }
    
    .header-logo {
        padding: 2% 33% 2% 33%;
        display: flex;
    }
</style>