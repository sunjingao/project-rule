<template>
  <div class="container">
    <leftMenu></leftMenu>
    <div class="content">
      <router-view class="markdown-body" />
    </div>
  </div>
</template>

<script>
import leftMenu from './comps/menu/index.vue';

export default {
  name: 'index',
  components: {
    leftMenu
  },
  setup() {
    return {
    };
  }
};
</script>

<style scoped lang="scss" src="./css/index.scss"></style>
