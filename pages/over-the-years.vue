<template>
    <div>
      <!-- Navigation Bar -->
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src='/img/toea-logo.png' class="h-10" alt="TOEA Icon" />
            <span class="self-center text-xs max-w-xs font-semibold whitespace-nowrap text-gray-700"><b>TESDA Organizational<br>Excellence Award</b></span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
            <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li><a href="/" class="block py-2 px-3 text-gray-900">Home</a></li>
              <li><NuxtLink to="/reports-and-writeups" class="block py-2 px-3 text-gray-900">Reports and Write-ups</NuxtLink></li>
              <li><NuxtLink to="/advisories" class="block py-2 px-3 text-gray-900">Advisories</NuxtLink></li>
              <li><NuxtLink to="/photo-galleries" class="block py-2 px-3 text-gray-900">Photo Galleries</NuxtLink></li>
              <li><a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm">Over The Years</a></li>
            </ul>
          </div>
        </div>
      </nav>
      
       <!-- Over The Years Section -->
    <section class="bg-gray-100 dark:bg-gray-900 py-16 mt-20">
      <div class="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">Over The Years</h2>
        
        <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="#" alt="Year 1" class="w-full h-60 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">2021</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">A brief description of the achievements and milestones.</p>
              <a href="#" class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">Read More</a>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="#" alt="Year 2" class="w-full h-60 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">2022</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">Key highlights and progress during the year.</p>
              <a href="#" class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">Read More</a>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img src="#" alt="Year 3" class="w-full h-60 object-cover">
            <div class="p-6">
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">2023</h3>
              <p class="mt-2 text-gray-600 dark:text-gray-400">Notable events and success stories from this year.</p>
              <a href="#" class="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useFlowbite } from '~/composables/useFlowbite';
  
  onMounted(() => {
    useFlowbite(() => {
      initFlowbite();
    });
  });
  </script>
  
  <style scoped>
  /* Custom styles for hover effects */
  div:hover img {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
  </style>
  