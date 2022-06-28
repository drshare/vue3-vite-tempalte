import { createApp } from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import 'virtual:windi.css';
import 'element-plus/es/components/message/style/css';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
