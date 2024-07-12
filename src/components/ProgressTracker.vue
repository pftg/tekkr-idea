<template>
  <div class="p-4 border rounded-md">
    <h3 class="text-xl font-semibold mb-2">Your Progress</h3>
    <p class="mb-4">
      Completed {{ completedTopicsCount }} out of {{ totalTopicsCount }} topics ({{ completionPercentage }}%)
    </p>
    <ul class="list-disc list-inside mb-4">
      <li v-for="topic in completedTopics" :key="topic.id">{{ topic.title }}</li>
    </ul>
    <h4 class="text-lg font-medium">Next Topic:</h4>
    <p v-if="nextTopic">{{ nextTopic.title }}</p>
    <p v-else>All topics completed!</p>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoadmapStore } from "@/stores/roadmap"

const store = useRoadmapStore()

const completedTopics = computed(() => store.completedTopics)
const totalTopicsCount = computed(() => store.topics.length)
const completedTopicsCount = computed(() => completedTopics.value.length)
const completionPercentage = computed(() => ((completedTopicsCount.value / totalTopicsCount.value) * 100).toFixed(2))
const nextTopic = computed(() => store.nextTopic)
</script>
