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
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title >Trip A</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>

      <!-- 검색 -->
      <v-btn icon>
          <v-icon size="40">mdi-magnify</v-icon>
      </v-btn >
      
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
              <v-lsit-item-content>
                  <v-list-item-title 
                  v-for="n in 5" :key="n"
                  class="ma-3"> Menu {{n}}</v-list-item-title>
              </v-lsit-item-content>
          </v-list-item>
      </v-list>
      </v-navigation-drawer>

      <!-- 라우터 뷰 -->
      <router-view/>
    </v-main>
    <footer>
      <p>footer</p>
      <p>Copyright All Rights Reserved &copy; 2022 </p>
    </footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer : false,
  }),
};
</script>
