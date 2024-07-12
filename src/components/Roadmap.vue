<template>
  <div class="space-y-4">
    <div v-for="topic in topics" :key="topic.id" class="p-4 border rounded-md hover:bg-gray-100 flex items-center justify-between">
      <div>
        <p class="text-sm font-medium text-gray-600">{{ topic.category }}</p>
        <a @click="showDrawer(topic)" class="text-lg font-semibold text-blue-500 hover:underline cursor-pointer">
          {{ topic.title }}
        </a>
        <p class="text-sm text-gray-600">{{ topic.description }}</p>
      </div>
      <input type="checkbox" :checked="topic.completed" @change="toggleCompletion(topic.id)" />
    </div>
    <TopicDrawer v-if="selectedTopic" :topic="selectedTopic" @close="closeDrawer" />
  </div>
</template>

<script setup>
import { useRoadmapStore } from '@/stores/roadmap'
import TopicDrawer from '@/components/TopicDrawer.vue'
import { useTopicDrawer } from '@/composables/useTopicDrawer'

const store = useRoadmapStore()
const topics = store.topics
const { selectedTopic, showDrawer, closeDrawer } = useTopicDrawer()

const toggleCompletion = (id) => {
  store.toggleTopicCompletion(id)
}
</script>
