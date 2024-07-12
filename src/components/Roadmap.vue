<template>
  <div class="space-y-4">
    <div v-for="step in steps" :key="step.id" class="p-4 border rounded-md hover:bg-gray-100 flex items-center justify-between">
      <div>
        <a @click="showDrawer(step)" class="text-lg font-semibold text-blue-500 hover:underline cursor-pointer">
          {{ step.title }}
        </a>
      </div>
      <input type="checkbox" :checked="step.completed" @change="toggleCompletion(step.id)" />
    </div>
    <Drawer v-if="selectedStep" :step="selectedStep" @close="closeDrawer" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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

const toggleCompletion = (id) => {
  store.toggleStepCompletion(id)
}

onMounted(() => {
  store.loadProgress()
})
</script>
