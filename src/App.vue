<template>
  <v-app>

    <!-- 상단 바 -->
    <v-app-bar
      
      flat
      class="transparent"
    >
      <v-btn icon @click.stop="drawer = !drawer">
          <v-icon size="40">mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <!-- 중앙 로고 -->
      <div class="d-flex align-center">
        <!-- <v-img
          alt="TripA Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40" @click="$router.push('/')"
        /> -->
        <v-toolbar-title 
        >Trip A</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>

      <!-- 검색을 누르면 출력되는 화면 -->
      <v-dialog v-model="search" fullscreen transition="dialog-top-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
              <v-icon size="40" >mdi-magnify</v-icon>
          </v-btn>
        </template>

        <v-card>
          
          <!-- 취소버튼 -->
          
            <v-btn class="top right"
              text
              @click="submitSearch"
            ><v-icon>mdi-close</v-icon> 
            </v-btn>

          
          <!-- 필터 아이콘 -->
          <v-sheet class="mx-auto" max-width="50%">
            <v-slide-group>
              <v-slide-item 
              v-slot="{ active, toggle }" 
              v-for="icon in filtericons"
              :key="icon" 
              class="justify-center">
                <v-btn
                  class="ma-2"
                  :input-value="active"
                  active-class="primary white--text"
                  @click="toggle"
                  outlined
                ><v-icon >{{ icon }}</v-icon>
                </v-btn>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          
          
          <!-- 검색어를 입력하세요 -->
          <v-text-field
          label="검색어를 입력하세요" 
          class="shrink mx-20"
          >
          </v-text-field>

            <v-btn id="searchMagnify" @click="submitSearch">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

        </v-card>

          
          
<!--          <v-btn icon @click="submitSearch"> 
            <v-icon>mdi-magnify</v-icon> 
          </v-btn>
-->         
      </v-dialog>
      
    </v-app-bar>

    <v-main>

      <!-- 네비게이션 서랍-->
      <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      >
      <v-toolbar flat>
          <v-list nav dense>
              <v-list-item>
                  <v-list-item-avatar>
                          <v-icon class="grey white--text">mdi-account</v-icon>
                      </v-list-item-avatar>

                  <v-list-item-content>
                      <v-list-item-title><a href="#">마이페이지</a></v-list-item-title>
                      <v-list-item-subtitle ><a href="#">로그인</a></v-list-item-subtitle>
                  </v-list-item-content>
              </v-list-item>
          </v-list>
      </v-toolbar>
      <v-divider></v-divider>

      <!-- 네비게이션 서랍 메뉴 -->
      <v-list>
          <v-list-item>
              <v-list-item-content>
                  <v-list-item-title 
                  v-for="n in 5" :key="n"
                  class="ma-3"> Menu {{n}}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
      </v-list>
      </v-navigation-drawer>

      <!-- 라우터 뷰 -->
      <!-- named router -->
      <router-view name="leaveIm"/>
      <router-view name="popular"/>
      <router-view name="hashtag"/>
      <!-- 해시태그 게시물 보이는 곳 -->

      <router-view/> <!-- 이름 없는 라우터를 새 페이지로 연결시키기 위해서 이름 없는 router-view 를 넣어줘야함 -->


    </v-main>

    
  </v-app>
</template>

<script>
import store from '@/assets/store.js'


export default {
  name: 'App',
  data: () => ({
    drawer : false,
    model : null,
    showname : false,
    destinations : store.destinations,   
    search: false,
    filtericons: [ "mdi-airplane", "mdi-bed", "mdi-car-side", "mdi-ticket-percent" ],
  }),
  methods: {
    submitSearch: function() {
      this.search = false;
      this.$router.push('/');
      
    }
  }
};
</script>

<style scoped>
/deep/  .v-text-field { 
  width: 75%;
  margin-left: 5%;
  display: inline-flex; }
/deep/ #searchMagnify {
  margin-left: 3%;
  display: inline-flex;
}
</style>

