<template>
  <m-menu
      class="menu"
      @select="handleSelect"
      :items="menuData"
      mode="inline"
      :openKeys="openedKeys"
      :selectedKeys="selectedKeys"
  >
  </m-menu>
</template>

<script>

import {defineComponent, onMounted, reactive, ref, watch} from 'vue';
import { cloneDeep } from 'lodash-es'
import {asyncRoutes} from '@/router/index';

import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'index',
  setup() {

    const router = useRouter()
    const route = useRoute()

    const selectedKeys = ref([])
    const openedKeys = ref([]);
    const menuData = ref([]);

    function init() {
      const routesClone = cloneDeep(asyncRoutes)

      routesClone.forEach(
          (item, index) => {
            const parentItem = {
              key: item.path,
              label: item.title,
              children: item.children,
            }
            openedKeys.value.push(item.path);
            item.children.forEach(
                (child, childIndex) => {
                  item.children[childIndex] = {
                    key: child.path,
                    label: child.title,
                  }
                }
            );

            routesClone[index] = parentItem
          }
      );

      menuData.value = routesClone
    }

    const handleSelect = (a) => {
      router.push(a.key)
    };

    watch(
        route,
        () => {
          selectedKeys.value = [route.path];
        },
        {
          deep: true
        }
    )

    init();

    return {
      selectedKeys,
      openedKeys,
      menuData,
      handleSelect
    };
  }
});
</script>

<style lang="scss" scoped>
.menu {
  width: 200px;
  height: 100%;
  overflow: hidden auto;
}
</style>
