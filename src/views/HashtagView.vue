<template>
    <div>
        <v-sheet>
        <h2>실시간 키워드</h2>
        <!-- 해시태그 모음 -->
        <v-slide-group show-arrows>
            <v-slide-item v-for="hashtag in hashtags" :key="hashtag.name">
                <v-btn class="tagnav">
                    <router-link :to=" `/${hashtag.path}` "> {{ hashtag.name }} </router-link>
                </v-btn>
            </v-slide-item>
        </v-slide-group>

        <router-view></router-view>
        </v-sheet>
    </div>
</template>

<script>


export default {
    name: 'HashtagView',
    data: ()=> ({
        hashtags: [
            { name: "#트립에이", path: "tripa" },
            { name: "#도쿄맛집", path: "restaurants" },
            { name: "#여행액티비티", path: "activities" },
            { name: "#인생샷스팟", path: "photogenic" }  
        ]
    }),
};
</script>

<style scoped>
@font-face {
    font-family: 'GangwonEduPowerExtraBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'LeferiPoint-WhiteObliqueA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
h2 {
    font-family: GangwonEduPowerExtraBoldA, sans-serif;

}
.v-slide-group {
    font-family: LeferiPoint-WhiteObliqueA, sans-serif;
}
.v-sheet {
    position: relative;
    margin: 3%;
}
.v-slide-group {
    padding: 4%;
}
.tagnav {
    padding: 3px;
    color: transparent;
    box-shadow: none;
    border-radius: 50px;

}
.tagnav a {
    text-decoration-line: none ;
}

</style>