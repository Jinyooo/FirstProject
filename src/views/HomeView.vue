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
<<<<<<< HEAD
  import store from '@/assets/store.js'
  
=======
>>>>>>> c8927687dc6d5cf856c1ac4e4237606dd316bb02
  export default {
    name: 'home-view',
    methods: {
      
    },
    data : ()=>({
      model : null,
      showname : false,
<<<<<<< HEAD
      destinations : store.destinations      
=======
      destinations : [
        { name: "Osaka", src: "https://cdn.pixabay.com/photo/2020/08/10/01/28/castle-5476737__340.jpg" },
        { name: "Danang", src: "https://cdn.pixabay.com/photo/2020/02/25/14/54/light-4879144__340.jpg" },
        { name: "Paris", src: "https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840__340.jpg" },
        { name: "Guam", src: "https://cdn.pixabay.com/photo/2021/02/18/03/59/beach-6026018__340.jpg" },
        { name: "Bangkok", src: "https://cdn.pixabay.com/photo/2020/08/10/10/09/bangkok-5477405__480.jpg" }

      ] 
      
>>>>>>> c8927687dc6d5cf856c1ac4e4237606dd316bb02
    })
  }
</script>

<style scoped>

<<<<<<< HEAD
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

=======
</style>
>>>>>>> c8927687dc6d5cf856c1ac4e4237606dd316bb02
