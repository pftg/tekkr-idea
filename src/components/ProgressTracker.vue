<template>
  <div class="p-4 border rounded-md">
    <h3 class="text-xl font-semibold mb-2">Your Progress</h3>
    <p class="mb-4">Completed {{ completedStepsCount }} out of {{ totalStepsCount }} steps ({{ completionPercentage }}%)</p>
    <ul class="list-disc list-inside mb-4">
      <li v-for="step in completedSteps" :key="step.id">{{ step.title }}</li>
    </ul>
    <h4 class="text-lg font-medium">Next Step:</h4>
    <p v-if="nextStep">{{ nextStep.title }}</p>
    <p v-else>All steps completed!</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoadmapStore } from '@/stores/roadmap'

const store = useRoadmapStore()

const completedSteps = computed(() => store.completedSteps)
const totalStepsCount = computed(() => store.steps.length)
const completedStepsCount = computed(() => completedSteps.value.length)
const completionPercentage = computed(() => ((completedStepsCount.value / totalStepsCount.value) * 100).toFixed(2))
const nextStep = computed(() => store.nextStep)
</script>
