<script>
export default {
    data: () => ({
        selectItem: 10,
        drawer: null,
        items: [
            { icon: 'mdi-view-dashboard-outline', text: 'Dashboard', to: '/home' },
            { icon: 'mdi-ab-testing', text: 'Exams', to: '/exams' },
            { icon: 'mdi-alpha-p-box-outline', text: 'Passed', to: '/passed-exams' },
        ]

    }),
    props: {},
    components: {
    },
}
</script>

<template>
    <v-navigation-drawer v-model="drawer" app color="white" width="250" style="box-shadow: 0 40px 40px 0 rgba(0, 0, 0, 0.2)">
        <v-list flat class="mt-5">
            <v-list-item-group v-model="selectItem" mandatory>
                <v-list-item 
                    v-for="(item, i) in items" 
                    :key="i"
                    v-slot="{active}"
                    :ripple="false"
                    :to="item.to"
                >
                    <v-list-item-icon>
                        <div :class="active ? 'a' : ''"></div>
                        <v-icon
                            class="ml-3"
                            :color="active ? '#7FBA5E' : '#778290'"
                        >
                            {{ item.icon }}
                        </v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="ml-n3">
                        <v-list-item-title
                            :style="active ? 'color: #7FBA5E' : 'color: #778290'"
                        >
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>

</template>



<style scoped>

.a {
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translate(-50%, -50%);
    height: 18px;
    width: 12px;
    border-radius: 0px 150px 150px 0px;
    background-color: #7FBA5E
}

.border_img {
    border: 1px solid #778290;
}

.border {
    text-decoration: none;
}

.v-list-item-group .v-list-item--active {
    color: white !important;
}

.theme-light.v-list-item--active .v-list-item__subtitle, .theme--light.v-list-item
.v-list-item_action-text {
    color: white !important;
}
</style>