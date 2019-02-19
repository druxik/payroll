<template>
    <div id="app">
        {{count}}
        <Main></Main>
    </div>
</template>

<script>
    import Main from "./Main.vue"
    import {mapState} from "vuex";
    export default {
        name : 'app',
        components : {
            Main,
        },
        data() {
            return {}
        },
        computed : {
            ...mapState([
                'count'
            ]),
        }
    }
</script>
<style></style>
