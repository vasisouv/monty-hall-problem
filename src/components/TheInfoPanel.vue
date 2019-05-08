<template>
    <v-container>
        <p>This web application allows the user to simulate the Monty Hall Problem by either playing individual games or
            running multiple consecutive automatic simulations of the problem and viewing the results.
        </p>
        <v-expansion-panel expand>
            <v-expansion-panel-content>
                <template v-slot:header>
                    <div>Learn more</div>
                </template>
                <v-card>
                    <v-container>
                        <v-layout row wrap>
                            <v-flex lg3 md4 sm12>
                                <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Monty_open_door.svg/1280px-Monty_open_door.svg.png"
                                       class="mr-4"
                                       alt="The monty hall problem image"></v-img>
                            </v-flex>
                            <v-flex lg9 md8 sm12>
                                <p>The Monty Hall problem is a brain teaser, in the form of a probability
                                    puzzle, loosely based
                                    on the American television game show Let's Make a Deal and named after its original
                                    host,
                                    Monty Hall.
                                    The problem is the following: Suppose you're on a game show, and you're given the
                                    choice of
                                    three doors:
                                    Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and
                                    the
                                    host, who knows
                                    what's behind the doors, opens another door, say No. 3, which has a goat. He then
                                    says to
                                    you,
                                    "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?
                                </p>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-container>
</template>
<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component
  export default class TheInfoPanel extends Vue {

  }
</script>
