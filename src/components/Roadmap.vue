<template>
  <div class="space-y-4">
    <div v-for="step in steps" :key="step.id" class="p-4 border rounded-md hover:bg-gray-100">
      <a @click="showDrawer(step)" class="text-lg font-semibold text-blue-500 hover:underline cursor-pointer">
        {{ step.title }}
      </a>
    </div>
    <Drawer v-if="selectedStep" :step="selectedStep" @close="closeDrawer" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoadmapStore } from '@/stores/roadmap'
import Drawer from '@/components/Drawer.vue'

const store = useRoadmapStore()
const steps = store.steps
const selectedStep = ref(null)

const showDrawer = (step) => {
  selectedStep.value = step
}

const closeDrawer = () => {
  selectedStep.value = null
}
</script>
