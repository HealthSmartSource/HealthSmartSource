<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { Button } from '@/components/ui/button'
</script>


<template>
  <div>
    <Button>shadcn button</Button>
  </div>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="../routes/agenda/" target="_blank">
     Contact
    </a>
    <a href="/healthsmartsource/routes/agenda/">
      Agenda
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
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
</style>
