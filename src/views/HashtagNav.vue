<template>
    <div>
        <div class="tagnav" v-for="hashtag in hashtags" :key="hashtag">
            <v-btn>
                <router-link to="`hashtag.path`"> {{ hashtag.name }} </router-link>
            </v-btn>
        </div>
        
    </div>
</template>

<script>
export default {
    data: ()=> ({
        hashtags: [
            { name: "#트립에이", path: "maintag" },
            { name: "#restaurants", path: "restaurants" },
            { name: "activities", path: "activities" }  
        ]
    }),
}
</script>