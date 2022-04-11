<template>
    <div>
        <!-- 해시태그 모음 -->
        <v-slide-group>
            <v-slide-item v-for="hashtag in hashtags" :key="hashtag.name">
                <v-btn class="tagnav">
                    <router-link to="/"> {{ hashtag.name }} </router-link>
                </v-btn>
            </v-slide-item>
        </v-slide-group>
        


        <router-view name="restaurants"></router-view>
        <router-view name="activities"></router-view>>
    </div>
</template>

<script>


export default {
    data: ()=> ({
        hashtags: [
            { name: "#tripa", path: "maintag" },
            { name: "#restaurants", path: "restaurants" },
            { name: "#activities", path: "activities" }  
        ]
    }),
};
</script>

<style>

.tagnav {
    margin: 3px;
    color: transparent;
    box-shadow: none;
    border-radius: 50px;

}
.tagnav a {
    text-decoration-line: none ;
}
</style>