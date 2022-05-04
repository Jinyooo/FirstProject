<template>
    <v-container>
        <h3>{{ $route.params.user }}</h3>
        <v-btn>나의 정보 수정</v-btn>
        <v-btn>나의 예약목록</v-btn>
        <v-btn>나의 찜 목록</v-btn>
    </v-container>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>