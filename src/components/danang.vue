/* eslint-disable */
<template>
    <v-app>
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
            absolute
            >
                
                <v-btn 
                value="favorites" @click="addtoFavorites" 
                >
                    <v-icon 
                    size="40"
                    :color="onList? 'red' : 'default' "
                    >mdi-heart</v-icon>
                </v-btn>

                <!-- 문의하기 버튼 -->
                <v-dialog v-model="inquire" max-width="100%">
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
                                <v-calender ref="calender" v-model="value"></v-calender>
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
            </v-sheet>
        </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer : false,
                
        photos : [
            'https://cdn.pixabay.com/photo/2018/08/17/03/49/great-3612031__480.jpg',
            'https://cdn.pixabay.com/photo/2019/09/10/13/24/bicycle-4466113__340.jpg',
            'https://cdn.pixabay.com/photo/2019/06/21/07/02/hoian-4288741__480.jpg',
            'https://cdn.pixabay.com/photo/2020/09/02/08/52/farm-5537759__480.jpg'
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