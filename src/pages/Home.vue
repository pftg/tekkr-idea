<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Engineering Manager Roadmap</h1>
    <Roadmap />
    <ProgressTracker class="mt-6" />
  </div>
</template>

<script setup>
import Roadmap from '@/components/Roadmap.vue'
import ProgressTracker from '@/components/ProgressTracker.vue'
</script>
