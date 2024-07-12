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
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRoadmapStore } from '@/stores/roadmap'
import TopicDrawer from '@/components/TopicDrawer.vue'

const store = useRoadmapStore()
const topics = store.topics
const selectedTopic = ref(null)
const route = useRoute()
const router = useRouter()

const showDrawer = (topic) => {
  selectedTopic.value = topic
  router.push(`/topic/${topic.id}`)
}

const closeDrawer = () => {
  selectedTopic.value = null
  router.push('/')
}

const toggleCompletion = (id) => {
  store.toggleTopicCompletion(id)
}

const checkRouteForTopic = () => {
  const topicId = route.params.id
  if (topicId) {
    const topic = store.getTopicById(Number(topicId))
    if (topic) {
      selectedTopic.value = topic
    }
  }
}

onMounted(() => {
  store.loadProgress()
  checkRouteForTopic()
})

watch(route, () => {
  checkRouteForTopic()
})
</script>
