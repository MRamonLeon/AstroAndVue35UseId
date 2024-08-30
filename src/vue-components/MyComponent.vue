<template>
  <div :id="id">The div with id #{id} and text: {text}</div>
</template>

<script setup lang="ts">
import { useId } from '@vue';

const props = withDefaults(
defineProps<{
  id: string;
  text: string;
}>(),
{
  id: useId();
  text: '';
}
);
</script>

<style scoped lang="scss">
div {
  border: solid 1px red;
}
</style>
