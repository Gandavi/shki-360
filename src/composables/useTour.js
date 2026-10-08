// src/composables/useTour.js
import { ref, computed } from 'vue'
import { tour, startLocation } from '../data/tour.js'

export function useTour() {
  const currentKey = ref(startLocation)
  const isTransitioning = ref(false)

  const currentLocation = computed(() => tour[currentKey.value])

  function goTo(targetKey) {
    if (isTransitioning.value) return
    if (!tour[targetKey]) {
      console.warn(`Локация "${targetKey}" не найдена в туре`)
      return
    }
    if (targetKey === currentKey.value) return

    isTransitioning.value = true

    // 1. Затемняем экран
    setTimeout(() => {
      // 2. Меняем панораму (под черным оверлеем)
      currentKey.value = targetKey

      // 3. Ждем загрузки текстуры и проявляем
      setTimeout(() => {
        isTransitioning.value = false
      }, 200)
    }, 400)
  }

  return {
    currentKey,
    currentLocation,
    isTransitioning,
    goTo
  }
}