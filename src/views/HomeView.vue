<template>
  <v-container>
    <h3>바로 출발</h3>    
    <!-- -->
    <v-sheet
    class="mx-auto my-5"
    
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

    <h3>지금 인기</h3>

  </v-container>
</template>

<script>
  export default {
    name: 'home-view',
    methods: {
      
    },
    data : ()=>({
      model : null,
      showname : false,
      destinations : [
        { name: "Osaka", src: "https://cdn.pixabay.com/photo/2020/08/10/01/28/castle-5476737__340.jpg" },
        { name: "Danang", src: "https://cdn.pixabay.com/photo/2020/02/25/14/54/light-4879144__340.jpg" },
        { name: "Paris", src: "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840__340.jpg" },
        { name: "Guam", src: "https://cdn.pixabay.com/photo/2021/02/18/03/59/beach-6026018__340.jpg" },
        { name: "Bangkok", src: "https://cdn.pixabay.com/photo/2020/08/10/10/09/bangkok-5477405__480.jpg" }

      ] 
      
    })
  }
</script>

<style scoped>

</style>
