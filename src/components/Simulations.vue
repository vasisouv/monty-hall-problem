<template>
    <div>
        <v-tabs
                v-model="active"
                color="cyan"
                dark
                slider-color="yellow"
        >
            <v-tab
                    v-for="n in 3"
                    :key="n"
                    ripple
            >
                Item {{ n }}

            </v-tab>
            <v-tab-item
                    v-for="n in 3"
                    :key="n"
            >
                <v-card flat>
                    <v-card-text>{{ text }}</v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs>

        <div class="text-xs-center mt-3">
            <v-btn @click="next">next tab</v-btn>
        </div>
    </div>
</template>
