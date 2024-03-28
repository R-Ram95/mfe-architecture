import { defineCustomElement as VueDefineCustomElement, h, createApp, getCurrentInstance } from 'vue'
import style from "./style.css?inline";
import { createWebComponent } from 'vue-web-component-wrapper'
import App from "./App.vue";

createWebComponent({
  rootComponent: App,
  elementName: 'vue-app',
  cssFrameworkStyles: 
  style,
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
})
