<template>
  <v-app>

    <!-- 상단 바 -->
    <v-app-bar
      app
      flat
      class="transparent"
    >
      <v-btn icon @click.stop="drawer = !drawer">
          <v-icon size="40">mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <!-- 중앙 로고 -->
      <div class="d-flex align-center">
        <v-img
          alt="TripA Logo"
          class="shrink mr-2"
          contain
          src="./assets/trpAlogo.png"
          transition="scale-transition"
          width="90" @click="$router.push('/tripa')"
        />
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
      <v-toolbar flat color="#60CE9C" dark extended extension-height="20">
          <v-list nav dense >
              <v-list-item >
                  <v-list-item-avatar class="mt-3">
                          <v-img src="https://cdn.pixabay.com/photo/2021/02/19/13/13/travel-6030190__480.png"></v-img>
                      </v-list-item-avatar>

                  <v-list-item-content id="user_toolbar">
                      <div v-if="login">
                        <v-list-item-title class="font-weight-bold text-subtitle-1 mt-3">
                          <a @click="$router.push(`/user/${user}`)">마이페이지</a>
                        </v-list-item-title>
                        <v-list-item-title >
                          {{user}}님 환영합니다
                        </v-list-item-title>
                      </div>
                      <v-list-item-title 
                        v-else
                        @click="$router.push('/login')"><a href="#">
                          로그인해주세요</a>
                      </v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
          </v-list>
      </v-toolbar>
      <v-divider></v-divider>

      <!-- 네비게이션 서랍 메뉴 -->
      <v-list>
          <v-list-item>
              <v-list-item-content id="drawer-menu">
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

      <router-view @login-user="showLogin" /> <!-- 이름 없는 라우터를 새 페이지로 연결시키기 위해서 이름 없는 router-view 를 넣어줘야함 -->


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
    login : false,
    user : '',
    showname : false,
    destinations : store.destinations,   
    search: false,
    filtericons: [ "mdi-airplane", "mdi-bed", "mdi-car-side", "mdi-ticket-percent" ],
  }),
  methods: {
    submitSearch: function() {
      this.search = false;
      this.$router.go('/tripa');
      
    },
    showLogin: function(user) {
      this.user = user;
      this.login = true;
    },
    
  }
};
</script>

<style scoped>
#user_toolbar a {
  color: whitesmoke;
  text-decoration: none;
}

/deep/  .v-text-field { 
  width: 75%;
  margin-left: 5%;
  display: inline-flex; }
/deep/ #searchMagnify {
  margin-left: 3%;
  display: inline-flex;
}
</style>

