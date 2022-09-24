import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import BaseCard from '../src/components/layout/BaseCard.vue'
import BaseButton from '../src/components/layout/BaseButton.vue'
import BaseBadge     from "@/components/layout/BaseBadge";


createApp(App)
    .component('base-card', BaseCard)
    .component('base-button', BaseButton)
    .component('base-badge', BaseBadge)
    .use(store)
    .use(router)
    .mount('#app')
