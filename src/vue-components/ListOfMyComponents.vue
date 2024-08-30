<template>
  <div>
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </div>
</template>

<script setup lang="ts">
import MyComponent from "./MyComponent.vue";
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
