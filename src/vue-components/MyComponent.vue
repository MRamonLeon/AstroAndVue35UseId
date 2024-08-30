<template>
  <div :id="myId">VueComponent with id '{{myId}}'</div>
</template>

<script setup lang="ts">
import { useId } from 'vue';

const props = withDefaults(
defineProps<{
  id?: string;
}>(),
{
  id: '',
});

const myId = useId();
</script>

<style scoped lang="scss">
div {
  background-color: #feffcf;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;
  width: 300px;
  height: 200px;
}
</style>
