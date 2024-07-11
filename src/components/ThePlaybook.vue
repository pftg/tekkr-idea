<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="track in tracks" :key="track.id"
      class="relative x flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap">
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
    category: 'Personal Development',
    title: 'Communication Skills',
    details: 'The ability to convey ideas clearly and effectively to various stakeholders, including team members, upper management, and cross-functional partners.',
    href: '#',
    author: { name: 'Tekkr', href: '#' },
    date: '2d ago',
    dateTime: '2023-01-23T22:34Z',
    status: 'active',
  },
  {
    id: 2,
    category: 'Personal Development',
    title: 'Strategic Thinking and Planning',
    details: 'The ability to align team activities with broader organizational goals and anticipate future challenges and opportunities.',
    href: '#',
    author: { name: 'Tekkr', href: '#' },
    date: '2d ago',
    dateTime: '2023-01-23T19:20Z',
    status: 'active'
  },
  {
    id: 3,
    category: 'People Management',
    title: 'Leadership and Team Management',
    details: 'The ability to inspire, motivate, and guide a team towards achieving common goals.',
    href: '#',
    author: { name: 'Tekkr', href: '#' },
    date: '2d ago',
    dateTime: '2023-01-23T19:20Z',
    status: 'active'
  },
  {
    id: 4,
    category: 'People Management',
    title: 'Performance Management and Development',
    details: 'The ability to evaluate team performance, provide constructive feedback, and foster continuous professional growth.',
    href: '#',
    author: { name: 'Tekkr', href: '#' },
    date: '2d ago',
    dateTime: '2023-01-23T19:20Z',
    status: 'active'
  },
  {
    id: 5,
    category: 'Software Development Life Cycle',
    title: 'Project Management',
    details: 'The ability to plan, execute, and oversee projects to ensure they are completed on time, within budget, and to the required quality standards.',
    href: '#',
    author: { name: 'Tekkr', href: '#' },
    date: '2d ago',
    dateTime: '2023-01-23T19:20Z',
    status: 'active'
  },
  {
    id: 6,
    category: 'Software Development Life Cycle',
    title: 'Maintaining Technical Proficiency',
    details: 'Maintaining a strong understanding of the technical aspects of software development to make informed decisions and provide effective guidance to the team.',
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
