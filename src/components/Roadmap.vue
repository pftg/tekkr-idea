<template>
  <div class="space-y-4">
    <div v-for="step in steps" :key="step.id" class="p-4 border rounded-md hover:bg-gray-100">
      <router-link :to="`/step/${step.id}`" class="text-lg font-semibold text-blue-500 hover:underline">
        {{ step.title }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoadmapStore } from '@/stores/roadmap'

const store = useRoadmapStore()
const steps = store.steps
</script>
