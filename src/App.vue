<script setup lang="ts">
import { ref,onMounted } from 'vue';
import 'aframe'

const panoramas = [
  '../public/assets/img/loc-1.jpg',
  '../public/assets/img/loc-2.jpg',
]

const currentIndex = ref(0)
const isTransitioning = ref(false)

const nextPanorama = () => {
  if (isTransitioning.value) return // защита от двойного клика

  isTransitioning.value = true

  // Ждем, пока оверлей полностью проявится (400мс — время анимации CSS)
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % panoramas.length

    // Даем A-Frame время загрузить новую текстуру, потом убираем оверлей
    setTimeout(() => {
      isTransitioning.value = false
    }, 200)
  }, 400)
}

onMounted(() => {
  AFRAME.registerComponent('vue-click', {
    init: function () {
      this.el.addEventListener('click', () => {
        // Через emit передаем событие наружу
        this.el.emit('vue-clicked')
      })
    }
  })
})
</script>

<template>
  <a-scene>
    <!-- Панорама с тестовой картинкой -->
    <a-sky :src="panoramas[currentIndex]"></a-sky>
    <a-plane
      class="clickable"
      position="0 1.6 -3"
      width="1.5"
      height="0.5"
      color="#4CC9F0"
      text="value: ДАЛЕЕ; align: center; color: white; width: 3"
      vue-click
      @vue-clicked="nextPanorama"
    ></a-plane>
    
    <!-- Камера, чтобы мы могли смотреть по сторонам -->
    <a-entity position="0 1.6 0">
      <a-camera>
        <!-- Курсор: маленькая белая точка в центре взгляда -->
        <a-cursor
          material="color: white; shader: flat"
          raycaster="objects: .clickable"
          fuse="false"
        ></a-cursor>
      </a-camera>
    </a-entity>

    
  </a-scene>
   <div 
      class="fade-overlay" 
      :class="{ 'active': isTransitioning }"
    ></div>
</template>

<style scoped>
/* Убираем отступы, чтобы сцена занимала весь экран */
body, html {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.scene-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
}

/* Оверлей поверх всей сцены */
.fade-overlay {
  position: fixed;
  inset: 0;
  background: black;
  opacity: 0;
  pointer-events: none; /* чтобы не блокировал клики, когда прозрачный */
  transition: opacity 0.4s ease-in-out;
  z-index: 10;
}

.fade-overlay.active {
  opacity: 1;
  pointer-events: all; /* блокируем клики во время перехода */
}
</style>
