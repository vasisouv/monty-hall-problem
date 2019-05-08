<template>
    <div>
        <TheInfoPanel />
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
                    <Game />
                </v-card>
            </v-tab-item>
            <v-tab-item>
                <v-card flat>
                    <Simulations />
                </v-card>
            </v-tab-item>
        </v-tabs>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import TheInfoPanel from '@/components/TheInfoPanel.vue';
    import Game from '@/components/Game.vue';
    import Simulations from '@/components/Simulations.vue';

    @Component({
       components: { TheInfoPanel, Game, Simulations },
    })
    export default class TheMontyHallProblem extends Vue {

    }
</script>
