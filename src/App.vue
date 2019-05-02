<template>
    <v-app>
        <v-container fluid>
            <v-layout align-center justify-center>
                <v-flex xs12 sm9 md8>
                    <TheToolbar></TheToolbar>
                    <v-card>
                        <TheMontyHallProblem></TheMontyHallProblem>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-footer app></v-footer>
        </v-container>
    </v-app>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import TheToolbar from '@/components/layout/TheToolbar.vue';
    import TheMontyHallProblem from '@/components/TheMontyHallProblem.vue';

    @Component({
        components: {  TheToolbar, TheMontyHallProblem },
    })
    export default class App extends Vue {
    }
</script>


