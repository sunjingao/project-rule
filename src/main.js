import { createApp } from 'vue';
import App from './views/index.vue';
import { router } from './router/index.js';
import MobjeComponents from 'mo-web-components';
import 'mo-web-components/dist/style.css';
import 'github-markdown-css';
import 'nprogress/nprogress.css';
import '@/css/index.scss';

const app = createApp(App);
app.use(MobjeComponents({
    baseURL: '/',
    getRequestConfig: () => {},
    getResponseAsync: () => {}
})).use(router).mount('#app');
