/* eslint-disable */
<template>
    <v-app> 
        <v-app-bar app flat>
            
            <v-btn icon>
                <v-icon size="40">mdi-chevron-left</v-icon>
            </v-btn >
            <v-spacer></v-spacer>

            <!-- 중앙 로고 -->
            <div class="d-flex align-center">
                <v-img
                alt="TripA Logo"
                class="shrink mr-2"
                contain
                src="../assets/trpAlogo.png"
                transition="scale-transition"
                width="90" @click="$router.push('/tripa')"
                />
            </div>
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon size="40">mdi-magnify</v-icon>
            </v-btn >
            <v-btn icon @click.stop="drawer = !drawer">
                <v-icon size="40">mdi-account-outline</v-icon>
            </v-btn>
        </v-app-bar>

        <!-- 마이 페이지 네비게이션 서랍-->
        <v-navigation-drawer
        v-model="drawer"
        absolute
        right
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

        <!-- 마이페이지 네비게이션 서랍 메뉴 -->
        <v-list>
            <v-list-item>
                
                <v-lsit-item-content>
                    <v-list-item-title>Menu1</v-list-item-title>
                </v-lsit-item-content>
            </v-list-item>
        </v-list>
        
        </v-navigation-drawer>

        <v-main>

            <v-container>

                <!-- 이미지 슬라이드 -->
                <v-carousel :show-arrows-on-hover="true">
                    <v-carousel-item
                        v-for="photo in photos"
                        :key="photo"
                        :src="photo"
                    >
                        <v-sheet
                        >
                        <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                            
                        >
                        </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>

                <!-- 상품설명 페이지 -->
                <v-sheet>

                <div class="my-5">
                    <h2>[부산출발/7박9일]
                        4월 특가
                        
                        <v-btn icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </h2>
                    <h3>₩1,099,000</h3>
                        
                </div>

                <div>
                    <p>설명을 위한 칸입니다.설명을 위한 칸입니다.설명을 위한 칸입니다.
                        
                    </p>
                </div>
            

            <!-- 바닥 네비게이션 < 600px -->
            <v-bottom-navigation 
            absolute=true
            >
                
                <v-btn 
                value="favorites" @click="addtoFavorites" 
                >
                    <v-icon 
                    size="40"
                    v-bind:color=" onList ? 'red' : 'dsdefault' "
                    >mdi-heart</v-icon>
                </v-btn>
                <v-btn value="inquiry">
                    <span>1:1 문의하기</span>
                </v-btn>
                <v-btn value="reserve">
                    <span>예약하기</span>
                </v-btn>
            </v-bottom-navigation>
            </v-sheet>
        </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'guam-component',

    data: () => ({
        drawer : false,
                
        photos : [
            'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg',
            'https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522__480.jpg',
            'https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702__480.jpg'
        ],
        onList : false,
        type : 0
        
    }),
    methods : {
        group : ()=> {
            this.drawer = false
        },
        addtoFavorites : ()=> {
            this.onList = !this.onList;
        }
    },
}
</script>
