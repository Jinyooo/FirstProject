<template>
    <v-container>
        
            <!-- Vuetify를 이용해서 입력창 디자인 -->
            <v-text-field label="아이디" 
                v-model="userid" 
                required></v-text-field>
            
            <v-text-field label="패스워드" 
                required v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" 
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"></v-text-field>
                
            <v-card-actions>
                <v-btn @click="loginUser" class="primary">로그인</v-btn>
                <v-btn @click="$router.push('/')">취소</v-btn>
            </v-card-actions>
        
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            show: false,
            userid: '',
            password: '',
            
        }
    },
    methods: {
        loginUser() {
            this.$emit('login-user', this.userid);
            this.$router.push('/tripa');
        }

    }
}
</script>