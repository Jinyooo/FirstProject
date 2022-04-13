<template>
    <div id="tripa">
        <v-row>
            <v-col v-for="n in 9" :key="n" class="d-flex chid-flex" cols="4">
                <v-img
                :src="`https://picsum.photos/200/300?image=${n*5+10}`" 
                aspect-ratio="1" class="grey lighten-2"
                ></v-img>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'TripA'
}
</script>

<style scoped>
#tripa {
    padding: 3%;
}
</style>