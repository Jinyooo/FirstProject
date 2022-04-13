/* eslint-disable */
<template>
    <v-app> 
        <v-app-bar app flat>

            <v-btn icon>
                <v-icon size="40" @click="$router.push('/tripa')">mdi-chevron-left</v-icon>
            </v-btn>
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

            <!-- 검색을 누르면 출력되는 화면 -->
            <v-dialog v-model="search" fullscreen transition="dialog-top-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon size="40" >mdi-magnify</v-icon>
                    </v-btn>
                </template>

                <!-- 취소버튼 -->
                <v-card>
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
            </v-dialog>

            <!-- 네비게이션 서랍-->
            <v-btn icon @click.stop="drawer = !drawer">
                <v-icon size="40">mdi-account-outline</v-icon>
            </v-btn>
        </v-app-bar>

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
                    
                    <v-lsit-item-content v-for="n in 5" :key="n">
                        <v-list-item-title>Menu {{n}}</v-list-item-title>
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
                    <h2>[Title] This is a title.
                        
                        <v-btn icon >
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </h2>
                    <h3>₩1,099,000</h3>
                        
                </div>

                <div>
                    <p>설명을 위한 칸입니다.설명을 위한 칸입니다.설명을 위한 칸입니다.
                        
                    </p>
                </div>
                </v-sheet>
            

            <!-- 바닥 네비게이션 < 600px -->
            <v-bottom-navigation 
            absolute
            >
                <v-btn 
                value="favorites" @click="addtoFavorites" 
                >
                    <v-icon 
                    size="40"
                    :color=" onList ? 'red' : 'default' "
                    >mdi-heart</v-icon>
                </v-btn>
                
                <!-- 문의하기 버튼 -->
                <v-dialog>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on">
                            <span>1:1 문의하기</span>
                        </v-btn>
                    </template>

                <v-card>
                    <v-card-title>1:1 문의하기</v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field label="제목"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea  outlined rows="6"></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                        color="grey darken-1"
                        text
                        @click="inquire = false"
                        >닫기</v-btn>
                        <v-btn
                        color="blue darken-1"
                        text
                        @click="inquire = false"
                        >저장하기</v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>

                <!-- 예약하기 버튼 -->
                <v-dialog v-model="reserve" max-width="100%">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn value="reserve" color="default" v-bind="attrs" v-on="on">
                            <span>예약하기</span>
                        </v-btn>
                    </template>

                    <v-card>
                        <v-card-title>예약하기</v-card-title>
                            <v-card-text>
                                <v-container>
                                    
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                color="grey darken-1"
                                text
                                @click="reserve = false"
                                >닫기</v-btn>
                                <v-btn
                                color="blue darken-1"
                                text
                                @click="reserve = false"
                                >다음</v-btn>
                            </v-card-actions>
                        
                        </v-card>
                </v-dialog>
                </v-bottom-navigation>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer : false,
                
        photos : [
            'https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075__480.jpg',
            'https://cdn.pixabay.com/photo/2017/07/13/03/15/paris-2499022__340.jpg',
            'https://cdn.pixabay.com/photo/2020/07/23/21/34/arc-de-triomphe-5432392__480.jpg',
            'https://cdn.pixabay.com/photo/2019/12/11/14/49/notredame-4688554__480.jpg'
        ],
        onList : false,
        type : 0,
        search : false,
        inquire: false,
        reserve : false,
        filtericons: [ "mdi-airplane", "mdi-bed", "mdi-car-side", "mdi-ticket-percent" ],
        value: '',
        
    }),
    methods : {
        addtoFavorites : function() {
            this.onList = !this.onList;
        },
        submitSearch: function() {
        this.search = false;
        this.$router.push('/danang');
        },
    },
}
</script>

<style scoped>
/deep/ .v-text-field { 
    width: 75%;
    margin-left: 5%;
    display: inline-flex; }
/deep/ #searchMagnify {
    margin-left: 3%;
    display: inline-flex;
}
</style>