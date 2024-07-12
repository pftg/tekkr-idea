<template>
  <div class="container mx-auto px-4 py-8">
    <button @click="goBack" class="mb-4 text-blue-500 hover:underline">← Back to Roadmap</button>
    <div v-if="step">
      <StepDetail :step="step" />
    </div>
    <div v-else>
      <p>Loading step details...</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRoadmapStore } from '@/stores/roadmap'
import StepDetail from '@/components/StepDetail.vue'

const route = useRoute()
const router = useRouter()
const store = useRoadmapStore()

const stepId = computed(() => parseInt(route.params.id))
const step = computed(() => store.getStepById(stepId.value))

const goBack = () => {
  router.push('/')
}
</script>
