import { createApp } from 'vue';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';

import {
  ElTable,
  ElTableColumn,
  ElInput,
  ElDivider
} from 'element-plus';

const components = [
  ElTable,
  ElTableColumn,
  ElInput,
  ElDivider,
];

const app = createApp(App);

components.forEach(component => {
  app.component(component.name, component)
})

app.mount('#app')
