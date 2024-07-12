<template>
  <header class="bg-gray-800 text-white p-4">
    <nav class="container mx-auto flex justify-between items-center">
      <div class="text-xl font-bold">Engineering Manager Roadmap</div>
      <ul class="flex space-x-4">
        <li><router-link to="/" class="hover:underline">Home</router-link></li>
        <li>
          <a href="https://github.com/pftg/tekkr-idea/edit/main/src/stores/roadmap.js"
             target="_blank" class="text-white bg-blue-500 px-3 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
            Request Content Update
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
