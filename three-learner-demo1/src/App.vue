<script lang="ts">
  import {defineComponent, onMounted, ref} from "vue";
  import { TEngine } from "./assets/ts/TEngine";
  import { basicObjectList } from "./assets/ts/TBasicObject";
  import { TCanvasTextureEditor } from "./assets/ts/TCanvasTextureEditor";

  export default defineComponent({
    setup() {
      const threeTarget = ref(null)

      onMounted(() => {
        const TE = new TEngine(threeTarget.value)
        TE.addObject(...basicObjectList)

        const testCanvas = new TCanvasTextureEditor()
        testCanvas.draw(ctx => {
          ctx.fillStyle = 'blue' // 设置填充颜色为 blue 可以共用

          ctx.beginPath() // 开始路径
          ctx.rect(10, 10, 200, 200) // 画一个矩形路径
          ctx.strokeStyle = 'red' // 设置笔的描边的颜色
          ctx.stroke() // 通知笔进行描边
          ctx.fill() // 填充
          ctx.closePath() // 关闭路径

          ctx.translate(100, 100)
          ctx.beginPath() // 开始路径
          ctx.rect(10, 10, 200, 200) // 画一个矩形路径
          ctx.fill() // 填充
          ctx.closePath() // 关闭路径
        }).preview()
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
