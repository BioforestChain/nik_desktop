import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createI18n } from 'vue-i18n';

// 导入语言文件
import en from './locales/en.json';
import zh from './locales/zh.json';


const lang = navigator.language.toLowerCase();
// 创建 i18n 实例
const i18n = createI18n({
    locale: lang, // 设置默认语言
    messages: {
        en,
        zh
    }
});

const app = createApp(App);
app.use(i18n);
app.mount('#app');
