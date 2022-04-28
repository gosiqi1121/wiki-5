import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as Icons from '@ant-design/icons-vue';
import axios from "axios";
import {Tool} from "@/util/tool";


axios.defaults.baseURL = process.env.VUE_APP_SERVER;

//有关配置的代码
const app = createApp(App);
app.use(store).use(router).use(Antd).mount('#app');

//global icons
const icons: any = Icons;
for (const i in icons) {
    app.component(i, icons[i]);
}

/**
 * axios拦截器
 */
axios.interceptors.request.use(function (config) {
    console.log('request：', config);

    const token = store.state.user.token;
    if (Tool.isNotEmpty(token)) {
        config.headers.token = token;
        console.log("请求headers增加token:", token);
    }

    return config;
}, error => {
    return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
    console.log('return res：', response);
    return response;
}, error => {
    console.log('return res：', error);
    return Promise.reject(error);
});

console.log('environment:',process.env.NODE_ENV);