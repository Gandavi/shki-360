<!-- src/components/SceneView.vue -->
<script setup>
import TourButton from './TourButton.vue'

const props = defineProps({
  location: { type: Object, required: true }
})

const emit = defineEmits(['navigate'])
</script>

<template>
  <a-scene>
    <!-- Панорама -->
    <a-sky :src="location.src" :rotation="location.skyRotation || '0 0 0'"></a-sky>

    <!-- Камера с курсором -->
    <a-entity position="0 1.6 0">
      <a-camera>
        <a-cursor
          material="color: white; shader: flat"
          raycaster="objects: .clickable"
          fuse="false"
        ></a-cursor>
      </a-camera>
    </a-entity>

    <!-- Кнопки текущей локации -->
    <TourButton
      v-for="(btn, i) in location.buttons"
      :key="`${location.name}-${i}`"
      :label="btn.label"
      :target="btn.target"
      :position="btn.position"
      :rotation="btn.rotation || '0 0 0'"
      @navigate="emit('navigate', $event)"
    />
  </a-scene>
</template>