<template>
  <div id="app">
    <GButton primary>test</GButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import GButton from '../src/components/Button/GButton.vue';

export default defineComponent({
  name: 'App',
  components: { GButton },
});
</script>

<style lang="scss" src="@/assets/main.scss"></style>
<style>
html, body {
  height: 100vh;
}
</style>
<style lang="scss" scoped>
#app {
  display: flex;
  height: 100%;
  font-family: 'Poppins';

  .content {
    @apply p-8;
  }
}
</style>
