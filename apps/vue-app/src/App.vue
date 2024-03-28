<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { Sum } from 'util-module';
</script>

<script lang="ts">
const sum = Sum(10, 20);
</script>

<template>
  <div>
    <div class="flex justify-center mb-10">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="/vue.svg" class="logo" alt="Vue logo" />
      </a>
    </div>

    <div class="dotted-box">
      <div class="dotted-box-content">
        <h3 class="bg-blue-600 mb-10 p-5">From util-module</h3>
        <h3>10 + 20 = {{ sum }}</h3>
      </div>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.dotted-box {
  width: 80%;
  max-width: 400px; /* Optional: Set a maximum width for larger screens */
  height: 0;
  padding-bottom: 40%; /* Set the aspect ratio (height as a percentage of the width) */
  border: 2px dotted #000;
  position: relative;
  margin: 16px;
}

.dotted-box-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
}
</style>
