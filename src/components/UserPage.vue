<template>
    <v-main>
        <v-container>
            <h3>{{ $route.params.user }}님</h3>
            <v-btn @click="logout">로그아웃</v-btn>
        </v-container>
    </v-main>
</template>

<script>
export default {
    data: () => ({
        login : true,
        user : this.$route.params.user
    }),
    methods : {
        logout: function() {
            this.user = '',
            this.login = false;
            this.$router.push('/login');
        }
    }
}
</script>