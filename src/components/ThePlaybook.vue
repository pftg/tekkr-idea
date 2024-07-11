<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="track in tracks" :key="track.id"
      class="relative flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap">
      <div>
        <p class="text-sm font-semibold leading-6 text-gray-900">
          <a @click.prevent="showDrawer(track)" href="#" class="hover:underline">
            <span class="absolute inset-x-0 -top-px bottom-0" />
            {{ track.title }}
          </a>
        </p>
        <div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
          <p>
            <a :href="track.author.href" class="hover:underline">{{ track.author.name }}</a>
          </p>
          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 fill-current">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <p>
            <time :datetime="track.dateTime">{{ track.date }}</time>
          </p>
        </div>
      </div>
      <dl class="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
        <ChevronRightIcon class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
      </dl>
    </li>
  </ul>
  <Step :title="selectedTrack.title" :details="selectedTrack.details" v-if="selectedTrack" />
</template>

<script setup>
import { ChatBubbleLeftIcon, CheckCircleIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import Step from './Step.vue'
import { ref } from 'vue'

const tracks = ref([
  {
    id: 1,
    title: 'Atque perspiciatis et et aut ut porro voluptatem blanditiis?',
    details: 'Description 1',
    href: '#',
    author: { name: 'Tekkr', href: '#' },
    date: '2d ago',
    dateTime: '2023-01-23T22:34Z',
    status: 'active',
  },
  {
    id: 2,
    title: 'Et ratione distinctio nesciunt recusandae vel ab?',
    details: 'Description 2',
    href: '#',
    author: { name: 'Tekkr', href: '#' },
    date: '2d ago',
    dateTime: '2023-01-23T19:20Z',
    status: 'active'
  }
])

const selectedTrack = ref(null)

const showDrawer = (track) => {
  selectedTrack.value = track
}
</script>
