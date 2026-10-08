<!-- src/App.vue -->
<script setup>
import { onMounted } from 'vue'
import 'aframe'
import SceneView from './components/SceneView.vue'
import { useTour } from './composables/useTour.js'

const { currentLocation, isTransitioning, goTo } = useTour()

onMounted(() => {
  // Регистрируем компонент, который прокидывает A-Frame click в Vue
  AFRAME.registerComponent('vue-click', {
    init: function () {
      this.el.addEventListener('click', () => {
        this.el.emit('vue-clicked')
      })
    }
  })
})
</script>

<template>
  <div class="scene-wrapper">
    <SceneView
      :location="currentLocation"
      @navigate="goTo"
    />

    <!-- Плавный переход -->
    <div class="fade-overlay" :class="{ active: isTransitioning }"></div>

    <!-- Подпись локации (обычный HTML поверх 3D) -->
    <div class="location-label">{{ currentLocation.name }}</div>
  </div>
</template>

<style>
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

.fade-overlay {
  position: fixed;
  inset: 0;
  background: black;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease-in-out;
  z-index: 10;
}
.fade-overlay.active {
  opacity: 1;
  pointer-events: all;
}

.location-label {
  position: fixed;
  top: 20px;
  left: 20px;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.6);
  color: #4CC9F0;
  font-family: system-ui, sans-serif;
  font-size: 14px;
  border-radius: 6px;
  z-index: 5;
  pointer-events: none;
}
</style>