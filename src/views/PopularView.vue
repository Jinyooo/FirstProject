<template>
    <div>
    <v-sheet class="mx-auto my-5">
        <h3>지금 인기</h3>
        
            <v-slide-group
            multiple 
            show-arrows
            center-active
            >
                <v-slide-item 
                v-for="(destination, i) in destinations"
                :key="i"
                >
                <v-hover v-slot="{ hover }">
                    <v-card :class="{ 'imgOpacity' : hover }" width="300" class="mx-2">
                        <v-img
                        :src="destination.src" alt="destination.name">
                        <div class="title">
                            <h1>
                                <a @click="$router.push('/guam')"
                                :class="{ 'show-title' : hover }">
                                    {{ destination.name }}
                                </a>
                            </h1>
                        </div>
                        </v-img>
                    </v-card> 
                </v-hover>
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
.v-sheet {
    position: relative;
    left: 2%;  
}
.imgOpacity {
    opacity: 0.6;
    transition: .3s ease-in-out;
}
.title {
    visibility: hidden;
    position: relative;
    bottom: -80%; left: 5%;
}
.show-title {
    visibility: visible;
    color: rgba(255, 255, 255, 1) !important;
    transition: opacity .6s ease-in-out;

}
</style>