import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store'
//Toast样式
import 'vant/es/toast/style'
import 'vant/es/notify/style'
import Carousel from '@/components/Carousel.vue'

createApp(App).use(store).use(router).component('Carousel', Carousel).mount('#app')
