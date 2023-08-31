<template>
    <v-app style="background-color: #faf9f7;">
    <SideBar/>
    <v-container fluid style="padding: 30px 100px 0px 100px;">
        <v-row no-gutters class="ma-5">
            Exam
            <v-spacer />
            <LogoutComponent/>
        </v-row>
            <v-card 
                elevation="0"
                width="100%"
                color="white"
                class="exams pa-5 mb-4"
                v-for="(item, i) in exams"
                :key="i"
            >
                <v-icon color="#778290" class="question mr-4" size="40">mdi-check-outline</v-icon>
                <div>
                    <v-card-title
                        class="pa-0"
                        style="font-weight: 400; font-size: 20px;color: #778290"
                    >
                        {{ item.exam.name }}
                    </v-card-title>
                    <v-card-title 
                        class="pa-0 mt-2"
                        style="font-weight: 200; font-size: 15px;color: #778290"
                    >
                        {{ item.exam.description }}
                    </v-card-title>
                </div>
                <v-spacer/>
                <div class="exam-duration ml-4">
                    {{ item.mark }}
                </div>
            </v-card>
    </v-container>
    </v-app>
</template>

<script src="./PassedExams.js"/>

<style scoped src="./PassedExams.css"/>