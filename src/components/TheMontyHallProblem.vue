<template>
    <div>
        <TheIntroText />

        <v-tabs
                color="blue"
                dark
                slider-color="cyan">
            <v-tab ripple>
                Play the game
            </v-tab>
            <v-tab ripple>
                Run simulations
            </v-tab>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>Text</v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <v-card-text>Text 2</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import TheIntroText from '@/components/TheIntroText.vue';

    @Component({
       components: { TheIntroText },
    })
    export default class TheMontyHallProblem extends Vue {

    }
</script>
