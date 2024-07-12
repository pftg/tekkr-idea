<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">{{ topic.title }}</h2>
    <p class="mb-4">{{ topic.description }}</p>
    <h3 class="text-xl font-semibold mb-2">Guidance</h3>
    <ul class="list-disc list-inside mb-4">
      <li v-for="guidance in topic.guidance" :key="guidance">{{ guidance }}</li>
    </ul>
    <h3 class="text-xl font-semibold mb-2">Practice and Validation</h3>
    <ul class="list-disc list-inside mb-4">
      <li v-for="practice in topic.practice" :key="practice">{{ practice }}</li>
    </ul>
    <h3 class="text-xl font-semibold mb-2">Learning Resources</h3>
    <div v-for="type in linkTypes" :key="type" class="mb-4">
      <h4 class="text-lg font-medium">{{ type }}</h4>
      <ul class="list-disc list-inside">
        <li v-for="link in filteredLinks(type)" :key="link.title">
          <a :href="generateHref(link)" target="_blank" class="text-blue-500 hover:underline">{{ link.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  topic: {
    type: Object,
    required: true
  }
})

const linkTypes = ['Learn', 'Practice', 'Community']

const filteredLinks = (type) => {
  return props.topic.links.filter(link => link.type === type)
}

const generateHref = (link) => {
  if (link.href) {
    return link.href
  } else {
    return `https://perplexity.ai/search?q=${link.title}`
  }
}
</script>
