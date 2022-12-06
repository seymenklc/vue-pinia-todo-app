<template>
  <main class="mx-auto max-w-xl h-full">
    <h1 class="text-2xl m-4 mb-1">Todo App</h1>
    <Input />
    <Todos />
  </main>
</template>

<script setup>
  import Input from './components/Input.vue';
  import Todos from './components/Todos.vue';
</script>