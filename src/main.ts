import './style/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { store } from "./store";
import router from "./router";
import asyncComponent from '@/components/asyncComponent/index.vue'

import "virtual:svg-icons-register";

const app = createApp(App);

app.component('asyncComponent', asyncComponent);

app.use(store);
app.use(router);
app.mount('#app')
