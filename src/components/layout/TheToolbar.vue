<template>
    <v-toolbar color="primary" dark>
        <v-toolbar-title>The Monty Hall Problem</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn target="_blank" href="https://github.com/vasisouv/monty-hall-problem" flat icon>
                <v-icon>fab fa-github</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';


    @Component
    export default class TheToolbar extends Vue {

    }
</script>
