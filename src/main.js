import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./Views/HomePage"
import AddProject from "./Views/AddProject"
import EditProject from "./Views/EditProject"


const router = createRouter({
    history : createWebHistory(),
    routes :[
        {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/add",
        name: "AddProject",
        component: AddProject,
    },
    {
        path: "/projects/:id",
        name: "EditProject",
        component: EditProject,
        props: true
    }
   
]
})

createApp(App).use(router).mount('#app')
