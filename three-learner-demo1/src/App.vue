<script lang="ts">
  import {defineComponent, onMounted, ref} from "vue";
  import { TEngine } from "./assets/ts/TEngine";
  import { basicObjectList } from "./assets/ts/TBasicObject";

  export default defineComponent({
    setup() {
      const threeTarget = ref(null)

      onMounted(() => {
        const TE = new TEngine(threeTarget.value)
        TE.addObject(...basicObjectList)
      })

      return {
        threeTarget
      }
    },
  })
</script>

<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<style>
#app, .three-canvas {
  @apply w-full h-full;
}
</style>
