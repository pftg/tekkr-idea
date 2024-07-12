<template>
  <h2 class="text-2xl font-bold mb-4">{{ step.title }}</h2>
  <p class="mb-4">{{ step.description }}</p>
  <h3 class="text-xl font-semibold mb-2">Guidance</h3>
  <ul class="list-disc list-inside mb-4">
    <li v-for="guidance in step.guidance" :key="guidance">{{ guidance }}</li>
  </ul>
  <h3 class="text-xl font-semibold mb-2">Practice and Validation</h3>
  <ul class="list-disc list-inside">
    <li v-for="practice in step.practice" :key="practice">{{ practice }}</li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRoadmapStore } from '@/stores/roadmap'

const route = useRoute()
const store = useRoadmapStore()

const step = computed(() => store.getStepById(route.params.id))
</script>
