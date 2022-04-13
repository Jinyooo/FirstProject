<template>
    <div>
    <v-sheet class="my-5">
        <h2>지금 인기</h2>
        
            <v-slide-group
            multiple 
            show-arrows
            center-active
            >
                <v-slide-item 
                v-for="(pic, i) in popular"
                :key="i"
                >
                
                    <v-hover v-slot="{ hover }"><v-flex xs6 sm6 md6 xl3 >
                    <v-card :class="{ 'imgOpacity' : hover }" width="300" class="mx-2">
                        <v-img
                        :src="pic.src" alt="pic.name" height="100%">
                        <div class="title">
                            <h1>
                                <a
                                :class="{ 'show-title' : hover }">
                                    {{ pic.name }}
                                </a>
                            </h1>
                        </div>
                        </v-img>
                    </v-card> </v-flex>
                </v-hover>
                
                
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>
import store from '@/assets/store.js'
export default {
    name: 'popular-view',
    data: ()=>({
        popular: store.randompic
        
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
@font-face {
    font-family: 'LeferiPoint-SpecialA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-SpecialA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
h2 {
    font-family: GangwonEduPowerExtraBoldA, sans-serif;
}
a {
    font-family: LeferiPoint-SpecialA, sans-serif;
    
}
.v-sheet {
    position: relative;
    margin: 3%;
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