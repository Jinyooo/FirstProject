<template>
    <div>
        <h3>지금 인기</h3>
        <v-sheet
        class="mx-5 my-5"
        >
            <v-slide-group
            multiple 
            show-arrows
            center-active
            >
                <v-slide-item 
                v-for="(destination, i) in destinations"
                :key="i"
                >
                <v-img 
                :src="destination.src" alt="destination.name"
                width="300" class="mx-2"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                >
                <div>
                    <h1><a style="color: white; position: 0px 150px; "
                    >
                    {{ destination.name }}</a></h1>
                </div>
                </v-img>
                </v-slide-item>
            </v-slide-group>
            </v-sheet>
    </div>
</template>

<script>
import store from '@/assets/store'
export default {
    name: 'popular-view',
    data: ()=>({
        destinations: store.destinations
        
    }),

}
</script>

<style scoped>
@font-face {
    font-family: 'GangwonEduPowerExtraBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
h3 {
    font-family: GangwonEduPowerExtraBoldA, sans-serif;
}
</style>