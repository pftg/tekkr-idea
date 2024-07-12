import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRoadmapStore } from '@/stores/roadmap'

export function useTopicDrawer() {
  const store = useRoadmapStore()
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

  return {
    selectedTopic,
    showDrawer,
    closeDrawer
  }
}
