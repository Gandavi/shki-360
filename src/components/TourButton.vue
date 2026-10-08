<!-- src/components/TourButton.vue -->
<script setup>
const props = defineProps({
  label: { type: String, required: true },
  target: { type: String, required: true },
  position: { type: String, default: '0 1.6 -3' },
  rotation: { type: String, default: '0 0 0' }
})

const emit = defineEmits(['navigate'])
</script>

<template>
  <a-entity
    :position="position"
    :rotation="rotation"
    class="clickable button-group"
    @click="emit('navigate', target)"
  >
    <!-- Фон кнопки: цвет и opacity теперь вместе в material -->
    <a-plane
      width="1.6"
      height="0.5"
      material="color: #1a1a2e; opacity: 0.85; transparent: true; side: double"
      class="clickable"
    ></a-plane>

    <!-- Текст поверх: используем a-text как отдельную сущность, а не атрибут -->
    <a-text
      :value="label"
      align="center"
      color="#4CC9F0"
      width="4"
      position="0 0 0.01"
      class="clickable"
    ></a-text>
  </a-entity>
</template>